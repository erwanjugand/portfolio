export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: '',
      rapidApiKey: '',
      rapidApiHost: ''
    }
  },

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
    shim: false,
    strict: true
  },

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    '@vueuse/nuxt',
    '@pinia/nuxt'
  ],

  plugins: [
    '@/plugins/ripple'
  ],

  imports: {
    dirs: ['./store']
  },

  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL,
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
    }
  },

  googleFonts: {
    families: {
      Roboto: [300, 400, 500]
    }
  }
})
