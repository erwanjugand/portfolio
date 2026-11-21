<script setup lang="ts">
const { tag = 'h2' } = defineProps<{
  tag?: 'h1' | 'h2'
}>()
</script>

<template>
  <Component :is="tag" class="heading reveal">
    <slot />
  </Component>
</template>

<style lang="scss">
.heading {
  margin-bottom: var(--spacing-8);
  font-size: 2.25em;
  font-weight: var(--font-weight-bold);
  text-align: center;

  @media #{breakpoints.$medium-and-up} {
    font-size: 3em;
  }
}
</style>
