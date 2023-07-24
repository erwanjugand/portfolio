import { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'
import { vi } from 'vitest'
import { computed } from 'vue'
import * as vueI18n from 'vue-i18n'

const i18nLocales = ['en', 'fr']

const i18nLocaleObjects: LocaleObject[] = i18nLocales.map(locale => ({
  code: locale,
}))

const mockUseI18n = (locale = 'en') =>
  // @ts-ignore
  vi.spyOn(vueI18n, 'useI18n').mockImplementation(() => {
    return {
      locale: computed(() => locale),
      locales: computed(() => i18nLocaleObjects),
      t: (key: string) => key,
    }
  })

export { i18nLocales, i18nLocaleObjects, mockUseI18n }
