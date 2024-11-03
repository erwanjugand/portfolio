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
  padding-block: 64px;
  transition: padding var(--transition);

  @media #{variables.$large-and-up} {
    padding-block: 96px;
  }

  &.dark-mode {
    background-color: var(--c-background-alt);
  }
}
</style>
