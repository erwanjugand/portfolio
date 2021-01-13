// Global

export interface Model {
  id: number
}

// Works

export interface WorkFilter extends Model {
  level: number
  name: string
}

export interface Work extends Model {
  created: Date
  dateRealization: Date
  description: string
  filters: WorkFilter[]
  slug: string
  title: string
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

// Pages

export interface Page extends Model {
  data: any[]
  metaDescription: string
  metaTitle: string
  name: string
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
