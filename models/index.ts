import { IconPathData } from '@fortawesome/fontawesome-common-types'

// Skills

export interface Skill {
  id: number
  level: 0 | 1 | 2 | 3
  name: string
}

// Experience

export const enum ExperienceContract {
  APPRENTICESHIP = 'apprenticeship',
  CDI = 'cdi',
  INTERNSHIP = 'internship'
}

export interface Job {
  key: string
  contract: ExperienceContract
  startedAt: Date
  finishedAt: Date
}

export interface Experience {
  id: number
  enterprise: string
  jobs: Job[]
}

// Releases

export interface Tag {
  id: number
  color: string
  name: string
}

export interface Release {
  id: number
  date: Date
  major: boolean
  name: string
  tags: Tag[]
}

// Icons

export interface Icon {
  path: IconPathData
  width: number
  height: number
}

export interface Icons {
  [type: string]: {
    [name: string]: Icon
  }
}

// Header

export interface Link {
  icon: string
  name: string
  route: string
}

// Tools

export interface Tool {
  id: number
  title: string
  name: string
}

// Contact

export interface Form {
  email?: string
  title?: string
  message?: string
}

// Easter Egg

export interface EasterEggStep {
  text: string
  value: number
  duration: number
}
