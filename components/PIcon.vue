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

const reactiveIconName = computed(() => props.name)
const reactiveIconStyle = computed(() => props.style)
const icon = useIcon(reactiveIconStyle, reactiveIconName)
</script>

<style lang="scss">
.icon {
  height: 1em;
}
</style>
