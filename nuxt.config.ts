export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "sass:math" as *; @import "@/assets/scss/variables.scss";'
        }
      }
    }
  },

  typescript: {
    strict: true
  },

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@pinia/nuxt'
  ],

  plugins: [
    '@/plugins/ripple'
  ],

  css: [
    '@/assets/scss/style.scss'
  ],

  i18n: {
    baseUrl: process.env.SITE_URL,
    locales: [
      {
        code: 'fr',
        iso: 'fr',
        name: 'Français',
        file: 'fr.json'
      },
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        file: 'en.json'
      }
    ],
    langDir: 'locales/',
    defaultLocale: 'fr',
    vueI18n: {
      legacy: false,
      fallbackLocale: 'fr',
      datetimeFormats: {
        fr: {
          long: {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          },
          short: {
            year: 'numeric',
            month: 'short'
          }
        },
        en: {
          long: {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          },
          short: {
            year: 'numeric',
            month: 'short'
          }
        }
      }
    },
    parsePages: false,
    pages: {
      changelog: {
        en: '/changelog',
        fr: '/journal-des-modifications'
      },
      'legal-mentions': {
        en: '/legal-mentions',
        fr: '/mentions-legales'
      }
    }
  },

  googleFonts: {
    families: {
      Roboto: [300, 400, 500]
    }
  }
})
