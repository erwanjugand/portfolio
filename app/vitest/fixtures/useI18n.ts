import type { Locale } from 'vue-i18n'
import { vi } from 'vitest'
import { computed } from 'vue'
import * as vueI18n from 'vue-i18n'

const i18nLocales = ['en', 'fr'] as const satisfies Locale[]

// TODO : Replace by official type from nuxt-i18n
interface LocaleObject {
  code: Locale
}

const i18nLocaleObjects: LocaleObject[] = i18nLocales.map(locale => ({
  code: locale,
}))

const mockUseI18n = (locale: Locale) =>
  vi.spyOn(vueI18n, 'useI18n').mockImplementation(() => {
    return {
      locale: computed(() => locale),
      locales: computed(() => i18nLocaleObjects),
      t: (key: string) => key,
    } as keyof typeof useI18n
  })

export { i18nLocales, i18nLocaleObjects, mockUseI18n }
