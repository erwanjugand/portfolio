<template>
  <time :datetime="datetime" v-text="$d(date, format)" />
</template>

<script setup lang="ts">
interface Props {
  date: Date
  format?: 'short' | 'long'
}

const props = withDefaults(defineProps<Props>(), {
  format: 'long',
})

const datetime = computed(() => props.date.toISOString())
</script>
