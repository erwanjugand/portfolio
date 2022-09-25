<template>
  <time :datetime="datetime" v-text="$d(date, 'long')" />
</template>

<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  date: {
    type: Date as PropType<Date>,
    required: true
  },
  format: {
    type: String,
    default: 'long',
    validator (value: string) {
      return ['short', 'long'].includes(value)
    }
  }
})

const datetime = computed(() => props.date.toISOString())
</script>
