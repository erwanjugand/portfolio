import { defineStore } from 'pinia'
import environements from './state/environments'
import experiences from './state/experiences'
import skills from './state/skills'
import releases from './state/releases'
import easterEggSteps from './state/easter-egg'
import { State } from './store'

export const useStore = defineStore({
  id: 'store',
  state: (): State => {
    return {
      environmentsList: environements,
      experiencesList: experiences,
      skillsList: skills,
      releasesList: releases,
      easterEggStepsList: easterEggSteps
    }
  },
  actions: {},
  getters: {
    environments: (state: State) => state.environmentsList,
    experiences: (state: State) => state.experiencesList,
    skills: (state: State) => state.skillsList,
    releases: (state: State) => state.releasesList,
    easterEggSteps: (state: State) => state.easterEggStepsList
  }
})
