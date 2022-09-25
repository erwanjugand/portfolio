<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <svg class="icon" role="img" :viewBox="viewBox" :aria-hidden="true">
    <path v-if="typeof icon.path === 'string'" :d="icon.path" />
    <path v-for="(path, index) of icon.path" v-else :key="index" :d="path" />
  </svg>
</template>

<script setup lang="ts">
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
      return ['light', 'regular', 'solid', 'brand', 'custom'].includes(value)
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
