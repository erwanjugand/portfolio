// Global

export interface Model {
  id: number
}

// Works

export interface Work extends Model {
  created: Date
  dateRealization: Date
  description: string
  filters: WorkFilter[]
  slug: string
  title: string
}

export interface WorkFilter extends Model {
  level: number
  name: string
}

// Skills

export interface Skill extends Model {
}

// Experience

export interface Experience extends Model {
  dateRealization: Date
  description: string
  name: string
}

// Releases

export interface Release extends Model {
  date: Date
  major: boolean
  name: string
  tags: Tag[]
}

export interface Tag extends Model {
  color: string
  name: string
}

// Pages

export interface Page extends Model {
  data: any[]
  metaDescription: string
  metaTitle: string
  name: string
}

// Icons

export interface Icons {
  [type: string]: {
    [name: string]: Icon
  }
}
export interface Icon {
  path: string,
  viewBox: string
}

// Header

export interface Link {
  icon: string,
  name: string,
  route: string
}
