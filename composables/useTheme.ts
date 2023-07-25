import { useI18n } from 'vue-i18n'
import { type Icon, IconStyle } from './useIcon'

export interface ThemeIcons {
  [key: string]: Icon
}

export default () => {
  const themeIcons: ThemeIcons = {
    light: { style: IconStyle.light, name: 'brightness' },
    dark: { style: IconStyle.light, name: 'moon' },
    hacked: { style: IconStyle.custom, name: 'easterEgg' },
  }
  const currentMode = useColorMode()
  const { t } = useI18n()

  const currentModeIcon = computed<Icon>(() => {
    return themeIcons[currentMode.value]
  })

  const currentModeName = computed<string>(() => {
    return t(`useTheme.${currentMode.value}Mode`)
  })

  const isDarkMode = computed<boolean>(() => {
    return currentMode.value === 'dark'
  })

  const toggleMode = (): void => {
    currentMode.preference = isDarkMode.value ? 'light' : 'dark'
  }

  const changeMode = (mode: string): void => {
    currentMode.preference = mode
  }

  return {
    currentModeIcon,
    currentModeName,
    isDarkMode,
    toggleMode,
    changeMode,
  }
}
