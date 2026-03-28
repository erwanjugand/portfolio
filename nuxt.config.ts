const STRICTNESS_TS_OPTIONS = {
  noErrorTruncation: true,
  erasableSyntaxOnly: true,
  allowUnreachableCode: false,
  noFallthroughCasesInSwitch: true,
  noImplicitAny: true,
  noImplicitReturns: true,
  noUnusedLocals: true,
  noUnusedParameters: true,
  strictBindCallApply: true,
  strictFunctionTypes: true,
  strictNullChecks: true,
  strictPropertyInitialization: true,
  useUnknownInCatchVariables: true,
}

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 5,
  },

  typescript: {
    tsConfig: { compilerOptions: STRICTNESS_TS_OPTIONS },
    nodeTsConfig: { compilerOptions: STRICTNESS_TS_OPTIONS },
    sharedTsConfig: { compilerOptions: STRICTNESS_TS_OPTIONS },
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
          additionalData: '@use "@/assets/scss/breakpoints.scss" as breakpoints;',
        },
      },
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },
    publicAssets: [
      {
        baseURL: '/images',
        dir: 'public/images',
        maxAge: 60 * 60 * 24 * 30, // 30 jours
      },
    ],
  },

  experimental: {
    writeEarlyHints: true,
    extractAsyncDataHandlers: true,
  },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    '@vueuse/nuxt',
    'nuxt-umami',
    '@nuxt/test-utils/module',
    'v-wave/nuxt',
  ],

  imports: {
    dirs: ['store'],
  },

  i18n: {
    baseUrl: process.env.SITE_URL,
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
    defaultLocale: 'fr',
  },

  robots: {
    disallow: process.env.ROBOTS_DISALLOW_VALUE,
  },

  umami: {
    id: process.env.NUXT_UMAMI_ID,
    host: process.env.NUXT_UMAMI_HOST,
    autoTrack: true,
    ignoreLocalhost: true,
  },

  colorMode: {
    classSuffix: '-mode',
  },

  vWave: {
    directive: 'ripple',
  },

  googleFonts: {
    families: {
      Inter: '300..500',
    },
  },

  compatibilityDate: '2026-01-01',
})
