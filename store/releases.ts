import { actionTree, mutationTree } from 'nuxt-typed-vuex'
import { Release } from '~/models'

export const state = () => ({
  items: [] as Release[],
  fetched: false
})

export const mutations = mutationTree(state, {
  setRelease (state, release: Release) {
    const index = state.items.findIndex(wf => wf.id === release.id)

    release.date = new Date(release.date)

    if (index < 0) {
      state.items.push(release)
    } else {
      state.items.splice(index, 1, release)
    }
  },

  setFetchedStatus (state, status: boolean) {
    state.fetched = status
  }
})

export const actions = actionTree(
  { state, mutations },
  {
    async fetchAll ({ state, commit }) {
      if (!state.fetched) {
        try {
          const releases: Release[] = await this.$axios.$get(`${this.app.$config.apiUrl}/versions`)
          for (const release of releases) {
            commit('setRelease', release)
          }
          commit('setFetchedStatus', true)
          state.fetched = true
        } catch (e) {
          console.error('Failed to download Releases')
        }
      }
    }
  }
)
