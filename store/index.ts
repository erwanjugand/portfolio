import { defineStore } from 'pinia'
import environements from './state/environments'
import experiences from './state/experiences'
import skills from './state/skills'
import releases from './state/releases'

export const useStore = defineStore({
  id: 'store',
  state: () => {
    return {
      environmentsList: environements,
      experiencesList: experiences,
      skillsList: skills,
      releasesList: releases
    }
  },
  actions: {},
  getters: {
    environments: state => state.environmentsList,
    experiences: state => state.experiencesList,
    skills: state => state.skillsList,
    releases: state => state.releasesList
  }
})
