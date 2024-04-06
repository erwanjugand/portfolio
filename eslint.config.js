import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier'

export default withNuxt(eslintConfigPrettier, {
  files: ['**/*.vue', '**/*.ts', '**/*.js'],
  rules: {
    'vue/component-name-in-template-casing': [
      1,
      'PascalCase',
      {
        registeredComponentsOnly: false,
      },
    ],
    'vue/block-lang': [
      1,
      {
        script: {
          lang: 'ts',
        },
        style: {
          lang: 'scss',
        },
      },
    ],
    'vue/prefer-template': 1,
  },
})
