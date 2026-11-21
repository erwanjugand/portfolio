const STRICTNESS_TS_OPTIONS = {
  noErrorTruncation: true,
  erasableSyntaxOnly: true,
  allowUnreachableCode: false,
  noFallthroughCasesInSwitch: true,
  noImplicitReturns: true,
  noUnusedLocals: true,
  noUnusedParameters: true,
}

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 5,
  },

  app: {
    head: {
      viewport: 'width=320, initial-scale=1, viewport-fit=cover',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  sourcemap: {
    server: false,
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
    imports: {
      presets: [{ from: 'nitropack/runtime', imports: ['useRuntimeConfig'] }],
    },
    typescript: {
      tsConfig: { include: ['./types/typed-router.d.ts'] },
    },
    prerender: {
      crawlLinks: true,
    },
    publicAssets: [
      {
        baseURL: '/img',
        dir: 'public/img',
        maxAge: 60 * 60 * 24 * 30,
      },
    ],
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    '@vueuse/nuxt',
    'nuxt-umami',
    'nuxt-svgo',
    '@nuxt/test-utils/module',
  ],

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
    ignoreLocalhost: true,
  },

  colorMode: {
    classSuffix: '-mode',
  },

  svgo: {
    svgo: false,
    defaultImport: 'component',
    dts: true,
  },

  compatibilityDate: '2026-01-01',
})
