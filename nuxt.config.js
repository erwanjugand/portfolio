import en from './i18n/en.json'
import fr from './i18n/fr.json'

require('dotenv').config()

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/app'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/directives.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/components',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-analytics',
    '@nuxtjs/dotenv'
  ],

  googleAnalytics: {
    id: 'UA-89170994-1'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-i18n',
      {
        seo: false,
        locales: [
          { code: 'fr',
            iso: 'fr'
          },
          { code: 'en',
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
    '@nuxtjs/sitemap'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  pageTransition: {
    name: 'page',
    afterEnter () {
      this.$store.commit('setMenuOpening', false)
    }
  }
}
