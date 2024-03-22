<template>
  <svg v-if="icon" class="icon" role="img" :viewBox="icon.viewbox" aria-hidden="true">
    <path v-if="typeof icon.path === 'string'" :d="icon.path" />
    <path v-for="(path, index) of icon.path" v-else :key="index" :d="path" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  type: IconType
}>()

const icon = useIcon(
  () => props.type,
  () => props.name,
)
</script>

<style lang="scss">
.icon {
  height: 1em;
}
</style>
