<template>
  <Component
    :is="type"
    v-ripple="!disabled"
    :disabled="disabled"
    :to="to"
    :class="['button', outlined ? 'button-outlined' : 'button-filled']"
  >
    <slot />
  </Component>
</template>

<script setup lang="ts">
import { type RouteLocationRaw } from 'vue-router'

interface Props {
  outlined?: boolean
  disabled?: boolean
  to?: RouteLocationRaw
}

const props = withDefaults(defineProps<Props>(), {
  outlined: false,
  disabled: undefined,
  to: undefined,
})

const nuxtLink = resolveComponent('nuxt-link')
const attrs = useAttrs()
const type = computed(() => (props.to ? nuxtLink : attrs.href ? 'a' : 'button'))
</script>

<style lang="scss">
.button {
  display: flex;
  align-items: center;
  min-height: 3em;
  padding: 0.5em 1.5em;
  transition: var(--transition);
  border-radius: $br-small;
  box-shadow: inset 0 0 0 2px transparent;
  font-weight: $fw-bold;
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
      background-color: rgba($primary, 0.1);
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
