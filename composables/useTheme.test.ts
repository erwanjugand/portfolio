import { describe, expect, test } from 'vitest'
import { mockUseI18n } from '~/vitest/fixtures/useI18n'
import { mockUseColorMode } from '~/vitest/fixtures/useColorMode'

const useThemeTests = [
  {
    theme: 'system',
    keyName: 'useTheme.systemMode',
    iconName: 'display',
  },
  {
    theme: 'light',
    keyName: 'useTheme.lightMode',
    iconName: 'brightness',
  },
  {
    theme: 'dark',
    keyName: 'useTheme.darkMode',
    iconName: 'moon',
  },
  {
    theme: 'hacked',
    keyName: 'useTheme.hackedMode',
    iconName: 'easterEgg',
  },
]

describe('useTheme', () => {
  describe.each(useThemeTests)('$theme', ({ theme, iconName, keyName }) => {
    test('should return current mode', () => {
      mockUseColorMode(theme)
      mockUseI18n('en')
      const { currentModeName, currentModeIcon } = useTheme()
      expect(currentModeName.value).toBe(keyName)
      expect(currentModeIcon.value.name).toBe(iconName)
    })
  })
})
