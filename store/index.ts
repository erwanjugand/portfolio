import { defineStore } from "pinia"
import environements from "./state/environments"
import experiences from "./state/experiences"
import releases from "./state/releases"

export const useStore = defineStore({
  id: 'store',
  state: () => {
    return {
      environmentsList: environements,
      experiencesList: experiences,
      releasesList: releases,
    }
  },
  actions: {},
  getters: {
    environments: state => state.environmentsList,
    experiences: state => state.experiencesList,
    releases: state => state.releasesList
  },
})
