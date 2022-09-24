<template>
  <section :class="{'section': true, 'dark-mode': banner}">
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps({
  banner: Boolean
})
</script>

<style lang="scss">
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0;

  &.dark-mode {
    background-color: var(--c-background-alt);
  }
}
</style>
