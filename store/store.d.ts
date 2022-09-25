export interface Environment {
  title: string
  name: string
}

export interface Job {
  key: string
  contract: 'apprenticeship' | 'cdi' | 'internship'
  startedAt: Date
  finishedAt: Date
}

export interface Experience {
  enterprise: string
  jobs: Job[]
}

export interface Tag {
  name: string
  color: string
}

export interface Skill {
  name: string
  level: 0 | 1 | 2 | 3
}

export interface Release {
  name: string
  date: Date
  major: boolean
  tags: Tag[]
}

export interface EasterEggStep {
  text: string
  value: number
  duration: number
}

export interface State {
  environmentsList: Environment[]
  experiencesList: Experience[]
  skillsList: Skill[]
  releasesList: Release[]
  easterEggStepsList: EasterEggStep[]
}
