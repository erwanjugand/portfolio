export interface Information {
  title: string
  icon: string
  content: string
  cta: string
  externalLink: boolean
}

export const informations = [
  {
    title: 'phone',
    icon: 'phone',
    content: '06 18 07 30 23',
    cta: 'tel:0618073023',
    externalLink: false,
  },
  {
    title: 'address',
    icon: 'mapLocationDot',
    content: '35000 Rennes, France',
    cta: 'https://goo.gl/maps/x2VLbukCJ4L2',
    externalLink: true,
  },
  {
    title: 'email',
    icon: 'envelope',
    content: 'erwan.jugand@gmail.com',
    cta: 'mailto:erwan.jugand+portfolio@gmail.com',
    externalLink: false,
  },
] as const satisfies Information[]
