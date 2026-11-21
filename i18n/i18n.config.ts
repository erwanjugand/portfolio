const short = {
  year: 'numeric',
  month: 'short',
} as const

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'fr',
  datetimeFormats: {
    fr: { short },
    en: { short },
  },
}))
