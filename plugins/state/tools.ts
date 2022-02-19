import { Tool } from '~/models'
import uniqueId from '~/utils/uniqueId'

const toolDatas: Omit<Tool, 'id'>[] = [
  {
    title: 'Git',
    name: 'git'
  },
  {
    title: 'Bash',
    name: 'bash'
  },
  {
    title: 'PhpStorm',
    name: 'phpStorm'
  },
  {
    title: 'EazyPHP',
    name: 'easyphp'
  },
  {
    title: 'Filezilla',
    name: 'filezilla'
  },
  {
    title: 'Atom',
    name: 'atom'
  },
  {
    title: 'VSCode',
    name: 'visualStudioCode'
  },
  {
    title: 'Photoshop',
    name: 'photoshop'
  },
  {
    title: 'Illustrator',
    name: 'illustrator'
  },
  {
    title: 'Premiere Pro',
    name: 'premierePro'
  },
  {
    title: 'After Effects',
    name: 'afterEffects'
  },
  {
    title: 'InDesign',
    name: 'indesign'
  }
]

const tools: Tool[] = toolDatas.map(tool => ({
  ...{
    id: +uniqueId()
  },
  ...tool
}))

export default tools
