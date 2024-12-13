export interface Environment {
  title: string
  icon: Icon
}

export const environments = [
  {
    title: 'VSCode',
    icon: {
      type: 'custom',
      name: 'visualStudioCode',
    },
  },
  {
    title: 'Git',
    icon: {
      type: 'brand',
      name: 'gitAlt',
    },
  },
  {
    title: 'Ubuntu (WSL)',
    icon: {
      type: 'brand',
      name: 'ubuntu',
    },
  },
  {
    title: 'Terminal',
    icon: {
      type: 'solid',
      name: 'rectangleTerminal',
    },
  },
  {
    title: 'Adobe',
    icon: {
      type: 'custom',
      name: 'adobe',
    },
  },
  {
    title: 'Docker',
    icon: {
      type: 'brand',
      name: 'docker',
    },
  },
] as const satisfies Environment[]
