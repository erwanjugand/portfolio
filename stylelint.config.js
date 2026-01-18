/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-recess-order', 'stylelint-config-standard-scss'],
  plugins: ['stylelint-plugin-use-baseline'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'plugin/use-baseline': [true, { available: 'newly' }],
  },
}
