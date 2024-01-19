import { useI18n } from 'vue-i18n'
import { type Icon, IconStyle } from './useIcon'

export type ThemeIcons = Record<string, Icon>

export default () => {
  const themeIcons: ThemeIcons = {
    system: { style: IconStyle.light, name: 'display' },
    light: { style: IconStyle.light, name: 'brightness' },
    dark: { style: IconStyle.light, name: 'moon' },
    hacked: { style: IconStyle.custom, name: 'easterEgg' },
  }
  const currentMode = useColorMode()
  const { t } = useI18n()

  const currentModeIcon = computed<Icon>(() => {
    return themeIcons[currentMode.preference]
  })

  const currentModeName = computed<string>(() => {
    return t(`useTheme.${currentMode.preference}Mode`)
  })

  const toggleMode = (): void => {
    currentMode.preference =
      currentMode.preference === 'system' ? 'light' : currentMode.preference === 'light' ? 'dark' : 'system'
  }

  const changeMode = (mode: string): void => {
    currentMode.preference = mode
  }

  return {
    currentModeIcon,
    currentModeName,
    toggleMode,
    changeMode,
  }
}
