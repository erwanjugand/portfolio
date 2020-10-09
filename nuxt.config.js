import en from './i18n/en.json'
import fr from './i18n/fr.json'

require('dotenv').config()

export default {
  // .env
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
    siteTitle: process.env.SITE_TITLE,
    siteDescription: process.env.SITE_DESCRIPTION,
    shortName: process.env.SHORT_NAME
  },
  privateRuntimeConfig: {
  },
  // Components
  components: true,
  // Headers of the page
  head: {
    title: process.env.SITE_TITLE,
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' }
    ]
  },
  // PWA
  pwa: {
    manifest: {
      name: process.env.SITE_TITLE,
      short_name: process.env.SHORT_NAME,
      description: process.env.SITE_DESCRIPTION,
      theme_color: '#0077DB',
      background_color: '#212121',
      lang: 'fr',
    },
    icon: {
      source: 'static/images/favicon-pwa.png',
      purpose: 'maskable',
      sizes: [64, 120, 144, 152, 192, 384, 512, 1024]
    }
  },
  // Customize the progress-bar color
  loading: {
    color: 'var(--c-primary)',
    continuous: true,
    duration: 1000,
    failedColor: 'var(--c-fail)',
    height: '.25em'
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

  googleAnalytics: {
    id: 'UA-89170994-1'
  },
  // Nuxt.js modules
  modules: [
    [
      'nuxt-i18n',
      {
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
      }
    ],
    ['@nuxtjs/axios', {
      progress: false
    }],
    '@nuxtjs/sitemap',
    '@nuxtjs/svg',
    '@nuxtjs/style-resources'
  ],
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
