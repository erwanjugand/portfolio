<script setup lang="ts">
defineProps<{
  banner?: boolean
}>()
</script>

<template>
  <section class="section" :class="{ 'section-banner inverted': banner }">
    <slot />
  </section>
</template>

<style lang="scss">
.section {
  --section-padding: var(--spacing-8);

  padding-block: var(--section-padding);

  @media #{breakpoints.$medium-and-up} {
    --section-padding: var(--spacing-16);
  }

  &-banner {
    background-color: var(--c-surface);
  }
}
</style>
