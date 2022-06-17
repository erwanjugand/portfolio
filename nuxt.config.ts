import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:  '@import "@/assets/scss/variables.scss";',
        }
      }
    }
  },

  typescript: {
    strict: true
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@intlify/nuxt3'
  ],

  css: [
    '@/assets/scss/style.scss',
    'the-new-css-reset'
  ],

  intlify: {
    vueI18n: {
      locale: 'fr'
    }
  }
})
