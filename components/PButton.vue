<template>
  <component :is="type" :to="to" :class="['button', outlined ? 'button-outlined' : 'button-filled']">
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps({
  outlined: Boolean,
  to: String
})
const attrs = useAttrs()

const type = computed(() => props.to ? 'nuxt-link' : attrs.href ? 'a' : 'button' )
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

  &-outlined {
    box-shadow: inset 0 0 0 2px var(--c-primary);
    fill: var(--c-primary);
    color: var(--c-primary);

    &:hover {
      background-color: rgba($primary, 0.1);
    }
  }

  &-filled {
    background-color: var(--c-primary);
    fill: var(--c-background-bg);
    color: var(--c-background-bg);

    &:hover {
      background-color: var(--c-primary-hover);
    }
  }
}
</style>
