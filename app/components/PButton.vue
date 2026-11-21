<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const { to = undefined } = defineProps<{
  disabled?: boolean
  to?: RouteLocationRaw
}>()

const nuxtLink = resolveComponent('nuxt-link')
const type = computed(() => (to ? nuxtLink : 'button'))
</script>

<template>
  <Component :is="type" :disabled :to class="button">
    <slot />
  </Component>
</template>

<style lang="scss">
@property --button-start {
  syntax: '<color>';
  inherits: false;
  initial-value: transparent;
}

@property --button-end {
  syntax: '<color>';
  inherits: false;
  initial-value: transparent;
}

.button {
  --button-start: var(--c-ink);
  --button-end: var(--c-ink);

  display: inline-flex;
  gap: var(--spacing-2);
  align-items: center;
  min-height: 48px;
  padding-inline: var(--spacing-4);
  font-weight: var(--font-weight-semibold);
  color: var(--c-bg);
  background: linear-gradient(110deg, var(--button-start), var(--button-end));
  fill: currentcolor;
  transition:
    color var(--transition),
    --button-start var(--transition),
    --button-end var(--transition);

  @supports (corner-shape: bevel) {
    border-radius: 16px / 50%;
    corner-shape: bevel;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  &:hover:not(:disabled),
  &:focus-visible {
    --button-start: var(--c-g1);
    --button-end: var(--c-g2);

    color: #fff;
  }
}
</style>
