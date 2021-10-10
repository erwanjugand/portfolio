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
    '~/plugins/directives.ts',
    { src: '~/plugins/vue-masonry', ssr: false }

  ],
  // Nuxt.js dev-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/pwa',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-analytics',
    'nuxt-typed-vuex'
  ],
  // Nuxt.js modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/svg',
    '@nuxtjs/style-resources'
  ],
  i18n: {
    baseUrl: process.env.SITE_URL,
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
      },
      dateTimeFormats: {
        fr: {
          long: {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }
        },
        en: {
          long: {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }
        }
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
      description: process.env.SITE_DESCRIPTION,
      theme_color: '#0077DB',
      background_color: '#212121',
      display: 'standalone',
      lang: 'fr',
      start_url: '/?source=pwa',
      shortcuts: [
        {
          name: 'Mes travaux',
          url: '/travaux?source=pwa',
          icons: [
            {
              src: '/images/projects-shortcut.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        {
          name: 'Me contacter',
          url: '/contact?source=pwa',
          icons: [
            {
              src: '/images/contact-shortcut.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        {
          name: 'Évolution du portfolio',
          url: '/journal-des-modifications?source=pwa',
          icons: [
            {
              src: '/images/changelog-shortcut.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      ]
    },
    icon: {
      source: 'static/images/favicon-pwa.png',
      sizes: [64, 120, 144, 152, 192, 384, 512, 1024]
    }
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
