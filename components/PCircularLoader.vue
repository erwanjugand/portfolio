<template>
  <svg class="circular-loader" :style="styles" :aria-label="$t('loader.label')">
    <circle :cx="size / 2" :cy="size / 2" :r="size * .45" />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    size: {
      type: Number,
      default: 40
    }
  },

  computed: {
    styles (): Partial<CSSStyleDeclaration> {
      return {
        width: `${this.size / 16}rem`,
        height: `${this.size / 16}rem`,
        fontSize: `${this.size / 16}rem`
      }
    }
  }
})
</script>

<style lang="scss">
@keyframes rotator {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(720deg);
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: 3.1em;
    transform: rotate(90deg);
  }

  50% {
    stroke-dashoffset: .75em;
    transform: rotate(135deg);
  }

  100% {
    stroke-dashoffset: 3.1em;
    transform: rotate(450deg);
  }
}

.circular-loader {
  animation: rotator 2.1s linear infinite;

  circle {
    fill: transparent;
    stroke: var(--c-primary);
    transform-origin: center;
    animation: dash 1.4s ease-in-out infinite;
    stroke-dasharray: 1.875em;
    stroke-dashoffset: 0;
    stroke-width: .1em;
    stroke-linecap: round;

    @supports (stroke-dasharray: 0) {
      stroke-dasharray: 3.1em;
    }
  }
}
</style>
