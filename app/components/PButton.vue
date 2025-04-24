<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const { to } = defineProps<{
  outlined?: boolean
  disabled?: boolean
  to?: RouteLocationRaw
}>()

const nuxtLink = resolveComponent('nuxt-link')
const attrs = useAttrs()
const type = computed(() => (to ? nuxtLink : attrs.href ? 'a' : 'button'))
</script>

<template>
  <Component
    :is="type"
    v-ripple
    :disabled="disabled || undefined"
    :to
    :class="['button', outlined ? 'button-outlined' : 'button-filled']"
  >
    <slot />
  </Component>
</template>

<style lang="scss">
.button {
  --focus-radius: var(--border-radius-small);
  --focus-offset: 2px;

  display: flex;
  align-items: center;
  min-height: 3em;
  padding: 0.5em 1.5em;
  transition:
    background-color var(--transition),
    opacity var(--transition);
  border-radius: var(--border-radius-small);
  box-shadow: inset 0 0 0 2px transparent;
  font-weight: var(--font-weight-bold);
  line-height: 1.25em;
  text-transform: uppercase;
  gap: 16px;

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }

  &-outlined {
    box-shadow: inset 0 0 0 2px var(--c-primary);
    fill: var(--c-primary);
    color: var(--c-primary);

    &:hover:not(:disabled) {
      background-color: rgba(variables.$primary, 0.1);
    }
  }

  &-filled {
    background-color: var(--c-primary);
    fill: var(--c-background-bg);
    color: var(--c-background-bg);

    &:hover:not(:disabled) {
      background-color: var(--c-primary-hover);
    }
  }
}
</style>
