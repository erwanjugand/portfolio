import { vueConfig } from '@erwanjugand/eslint-config'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(eslintConfigPrettier).prepend(vueConfig)
