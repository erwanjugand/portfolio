import { useI18n } from 'vue-i18n'
import { type Icon } from './useIcon'

const modeName = ['system', 'light', 'dark', 'hacked'] as const
type ModeName = (typeof modeName)[number]
type ModeIcons = Record<ModeName, Icon>

const modeIcons: ModeIcons = {
  system: { type: 'light', name: 'display' },
  light: { type: 'light', name: 'brightness' },
  dark: { type: 'light', name: 'moon' },
  hacked: { type: 'custom', name: 'easterEgg' },
} as const

export default () => {
  const currentMode = useColorMode()
  const { t } = useI18n()

  const currentModeIcon = computed<Icon>(() => modeIcons[currentMode.preference as ModeName])

  const currentModeName = computed<string>(() => t(`useTheme.${currentMode.preference}Mode`))

  const toggleMode = (): void => {
    const newColorMode: ModeName =
      currentMode.preference === 'system' ? 'light' : currentMode.preference === 'light' ? 'dark' : 'system'
    currentMode.preference = newColorMode
  }

  const changeMode = (mode: ModeName): void => {
    currentMode.preference = mode
  }

  return {
    currentModeIcon,
    currentModeName,
    toggleMode,
    changeMode,
  }
}
