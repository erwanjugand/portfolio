import { describe, expect, test } from 'vitest'
import { faDownload as farDownload } from '@fortawesome/pro-regular-svg-icons'

const MOCK_FONT_AWESOME_ICON = {
  path: farDownload.icon[4],
  viewbox: `0 0 ${farDownload.icon[0]} ${farDownload.icon[1]}`,
}

const MOCK_CUSTOM_ICON = {
  path: 'm37.67 5.1-7.83-3.76a2.3 2.3 0 0 0-.58-.18c-.02 0-.04-.01-.07-.02-.07-.01-.12-.02-.18-.02-.05-.02-.11-.02-.19-.02h-.13c-.09 0-.17.01-.25.02-.02 0-.04.01-.07.01-.35.05-.68.2-.98.41-.1.08-.18.15-.28.24L12.14 15.46 5.62 10.5c-.3-.23-.66-.34-1.02-.33-.36.02-.72.15-1 .41l-2.09 1.9c-.29.26-.46.63-.5 1-.01.17-.01.35.02.5.07.32.23.62.49.86L7.16 20 1.5 25.16c-.37.34-.56.82-.5 1.32.03.38.2.75.5 1.02l2.09 1.9c.28.26.64.4 1 .41.36.02.72-.09 1.02-.33l6.52-4.96L27.1 38.19a2.368 2.368 0 0 0 1.6.69h.08c.09 0 .18-.01.26-.02l.18-.03.13-.03.2-.05h.01c.08-.03.16-.05.24-.1l7.83-3.76c.83-.4 1.35-1.23 1.35-2.14V7.23c.04-.91-.48-1.74-1.31-2.13zm-8.17 6.29v17.22L18.14 20l11.36-8.61z',
  viewbox: '0 0 40 40',
}

describe('useIcon', () => {
  describe('icon', () => {
    test('should return a FontAwesome icon, given a style and an icon name', () => {
      const icon = useIcon(IconStyle.regular, 'download')
      expect(icon.value).toStrictEqual(MOCK_FONT_AWESOME_ICON)
    })

    test('should return a custom icon, given a style and an icon name', () => {
      const icon = useIcon(IconStyle.custom, 'visualStudioCode')
      expect(icon.value).toStrictEqual(MOCK_CUSTOM_ICON)
    })

    test('should return a reactive icon, given a reactive style and a reactive icon name', () => {
      const iconStyle = ref(IconStyle.custom)
      const iconName = ref('visualStudioCode')
      const icon = useIcon(iconStyle, iconName)
      expect(icon.value).toStrictEqual(MOCK_CUSTOM_ICON)

      iconStyle.value = IconStyle.regular
      iconName.value = 'download'
      expect(icon.value).toStrictEqual(MOCK_FONT_AWESOME_ICON)
    })

    test('should return undefined, given an unknown icon name', () => {
      const icon = useIcon(IconStyle.regular, 'hello')
      expect(icon.value).toBe(undefined)
    })
  })
})
