<template>
  <svg class="icon" role="img" :viewBox="viewBox" aria-hidden>
    <path v-if="typeof icon.path === 'string'" :d="icon.path" />
    <path v-for="(path, index) of icon.path" v-else :key="index" :d="path" />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  name: string
  type?: IconType
}

const props = withDefaults(defineProps<Props>(), {
  type: 'light'
})

const { getIcon } = useIcon()
const icon = computed(() => getIcon(props.type, props.name))
const viewBox = computed(() => {
  return `0 0 ${icon.value.width} ${icon.value.height}`
})
</script>

<style lang="scss">
.icon {
  height: 1em;
}
</style>
