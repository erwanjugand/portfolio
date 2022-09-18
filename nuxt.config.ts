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
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@intlify/nuxt3'
  ],

  css: [
    '@/assets/scss/style.scss'
  ],

  intlify: {
    vueI18n: {
      locale: 'fr'
    }
  }
})
