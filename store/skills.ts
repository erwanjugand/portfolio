import { actionTree, mutationTree } from 'nuxt-typed-vuex'
import { Skill } from '~/models'

export const state = () => ({
  items: [] as Skill[],
  fetched: false
})

export const mutations = mutationTree(state, {
  setSkill (state, skill: Skill) {
    const index = state.items.findIndex(wf => wf.id === skill.id)

    if (index < 0) {
      state.items.push(skill)
    } else {
      state.items.splice(index, 1, skill)
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
          const skills: Skill[] = await this.$axios.$get(`${this.app.$config.apiUrl}/skills`)
          for (const skill of skills) {
            commit('setSkill', skill)
          }
          commit('setFetchedStatus', true)
          state.fetched = true
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error('Failed to download Skills')
        }
      }
    }
  }
)
