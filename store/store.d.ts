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

export interface Release {
  name: string
  date: Date
  major: boolean
  tags: Tag[]
}
