export interface Environment {
  title: string
  name: string
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
