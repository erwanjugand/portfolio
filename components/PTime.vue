<template>
  <time :datetime="datetime" v-text="$d(date, 'long')" />
</template>

<script setup lang="ts">
interface Props {
  date: Date
  format?: 'short' | 'long'
}

const props = withDefaults(defineProps<Props>(), {
  format: 'long'
})

const { formatIso } = useDateFns()
const datetime = formatIso(props.date)
</script>
