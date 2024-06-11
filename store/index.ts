import { defineStore } from 'pinia'
import { environments } from './state/environments'
import { experiences } from './state/experiences'
import { skills } from './state/skills'
import { releases } from './state/releases'
import { easterEggSteps } from './state/easter-egg'
import { informations } from './state/informations'

export const useStore = defineStore('store', () => {
  const lastRelease = releases[0]
  const releasesWithTagName = (tagName: string) =>
    releases.filter(release => release.tags.some(tag => tag.name === tagName))

  return {
    environments,
    experiences,
    skills,
    releases,
    lastRelease,
    releasesWithTagName,
    easterEggSteps,
    informations,
  }
})
