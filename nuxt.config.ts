export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  runtimeConfig: {
    rapidApiKey: process.env.RAPID_API_KEY,
    rapidApiHost: process.env.RAPID_API_HOST,
    public: {
      siteUrl: process.env.SITE_URL,
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: '@use "sass:math"; @import "@/assets/scss/variables.scss";',
        },
      },
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },

  experimental: {
    writeEarlyHints: true,
  },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-cloudflare-analytics',
    '@nuxt/test-utils/module',
    'v-wave/nuxt',
  ],

  imports: {
    dirs: ['store'],
  },

  i18n: {
    baseUrl: process.env.SITE_URL,
    lazy: true,
    detectBrowserLanguage: false,
    locales: [
      {
        code: 'fr',
        language: 'fr',
        name: 'Français',
        file: 'fr.yml',
      },
      {
        code: 'en',
        language: 'en',
        name: 'English',
        file: 'en.yml',
      },
    ],
    langDir: 'locales',
    defaultLocale: 'fr',
  },

  robots: {
    disallow: process.env.ROBOTS_DISALLOW_VALUE,
  },

  cloudflareAnalytics: {
    token: process.env.CLOUDFLARE_ANALYTICS_TOKEN,
  },

  vWave: {
    directive: 'ripple',
  },

  googleFonts: {
    families: {
      Roboto: [300, 400, 500],
    },
  },

  compatibilityDate: '2024-09-21',
})
