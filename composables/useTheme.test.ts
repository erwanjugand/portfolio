import { describe, expect, test } from 'vitest'
import { mockUseI18n } from '~/vitest/fixtures/useI18n'
import { mockUseColorMode } from '~/vitest/fixtures/useColorMode'

const useThemeTests = [
  {
    theme: 'light',
    keyName: 'useTheme.lightMode',
    darkMode: false,
    iconName: 'brightness',
  },
  {
    theme: 'dark',
    keyName: 'useTheme.darkMode',
    darkMode: true,
    iconName: 'moon',
  },
  {
    theme: 'hacked',
    keyName: 'useTheme.hackedMode',
    darkMode: false,
    iconName: 'easterEgg',
  },
]

describe('useTheme', () => {
  describe.each(useThemeTests)('$theme', ({ theme, iconName, keyName, darkMode }) => {
    test('should return current mode', () => {
      mockUseColorMode(theme)
      mockUseI18n('en')
      const { currentModeName, currentModeIcon, isDarkMode } = useTheme()
      expect(currentModeName.value).toBe(keyName)
      expect(currentModeIcon.value.name).toBe(iconName)
      expect(isDarkMode.value).toBe(darkMode)
    })
  })
})
