import { defineStore } from 'pinia'
import { environments, type Environment } from './state/environments'
import { experiences, type Experience } from './state/experiences'
import { skills, type Skill } from './state/skills'
import { releases, type Release } from './state/releases'
import { easterEggSteps, type EasterEggStep } from './state/easter-egg'
import { informations, type Information } from './state/informations'

interface State {
  environmentsList: Environment[]
  experiencesList: Experience[]
  skillsList: Skill[]
  releasesList: Release[]
  easterEggStepsList: EasterEggStep[]
  informationsList: Information[]
}

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
