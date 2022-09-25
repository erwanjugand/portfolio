import type { IconPathData } from '@fortawesome/fontawesome-common-types'

export interface Icon {
  path: IconPathData
  width: number
  height: number
}

export interface Icons {
  [type: string]: {
    [name: string]: Icon
  }
}
