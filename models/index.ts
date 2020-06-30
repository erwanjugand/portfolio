// Global

export interface Model {
  id: number
}

// Works

export interface Work extends Model {
  title: string
  description: string
  dateRealization: Date
  created: Date
  slug: string
  filters: WorkFilter[]
}

export interface WorkFilter extends Model {
  name: string
  level: number
}

// Skills

export interface Skill extends Model {
}

// Experience

export interface Experience extends Model {
  name: string
  description: string
  dateRealization: Date
}

// Releases

export interface Release extends Model {
  name: string
  date: Date
  major: boolean
  tags: Tag[]
}

export interface Tag extends Model {
  name: string
  color: string
}

// Pages

export interface Page extends Model {
  name: string
  metaTitle: string
  metaDescription: string
  data: any[]
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
  name: string,
  icon: string,
  route: string
}
