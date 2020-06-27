// Works

export interface Work {
  id: number
  title: string
  description: string
  dateRealization: Date
  created: Date
  slug: string
  filters: WorkFilter[]
}

export interface WorkFilter {
  id: number
  name: string
  level: number
}

// Skills

export interface Skill {
  id: number
}

// Experience

export interface Experience {
  id: number
  name: string
  description: string
  dateRealization: Date
}

// Releases

export interface Release {
  id: number
  name: string
  date: Date
  major: boolean
  tags: Tag[]
}

export interface Tag {
  id: number
  name: string
  color: string
}

// Pages

export interface Page {
  id: number
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
