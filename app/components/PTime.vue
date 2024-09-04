<template>
  <time :datetime v-text="$d(date, format)" />
</template>

<script setup lang="ts">
const { date, format = 'long' } = defineProps<{
  date: Date
  format?: 'short' | 'long'
}>()

const datetime = computed(() => date.toISOString())
</script>
