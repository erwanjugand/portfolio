module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    'no-prototype-builtins': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'vue/multi-word-component-names': 'off'
  },
  globals: {
    NodeJS: true
  }
}
