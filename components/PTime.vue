<template>
  <time :datetime="datetime" v-text="$d(date, 'long')" />
</template>

<script lang="ts">
import Vue from 'vue'
import type { PropOptions } from 'vue'

export default Vue.extend({
  props: {
    date: {
      type: Date,
      required: true
    } as PropOptions<Date>,
    format: {
      type: String,
      default: 'long'
    }
  },

  computed: {
    datetime (): string {
      return this.date.toISOString()
    }
  }
})
</script>
