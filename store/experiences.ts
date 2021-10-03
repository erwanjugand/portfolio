import { actionTree, mutationTree } from 'nuxt-typed-vuex'
import { compareDesc, getYear } from 'date-fns'
import { Experience } from '~/models'

export const state = () => ({
  items: [] as Experience[],
  fetched: false
})

export const mutations = mutationTree(state, {
  setExperience (state, experience: Experience) {
    const index = state.items.findIndex(wf => wf.id === experience.id)

    experience.dateRealization = new Date(experience.dateRealization)
    experience.year = getYear(new Date(experience.dateRealization))

    if (index < 0) {
      state.items.push(experience)
    } else {
      state.items.splice(index, 1, experience)
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
          const experiences = await this.$axios.$get<Experience[]>(`${this.app.$config.apiUrl}/experiences`)
          experiences.sort((a, b) => compareDesc(new Date(a.dateRealization), new Date(b.dateRealization)))
          for (const experience of experiences) {
            commit('setExperience', experience)
          }
          commit('setFetchedStatus', true)
          state.fetched = true
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error('Failed to download Experiences')
        }
      }
    }
  }
)
