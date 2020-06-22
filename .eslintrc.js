module.exports = {
    extends: [
      '@nuxtjs/eslint-config-typescript'
    ],
    rules: {
      'no-prototype-builtins': 'off',
      'vue/order-in-components': 0,
      'vue/require-default-prop': 'off',
      'vue/require-prop-types': 'off'
    }
  }
