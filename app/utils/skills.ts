export interface Skill {
  name: string
  level: 0 | 1 | 2 | 3
}

export const MAX_LEVEL = 3

export const skills = [
  {
    level: 3,
    name: 'Vue.js',
  },
  {
    level: 3,
    name: 'Nuxt.js',
  },
  {
    level: 3,
    name: 'JavaScript',
  },
  {
    level: 3,
    name: 'HTML',
  },
  {
    level: 3,
    name: 'CSS',
  },
  {
    level: 3,
    name: 'SCSS',
  },
  {
    level: 2,
    name: 'TypeScript',
  },
  {
    level: 1,
    name: 'PHP',
  },
  {
    level: 1,
    name: 'Symfony',
  },
  {
    level: 1,
    name: 'Mysql',
  },
  {
    level: 1,
    name: 'Rails',
  },
] as const satisfies Skill[]
