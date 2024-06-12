export interface Information {
  title: string
  icon: string
  content: string
  cta: string
  target?: string
  rel?: string
}

export const informations: ReadonlyTuple<Information, 3> = [
  {
    title: 'phone',
    icon: 'phone',
    content: '06 18 07 30 23',
    cta: 'tel:0618073023',
  },
  {
    title: 'address',
    icon: 'mapLocationDot',
    content: '35000 Rennes, France',
    cta: 'https://goo.gl/maps/x2VLbukCJ4L2',
    target: '_blank',
    rel: 'noopener',
  },
  {
    title: 'email',
    icon: 'envelope',
    content: 'erwan.jugand@gmail.com',
    cta: 'mailto:erwan.jugand+portfolio@gmail.com',
  },
]
