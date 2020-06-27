<style lang="scss" src="./PCircularLoader.scss"></style>
<template>
  <svg class="circular-loader" :style="styles">
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
