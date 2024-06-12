import { defineStore } from 'pinia'
import { environments } from './state/environments'
import { experiences } from './state/experiences'
import { skills } from './state/skills'
import { releases } from './state/releases'
import { easterEggSteps } from './state/easter-egg'
import { informations } from './state/informations'

export type ReadonlyTuple<T, N extends number, R extends readonly unknown[] = []> = R['length'] extends N
  ? R
  : ReadonlyTuple<T, N, readonly [T, ...R]>

export const useStore = defineStore('store', () => {
  const releasesWithTagName = (tagName: string) =>
    releases.filter(release => release.tags.some(tag => tag.name === tagName))

  return {
    environments,
    experiences,
    skills,
    releases,
    releasesWithTagName,
    easterEggSteps,
    informations,
  }
})
