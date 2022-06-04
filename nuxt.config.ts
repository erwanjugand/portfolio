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
    '@nuxtjs/color-mode'
  ],

  css: [
    '@/assets/scss/style.scss',
    'the-new-css-reset'
  ]
})
