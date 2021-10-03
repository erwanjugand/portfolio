import type { Locale } from 'date-fns'
import type { TranslateResult } from 'vue-i18n'

// Global

export interface Model {
  id: number
}

// DateFns

export interface LocaleDate {
  [type: string]: Locale
}

// Works

export interface Image extends Model {
  alt: string
  url: string
}

export interface Video extends Model {
  link: string
}

export interface WorkFilter extends Model {
  identifier: string
  name: TranslateResult
  works: Array<{ id: number }>
}
export interface Work extends Model {
  dateRealization: Date
  description: string
  filters: Array<{ id: number }>
  slug: string
  title: string
  images: Image[]
  videos: Video[]
  updated: Date
}

// Skills

export interface Skill extends Model {
  level: number
  name: string
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
  path: string
  viewBox: string
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
  title: string
  name: string
}

// Easter Egg

export interface EasterEggStep {
  text: string
  value: number
  duration: number
}
