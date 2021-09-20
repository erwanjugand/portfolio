<template>
  <component
    :is="type"
    v-ripple="!loading"
    :disabled="loading"
    :class="['button', { 'button-outlined': outlined, 'button-loading': loading }]"
    :to="to"
    v-on="$listeners"
  >
    <PIcon v-if="icon" :name="icon" />
    <slot />
    <PCircularLoader v-if="loading" :size="32" />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import type { PropOptions } from 'vue'
import type { RawLocation } from 'vue-router'

export default Vue.extend({
  props: {
    icon: String,
    loading: Boolean,
    outlined: Boolean,
    to: {
      type: [String, Object, Boolean]
    } as PropOptions<RawLocation>
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
  font-weight: $fw-bold;
  line-height: 1.25em;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: $br-small;
  box-shadow: inset 0 0 0 2px transparent;
  transition: var(--transition);

  &-outlined {
    color: var(--c-secondary);
    fill: var(--c-secondary);
    box-shadow: inset 0 0 0 2px var(--c-secondary);

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

  .icon {
    flex: 0 0 1.25em;
    height: 1.25em;
    margin: 0 1em 0 -.25em;
  }

  // Disabled

  &:disabled {
    opacity: .75;
  }

  // Loading

  &-loading.button {
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
