export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'fr',
  datetimeFormats: {
    fr: {
      long: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
      short: {
        year: 'numeric',
        month: 'short',
      },
    },
    en: {
      long: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
      short: {
        year: 'numeric',
        month: 'short',
      },
    },
  },
}))
