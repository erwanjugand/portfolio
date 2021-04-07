<template>
  <time :datetime="$dateFns.formatISO(date)" v-text="$dateFns.format(date, format, { locale: currentLocale })" />
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Locale } from 'date-fns'
import { fr, enGB } from 'date-fns/locale'
import { LocaleDate } from '~/models'

export default Vue.extend({
  props: {
    date: {
      type: Date,
      required: true
    } as PropOptions<Date>,
    format: {
      type: String,
      default: 'PPP'
    }
  },

  computed: {
    currentLocale (): Locale {
      const locales: LocaleDate = { fr, en: enGB }
      return locales[this.$i18n.locale]
    }
  }
})
</script>
