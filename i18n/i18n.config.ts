export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'fr',
  datetimeFormats: {
    fr: {
      short: {
        year: 'numeric',
        month: 'short',
      },
    },
    en: {
      short: {
        year: 'numeric',
        month: 'short',
      },
    },
  },
}))
