import { defineStore } from 'pinia'
import environments from './state/environments'
import experiences from './state/experiences'
import skills from './state/skills'
import releases from './state/releases'
import easterEggSteps from './state/easter-egg'
import informations from './state/informations'
import { type State } from './store'

export const useStore = defineStore({
  id: 'store',
  state: (): State => {
    return {
      environmentsList: environments,
      experiencesList: experiences,
      skillsList: skills,
      releasesList: releases,
      easterEggStepsList: easterEggSteps,
      informationsList: informations,
    }
  },
  actions: {},
  getters: {
    environments: (state: State) => state.environmentsList,
    experiences: (state: State) => state.experiencesList,
    skills: (state: State) => state.skillsList,
    releases: (state: State) => state.releasesList,
    lastRelease: (state: State) => state.releasesList[0],
    releasesWithTagName: (state: State) => (tagName: string) => {
      return state.releasesList.filter(release => release.tags.some(tag => tag.name === tagName))
    },
    easterEggSteps: (state: State) => state.easterEggStepsList,
    informations: (state: State) => state.informationsList,
  },
})
