<template>
  <svg v-if="icon" class="icon" role="img" :viewBox="icon.viewbox" aria-hidden="true">
    <path v-if="typeof icon.path === 'string'" :d="icon.path" />
    <path v-for="(path, index) of icon.path" v-else :key="index" :d="path" />
  </svg>
</template>

<script setup lang="ts">
import { IconStyle } from '~/composables/useIcon'

interface Props {
  name: string
  style: IconStyle
}

const props = defineProps<Props>()

const icon = useIcon(
  () => props.style,
  () => props.name,
)
</script>

<style lang="scss">
.icon {
  height: 1em;
}
</style>
