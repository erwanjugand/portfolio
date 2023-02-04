type IconType = 'light' | 'regular' | 'solid' | 'brand' | 'custom'

interface Icon {
  path: string | string[]
  width: number
  height: number
}

interface Icons {
  [type: string]: {
    [key: string]: Icon
  }
}
