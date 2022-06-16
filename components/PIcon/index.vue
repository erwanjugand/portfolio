<template>
  <svg class="icon" role="img" :viewBox="viewBox" :aria-hidden="true">
    <path v-if="typeof icon.path === 'string'" :d="icon.path" />
    <path v-else v-for="(path, index) of icon.path" :d="path" :key="index" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { icons } from './iconHelper'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'light',
    validator (value: string) {
      return ['light', 'solid', 'brand', 'custom'].includes(value)
    }
  }
})

const icon = computed(() => icons[props.type][props.name])
const viewBox = computed(() => `0 0 ${icon.value.width} ${icon.value.height}`)
</script>

<style lang="scss">
.icon {
  height: 1em;
}
</style>
