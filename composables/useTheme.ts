import { useI18n } from 'vue-i18n'
import { type Icon } from './useIcon'

export type ThemeIcons = Record<string, Icon>

export default () => {
  const themeIcons: ThemeIcons = {
    system: { type: 'light', name: 'display' },
    light: { type: 'light', name: 'brightness' },
    dark: { type: 'light', name: 'moon' },
    hacked: { type: 'custom', name: 'easterEgg' },
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
