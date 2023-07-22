import { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'
import { describe, expect, test, vi } from 'vitest'
import * as vueI18n from 'vue-i18n'

describe('useLocale', () => {
  const i18nLocales = ['en', 'fr']
  const i18nLocaleObjects: LocaleObject[] = i18nLocales.map(locale => ({
    code: locale,
  }))

  describe.each(i18nLocales)('%s', i18nCurrentLocale => {
    test('locales should return i18n locales', () => {
      // @ts-ignore
      vi.spyOn(vueI18n, 'useI18n').mockImplementation(() => {
        return {
          locale: computed(() => i18nCurrentLocale),
          locales: computed(() => i18nLocaleObjects),
        }
      })
      const { locales } = useLocale()
      expect(locales.value).toStrictEqual(i18nLocaleObjects)
    })

    test('locale should return i18n locale', () => {
      // @ts-ignore
      vi.spyOn(vueI18n, 'useI18n').mockImplementation(() => {
        return {
          locale: computed(() => i18nCurrentLocale),
          locales: computed(() => i18nLocaleObjects),
        }
      })
      const { currentLocale } = useLocale()
      expect(currentLocale.value).toStrictEqual({ code: i18nCurrentLocale })
    })
  })
})
