import { Skill } from '~/models'
import uniqueId from '~/utils/uniqueId'

const skillDatas: Omit<Skill, 'id'>[] = [
  {
    level: 3,
    name: 'HTML 5'
  },
  {
    level: 3,
    name: 'CSS 3'
  },
  {
    level: 3,
    name: 'SCSS'
  },
  {
    level: 3,
    name: 'JavaScript'
  },
  {
    level: 2,
    name: 'TypeScript'
  },
  {
    level: 3,
    name: 'LESS'
  },
  {
    level: 2,
    name: 'PHP 7'
  },
  {
    level: 2,
    name: 'Symfony 5'
  },
  {
    level: 1,
    name: 'Mysql'
  },
  {
    level: 3,
    name: 'MJML 3'
  },
  {
    level: 1,
    name: 'Rails'
  }
]

const skills: Skill[] = skillDatas.map(skill => ({
  ...{
    id: +uniqueId()
  },
  ...skill
}))

export default skills
