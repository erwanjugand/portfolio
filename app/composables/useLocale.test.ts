import { describe, expect, test } from 'vitest'
import { i18nLocaleObjects, i18nLocales, mockUseI18n } from '~/vitest/fixtures/useI18n'

describe('useLocale', () => {
  describe.each(i18nLocales)('%s', i18nCurrentLocale => {
    test('locales should return i18n locales', () => {
      mockUseI18n(i18nCurrentLocale)
      const { locales } = useLocale()
      expect(locales.value).toStrictEqual(i18nLocaleObjects)
    })

    test('locale should return i18n locale', () => {
      mockUseI18n(i18nCurrentLocale)
      const { currentLocale } = useLocale()
      expect(currentLocale.value).toStrictEqual({ code: i18nCurrentLocale })
    })
  })
})
