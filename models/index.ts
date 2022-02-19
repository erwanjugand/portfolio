// Works

export interface Id {
  id: number
}

export interface Image {
  id: number
  alt: string
  url: string
}

export interface Video {
  id: number
  link: string
}

export interface WorkFilter {
  id: number
  identifier: string
  works: Id[]
}
export interface Work {
  id: number
  dateRealization: Date
  description: string
  filters: Id[]
  slug: string
  title: string
  images: Image[]
  videos: Video[]
  updated: Date
}

// Skills

export interface Skill {
  id: number
  level: 0 | 1 | 2 | 3
  name: string
}

// Experience

export interface Experience {
  id: number
  contract: string
  dateRealization: Date
  description: string
  name: string
  year: number
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
  id: number
  title: string
  name: string
}

// Easter Egg

export interface EasterEggStep {
  text: string
  value: number
  duration: number
}
