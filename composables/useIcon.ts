import * as fal from '@fortawesome/pro-light-svg-icons'
import * as far from '@fortawesome/pro-regular-svg-icons'
import * as fas from '@fortawesome/pro-solid-svg-icons'
import * as fab from '@fortawesome/free-brands-svg-icons'
import { type IconPathData, type IconDefinition } from '@fortawesome/fontawesome-common-types'
import { type MaybeRefOrGetter } from 'vue'

export const enum IconStyle {
  light = 'light',
  regular = 'regular',
  solid = 'solid',
  brand = 'brand',
  custom = 'custom',
}

export interface Icon {
  style: IconStyle
  name: string
}

export interface IconData {
  path: IconPathData
  viewbox: `0 0 ${number} ${number}`
}

export type Icons = {
  [key in IconStyle]: GenericObject<IconData>
}

const formatIcon = (faIcon: IconDefinition): IconData => {
  return {
    path: faIcon.icon[4],
    viewbox: `0 0 ${faIcon.icon[0]} ${faIcon.icon[1]}`,
  }
}

export const icons: Icons = {
  custom: {
    adobe: {
      path: 'M40 19.34v1.32c-.01.07-.03.14-.04.21-.07.57-.11 1.15-.21 1.72-.31 1.85-.97 3.57-1.96 5.15-1.5 2.41-3.53 4.25-6.08 5.51-1.47.73-3.06 1.2-4.69 1.38l-1.09.12H11.9c-.07-.01-.14-.03-.21-.04-1.42-.09-2.78-.41-4.08-.98-2.83-1.24-4.94-3.24-6.32-6.01-.61-1.22-1-2.54-1.17-3.89L0 22.85v-1.28c.01-.07.03-.14.04-.21.07-1.23.33-2.42.77-3.57 1.19-3.08 3.27-5.37 6.23-6.85 1.53-.77 3.17-1.17 4.88-1.26.84-.04 1.67 0 2.51.11.08.01.18-.02.24-.08 1.2-1.22 2.56-2.22 4.1-2.97 1.49-.73 3.06-1.2 4.71-1.39l1.17-.12h1.2c.08.01.16.03.24.04.59.07 1.19.11 1.78.21 1.83.31 3.54.97 5.12 1.94 2.42 1.5 4.27 3.53 5.53 6.09.73 1.47 1.2 3.06 1.38 4.69.02.39.06.77.1 1.14m-22.37-8.52c.02.03.03.05.04.05.82.41 1.61.88 2.35 1.42.05.03.16.02.22-.02 2.04-1.29 4.25-1.74 6.62-1.32 2.32.41 4.22 1.57 5.66 3.43 1.64 2.1 2.26 4.47 1.81 7.11-.3 1.77-1.01 3.36-2.22 4.69-2.2 2.43-4.95 3.43-8.19 3-2-.26-3.72-1.12-5.14-2.56-1.83-1.85-3.67-3.68-5.51-5.53-.24-.25-.52-.44-.87-.49-.62-.08-1.17.23-1.44.78-.24.49-.21 1.05.31 1.56 2.05 2.01 4.07 4.04 6.12 6.05.35.35.72.67 1.12.96 1.49 1.08 3.18 1.68 5 1.92 1.43.19 2.85.15 4.26-.17 2.69-.6 4.91-1.97 6.67-4.09 1.45-1.75 2.32-3.76 2.63-6.01.18-1.29.14-2.59-.11-3.87-.41-2.08-1.29-3.95-2.7-5.54-2.7-3.03-6.09-4.38-10.12-4.08-1.55.12-3.02.57-4.4 1.3-.76.4-1.46.87-2.11 1.41m-.98 21.13c-.06-.05-.11-.1-.17-.16-.84-.79-1.68-1.57-2.5-2.37-.16-.15-.31-.23-.53-.22-.84.02-1.68.02-2.5-.16-4.1-.93-6.48-5.39-4.97-9.31 1.19-3.09 4.49-4.98 7.75-4.4 1.46.26 2.74.88 3.79 1.96 1.28 1.32 2.6 2.61 3.9 3.92.29.3.63.43 1.04.38.53-.08.95-.33 1.14-.84.19-.51.1-.99-.29-1.38-1.36-1.38-2.69-2.79-4.1-4.11-2.74-2.56-5.98-3.32-9.56-2.23-4.81 1.46-7.63 6.43-6.53 11.34 1 4.47 4.91 7.61 9.49 7.61h3.83c.05-.02.11-.03.21-.03',
      viewbox: '0 0 40 40',
    },
    easterEgg: {
      path: 'M508.5 135L259.4 15c-2.1-1-4.1-1-6.2 0L4.1 135C1 136 0 138.1 0 141.2v202c0 2.1 1 5.1 4.1 6.2L80 385.2c4.1 2.1 9.2-1 9.2-6.2v-4.1c0-5.1 5.1-8.2 9.2-6.2l16.4 7.2c2.1 1 4.1 3.1 4.1 6.2v46.1c0 2.1 1 5.1 4.1 6.2l35.9 16.4c4.1 2.1 9.2-1 9.2-6.2v-33.8c0-4.1 3.1-6.2 6.2-6.2 4.1 0 6.2 3.1 6.2 6.2V458c0 2.1 1 5.1 4.1 6.2l27.7 13.3c4.1 2.1 9.2-1 9.2-6.2v-42c0-4.1 3.1-6.2 6.2-6.2h2.1c4.1 0 6.2 3.1 6.2 6.2v56.4c0 3.1 2.1 5.1 4.1 6.2l13.3 5.1c2.1 1 3.1 1 5.1 0l13.3-5.1c2.1-1 4.1-3.1 4.1-6.2v-56.4c0-4.1 3.1-6.2 6.2-6.2h2.1c4.1 0 6.2 3.1 6.2 6.2v42c0 5.1 5.1 8.2 9.2 6.2l27.7-13.3c2.1-1 4.1-3.1 4.1-6.2v-47.2c0-4.1 3.1-6.2 6.2-6.2s6.2 3.1 6.2 6.2v33.8c0 5.1 5.1 8.2 9.2 6.2l35.9-16.4c2.1-1 4.1-3.1 4.1-6.2v-46.1c0-3.1 1-5.1 4.1-6.2l16.4-7.2c4.1-2.1 9.2 1 9.2 6.2v4.1c0 5.1 5.1 8.2 9.2 6.2l75.9-35.9c2.1-1 4.1-3.1 4.1-6.2v-202c.7-3-.3-5.1-3.4-6.1zm-368 6.2l18.5-14.4c3.1-2.1 7.2 0 7.2 3.1v27.7c0 4.1-4.1 6.2-7.2 3.1l-18.5-14.4c-2.1 1-2.1-3.1 0-5.1zm-80-8.2c0-4.1 4.1-6.2 7.2-3.1l18.5 13.3c2.1 2.1 2.1 5.1 0 7.2l-18.5 14.4c-3.1 2.1-7.2 0-7.2-3.1V133zM44.1 252.9c0 4.1-4.1 6.2-7.2 3.1l-18.5-14.4c-2.1-2.1-2.1-5.1 0-7.2L36.9 220c3.1-2.1 7.2 0 7.2 3.1v29.8zm43 84.1l-16.4 13.3c-3.1 2.1-7.2 0-7.2-3.1v-25.6c0-4.1 4.1-6.2 7.2-3.1l16.4 13.3c3.1.1 3.1 3.1 0 5.2zm79 10.3c0 4.1-4.1 6.2-7.2 4.1L139.4 338c-2.1-2.1-2.1-5.1 0-7.2l19.5-13.3c3.1-2.1 7.2 0 7.2 4.1v25.7zm9.2-103.6c-3.1 46.1-32.8 81-66.6 78.9s-58.4-41-55.4-87.1c3.1-46.1 32.8-81 66.6-78.9s58.5 41 55.4 87.1zm33.9 2l-18.5 14.4c-3.1 2.1-7.2 0-7.2-3.1v-27.7c0-4.1 4.1-6.2 7.2-3.1l18.5 14.4c3 0 3 3.1 0 5.1zM272.7 376c-4.1 0-9.2-3.1-16.4-3.1-7.2 0-12.3 3.1-16.4 3.1s-13.3-1-13.3-11.3 20.5-21.5 29.7-22.6c9.2 0 29.7 12.3 29.7 22.6 1.1 10.2-8.1 11.3-13.3 11.3zm57.4-120c0 4.1-4.1 6.2-7.2 3.1l-18.5-13.3c-2.1-2.1-2.1-5.1 0-7.2l18.5-14.4c3.1-2.1 7.2 0 7.2 3.1V256zm97.4-112.8l18.5-14.4c3.1-2.1 7.2 0 7.2 3.1v27.7c0 4.1-4.1 6.2-7.2 3.1l-18.5-14.4c-2 0-2-3 0-5.1zm-78.9-12.3c0-4.1 4.1-6.2 7.2-3.1l18.5 14.4c2.1 2.1 2.1 5.1 0 7.2l-18.5 14.4c-3.1 2.1-7.2 0-7.2-3.1v-29.8zM374.2 337l-19.5 13.3c-3.1 2.1-7.2 0-7.2-4.1v-27.7c0-4.1 4.1-6.2 7.2-4.1l19.5 13.3c3.1 4.2 3.1 7.2 0 9.3zm75.9 9.2c0 4.1-4.1 6.2-7.2 3.1L426.5 336c-2.1-2.1-2.1-5.1 0-7.2l16.4-13.3c3.1-2.1 7.2 0 7.2 3.1v27.6zM405 322.6c-33.8 2.1-63.6-32.8-66.6-78.9s21.5-85.1 55.4-87.1c33.8-2.1 63.6 32.8 66.6 78.9 3 45.1-21.6 85.1-55.4 87.1zm90.2-79.9L476.8 256c-3.1 2.1-7.2 0-7.2-3.1v-27.7c0-4.1 4.1-6.2 7.2-3.1l18.5 14.4c2 1 2 4.1-.1 6.2z',
      viewbox: '0 0 512 512',
    },
    visualStudioCode: {
      path: 'm37.67 5.1-7.83-3.76a2.3 2.3 0 0 0-.58-.18c-.02 0-.04-.01-.07-.02-.07-.01-.12-.02-.18-.02-.05-.02-.11-.02-.19-.02h-.13c-.09 0-.17.01-.25.02-.02 0-.04.01-.07.01-.35.05-.68.2-.98.41-.1.08-.18.15-.28.24L12.14 15.46 5.62 10.5c-.3-.23-.66-.34-1.02-.33-.36.02-.72.15-1 .41l-2.09 1.9c-.29.26-.46.63-.5 1-.01.17-.01.35.02.5.07.32.23.62.49.86L7.16 20 1.5 25.16c-.37.34-.56.82-.5 1.32.03.38.2.75.5 1.02l2.09 1.9c.28.26.64.4 1 .41.36.02.72-.09 1.02-.33l6.52-4.96L27.1 38.19a2.368 2.368 0 0 0 1.6.69h.08c.09 0 .18-.01.26-.02l.18-.03.13-.03.2-.05h.01c.08-.03.16-.05.24-.1l7.83-3.76c.83-.4 1.35-1.23 1.35-2.14V7.23c.04-.91-.48-1.74-1.31-2.13zm-8.17 6.29v17.22L18.14 20l11.36-8.61z',
      viewbox: '0 0 40 40',
    },
  },

  brand: {
    docker: formatIcon(fab.faDocker),
    ubuntu: formatIcon(fab.faUbuntu),
    gitAlt: formatIcon(fab.faGitAlt),
    github: formatIcon(fab.faGithub),
    linkedin: formatIcon(fab.faLinkedin),
  },

  light: {
    boxFull: formatIcon(fal.faBoxFull),
    brightness: formatIcon(fal.faBrightness),
    circleCheck: formatIcon(fal.faCircleCheck),
    computer: formatIcon(fal.faComputer),
    envelope: formatIcon(fal.faEnvelope),
    envelopeOpenText: formatIcon(fal.faEnvelopeOpenText),
    gamepadModern: formatIcon(fal.faGamepadModern),
    newspaper: formatIcon(fal.faNewspaper),
    penRuler: formatIcon(fal.faPenRuler),
    carSide: formatIcon(fal.faCarSide),
    phone: formatIcon(fal.faPhone),
    link: formatIcon(fal.faLink),
    mapLocationDot: formatIcon(fal.faMapLocationDot),
    moon: formatIcon(fal.faMoon),
    sparkles: formatIcon(fal.faSparkles),
    star: formatIcon(fal.faStar),
    paintbrushPencil: formatIcon(fal.faPaintbrushPencil),
    listCheck: formatIcon(fal.faListCheck),
    users: formatIcon(fal.faUsers),
    circleXmark: formatIcon(fal.faCircleXmark),
  },

  regular: {
    download: formatIcon(far.faDownload),
  },

  solid: {
    caretDown: formatIcon(fas.faCaretDown),
    rectangleTerminal: formatIcon(fas.faRectangleTerminal),
    star: formatIcon(fas.faStar),
  },
}

export default (style: MaybeRefOrGetter<IconStyle>, name: MaybeRefOrGetter<string>) => {
  return computed<IconData | undefined>(() => {
    return icons[toValue(style)][toValue(name)]
  })
}
