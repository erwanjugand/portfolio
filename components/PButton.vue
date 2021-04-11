<template>
  <component :is="type" v-ripple="!loading" :disabled="loading" :class="['button', {'button-outlined': outlined, 'button-loading': loading}]" v-on="$listeners">
    <PIcon v-if="icon" :name="icon" />
    <slot />
    <PCircularLoader v-if="loading" :size="32" />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    icon: String,
    loading: Boolean,
    outlined: Boolean,
    to: [String, Object, Boolean]
  },

  computed: {
    type (): 'nuxt-link' | 'a' | 'button' {
      return this.to ? 'nuxt-link' : this.$attrs.href ? 'a' : 'button'
    }
  }
})
</script>

<style lang="scss">
.button {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 3em;
  padding: .5em 1.5em;
  font-weight: 500;
  line-height: 1.25em;
  text-transform: uppercase;
  border: .125rem solid transparent;
  border-radius: .5rem;
  transition: var(--transition);

  &-outlined {
    color: var(--c-secondary);
    fill: var(--c-secondary);
    border-color: var(--c-secondary);

    &:not(.button-loading):hover {
      background-color: var(--c-button-outlined-bg-hover);
    }
  }

  &:not(.button-outlined) {
    color: var(--c-background-bg);
    fill: var(--c-background-bg);
    background-color: var(--c-secondary);

    &:not(.button-loading):hover {
      background-color: var(--c-secondary-hover);
    }
  }

  svg {
    flex: 0 0 1.25em;
    height: 1.25em;
    margin: 0 1em 0 -.25em;
  }

  // Disabled

  &:disabled {
    opacity: .75;
  }

  // Loading

  &-loading span {
    color: transparent;
    fill: transparent;
    cursor: wait;
  }

  .circular-loader {
    position: absolute;
    top: calc(50% - 1rem);
    left: calc(50% - 1rem);

    circle {
      stroke: var(--c-background-bg);
    }

    @at-root .button-outlined .circular-loader circle {
      stroke: var(--c-secondary);
    }
  }
}
</style>
