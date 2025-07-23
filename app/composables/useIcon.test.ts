import { describe, expect, test } from 'vitest'
import { icons } from './useIcon'

describe('useIcon', () => {
  test('should return a FontAwesome icon, given a style and an icon name', () => {
    const icon = useIcon('regular', 'download')
    expect(icon.value).toStrictEqual(icons.regular?.download)
  })

  test('should return a custom icon, given a style and an icon name', () => {
    const icon = useIcon('custom', 'visualStudioCode')
    expect(icon.value).toStrictEqual(icons.custom?.visualStudioCode)
  })

  test('should return a reactive icon, given a reactive style and a reactive icon name', () => {
    const iconStyle = ref<IconType>('custom')
    const iconName = ref('visualStudioCode')
    const icon = useIcon(iconStyle, iconName)
    expect(icon.value).toStrictEqual(icons.custom?.visualStudioCode)

    iconStyle.value = 'regular'
    iconName.value = 'download'
    expect(icon.value).toStrictEqual(icons.regular?.download)
  })

  test('should return undefined, given an unknown icon name', () => {
    const icon = useIcon('regular', 'hello')
    expect(icon.value).toBe(undefined)
  })
})
