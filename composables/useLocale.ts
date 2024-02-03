import { useI18n } from 'vue-i18n'

export default () => {
  const i18n = useI18n()
  const locale = i18n.locale
  const locales = i18n.locales

  const currentLocale = computed(() => {
    return locales.value.find(l => l.code === locale.value) || locales.value[0]
  })

  return {
    locales,
    currentLocale,
  }
}
