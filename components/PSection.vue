<template>
  <section :class="{ section: true, 'dark-mode': banner }">
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  banner?: boolean
}>()
</script>

<style lang="scss">
section.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0;
  transition: padding var(--transition);

  @media #{$large-and-up} {
    padding: 96px 0;
  }

  &.dark-mode {
    background-color: var(--c-background-alt);
  }
}
</style>
