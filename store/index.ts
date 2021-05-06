import { getAccessorType, mutationTree } from 'typed-vuex'
import * as works from './works'
import * as workFilters from './workFilters'
import * as releases from './releases'
import * as experiences from './experiences'
import * as skills from './skills'

export const state = () => ({
  menuOpened: false
})

export const mutations = mutationTree(state, {
  setMenuOpening (state, data: boolean) {
    state.menuOpened = data
  }
})

export const accessorType = getAccessorType({
  state,
  mutations,
  modules: {
    works,
    workFilters,
    releases,
    experiences,
    skills
  }
})
