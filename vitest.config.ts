import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    exclude: ['**/tests/**'],
    environment: 'nuxt',
  },
})
