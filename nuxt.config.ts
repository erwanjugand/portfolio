export default defineNuxtConfig({
  runtimeConfig: {
    rapidApiKey: process.env.RAPID_API_KEY,
    rapidApiHost: process.env.RAPID_API_HOST,
    public: {
      siteUrl: process.env.SITE_URL
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "sass:math"; @import "@/assets/scss/variables.scss";'
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
    }
  },

  robots: {
    rules: {
      UserAgent: '*',
      Disallow: process.env.ROBOTS_DISALLOW_VALUE ?? ''
    }
  },

  googleFonts: {
    families: {
      Roboto: [300, 400, 500]
    }
  }
})
