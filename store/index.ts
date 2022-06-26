import { defineStore } from "pinia"
import environements from "./state/environments"
import releases from "./state/releases"

export const useStore = defineStore({
  id: 'store',
  state: () => {
    return {
      environmentsList: environements,
      releasesList: releases,
    }
  },
  actions: {},
  getters: {
    environments: state => state.environmentsList,
    releases: state => state.releasesList
  },
})
