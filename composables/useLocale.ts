import { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'
import { ComputedRef } from 'vue'

export default () => {
  const i18n = useI18n()
  const locale = i18n.locale

  const locales = i18n.locales as ComputedRef<LocaleObject[]>

  const currentLocale = computed<LocaleObject>(() => {
    return locales.value.find(l => l.code === locale.value) || locales.value[0]
  })

  return {
    locales,
    currentLocale
  }
}
