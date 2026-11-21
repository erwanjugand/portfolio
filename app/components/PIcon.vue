<script setup lang="ts">
const { name, type } = defineProps<{
  name: string
  type: IconType
}>()

const icon = useIcon(
  () => type,
  () => name,
)
</script>

<template>
  <svg v-if="icon" class="icon" :viewBox="icon.viewbox" aria-hidden="true">
    <path :d="icon.path" />
  </svg>
</template>

<style lang="scss">
.icon {
  height: 1em;
}
</style>
