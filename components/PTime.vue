<template>
  <time :datetime v-text="$d(date, format)" />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    date: Date
    format?: 'short' | 'long'
  }>(),
  {
    format: 'long',
  },
)

const datetime = computed(() => props.date.toISOString())
</script>
