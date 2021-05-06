import { actionTree, mutationTree } from 'nuxt-typed-vuex'
import { Work } from '~/models'
import slugify from '~/utils/text'

export const state = () => ({
  items: [] as Work[],
  fetched: false
})

export const mutations = mutationTree(state, {
  setWork (state, work: Work) {
    const index = state.items.findIndex(w => w.id === work.id)

    work.dateRealization = new Date(work.dateRealization)
    work.slug = slugify(work.id + '-' + work.title)

    if (index < 0) {
      state.items.push(work)
    } else {
      state.items.splice(index, 1, work)
    }
  },

  setFetchedStatus (state, status: boolean) {
    state.fetched = status
  }
})

export const actions = actionTree(
  { state, mutations },
  {
    async fetchAll ({ commit, state }) {
      if (!state.fetched) {
        try {
          const works: Work[] = await this.$axios.$get(`${this.app.$config.apiUrl}/works`)
          for (const work of works) {
            commit('setWork', work)
          }
          commit('setFetchedStatus', true)
          state.fetched = true
        } catch (e) {
          console.error('Failed to download Works')
        }
      }
    },

    async fetch ({ state, commit }, id: number) {
      if (!state.items.some(w => w.id === id)) {
        try {
          const work: Work = await this.$axios.$get(`${this.app.$config.apiUrl}/works/${id}`)
          commit('setWork', work)
        } catch (e) {
          console.error('Failed to download Work')
        }
      }
    }
  }
)
