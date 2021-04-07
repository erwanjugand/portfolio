import en from './i18n/en.json'
import fr from './i18n/fr.json'

export default {
  // .env
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
    siteTitle: process.env.SITE_TITLE,
    siteDescription: process.env.SITE_DESCRIPTION,
    shortName: process.env.SHORT_NAME
  },
  // Components
  components: true,
  // Head
  head: {
    title: process.env.SITE_TITLE,
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' }
    ],
    meta: [
      { name: 'viewport', content: 'width=320, initial-scale=1' }
    ]
  },
  // Customize the progress-bar
  loading: {
    color: 'var(--c-primary)',
    continuous: true,
    duration: 1000,
    failedColor: 'var(--c-error)',
    height: '4px'
  },
  // Global CSS
  css: [
    '~/assets/css/app'
  ],
  // Plugins to load before mounting the App
  plugins: [
    '~/plugins/directives.ts'
  ],
  // Nuxt.js dev-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/pwa',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-analytics',
    '@nuxtjs/date-fns',
    'nuxt-typed-vuex'
  ],
  // Nuxt.js modules
  modules: [
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/svg',
    '@nuxtjs/style-resources'
  ],
  i18n: {
    seo: false,
    locales: [
      {
        code: 'fr',
        iso: 'fr'
      },
      {
        code: 'en',
        iso: 'en'
      }
    ],
    defaultLocale: 'fr',
    vueI18n: {
      fallbackLocale: 'fr',
      messages: {
        en,
        fr
      }
    }
  },
  axios: {
    progress: false
  },
  pwa: {
    manifest: {
      name: process.env.SITE_TITLE,
      short_name: process.env.SHORT_NAME,
      theme_color: '#0077DB',
      background_color: '#212121',
      lang: 'fr'
    },
    icon: {
      source: 'static/images/favicon-pwa.png',
      purpose: 'maskable',
      sizes: [64, 120, 144, 152, 192, 384, 512, 1024]
    }
  },
  dateFns: {
    locales: ['en-US', 'fr'],
    defaultLocale: 'fr'
  },
  googleAnalytics: {
    id: 'UA-89170994-1'
  },
  styleResources: {
    scss: '~/assets/css/variables.scss'
  },
  // Build configuration
  build: {
    // You can extend webpack config here
    transpile: [
      'directivue',
      /typed-vuex/
    ]
  },

  pageTransition: {
    name: 'page',
    afterEnter () {
      this.$accessor.setMenuOpening(false)
    }
  }
}
