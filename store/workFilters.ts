import { actionTree, mutationTree } from 'nuxt-typed-vuex'
import { WorkFilter } from '~/models'

export const state = () => ({
  items: [] as WorkFilter[],
  fetched: false
})

export const mutations = mutationTree(state, {
  setWorkFilter (state, workFilter: WorkFilter) {
    const index = state.items.findIndex(wf => wf.id === workFilter.id)

    if (index < 0) {
      state.items.push(workFilter)
    } else {
      state.items.splice(index, 1, workFilter)
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
          const workFilters: WorkFilter[] = await this.$axios.$get(`${this.app.$config.apiUrl}/work_filters`)
          for (const workFilter of workFilters) {
            workFilter.name = this.$i18n.t('works.filters.' + workFilter.identifier)
            commit('setWorkFilter', workFilter)
          }
          commit('setFetchedStatus', true)
          state.fetched = true
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error('Failed to download Work Filters')
        }
      }
    }
  }
)
