import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

import { vueConfig } from '@erwanjugand/eslint-config'
export default withNuxt(eslintConfigPrettier).prepend(vueConfig)
