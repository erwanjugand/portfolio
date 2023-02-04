export default () => {
  const themeIcons: ThemeIcons = {
    light: { type: 'light', name: 'brightness' },
    dark: { type: 'light', name: 'moon' },
    hacked: { type: 'custom', name: 'easterEgg' }
  }
  const currentMode = useColorMode()
  const { t } = useI18n()

  const currentModeIcon = computed<ThemeIcon>(() => {
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
    changeMode
  }
}
