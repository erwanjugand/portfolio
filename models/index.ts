import { Locale } from 'date-fns'

// Global

export interface Model {
  id: number
}

// DateFns

export interface LocaleDate {
  [type: string]: Locale
}

// Works

export interface WorkFilter extends Model {
  name: string
  works: Array<{ id: number }>
}
export interface Work extends Model {
  created: Date
  dateRealization: Date
  description: string
  filters: Array<{ id: number }>
  slug: string
  title: string
  updated: Date
}

// Skills

export interface Skill extends Model {
}

// Experience

export interface Experience extends Model {
  contract: string
  dateRealization: Date
  description: string
  name: string
  year: number
}

// Releases

export interface Tag extends Model {
  color: string
  name: string
}

export interface Release extends Model {
  date: Date
  major: boolean
  name: string
  tags: Tag[]
}

// Icons

export interface Icon {
  path: string,
  viewBox: string
}

export interface Icons {
  [type: string]: {
    [name: string]: Icon
  }
}

// Header

export interface Link {
  icon: string,
  name: string,
  route: string
}
