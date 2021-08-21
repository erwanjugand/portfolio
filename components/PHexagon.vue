<template>
  <component :is="tag" :class="['hexagon', { 'hexagon-turned': turned }]">
    <div class="hexagon-content">
      <slot />
    </div>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    turned: Boolean
  }
})
</script>

<style lang="scss">
@use 'sass:math' as *;

$hexagon-width: div(round(div($hexagon-height * 100, sqrt(3))), 100);

@mixin dynamic-border ($width, $height, $border-size) {
  width: $width;
  height: $height;
  border: solid currentColor;
  border-width: $border-size 0;

  &::before, &::after {
    top: -$border-size;
    width: $width;
    height: $height;
    border: solid currentColor;
    border-width: $border-size 0;
  }
}

.hexagon {
  @include dynamic-border($hexagon-width, $hexagon-height, $bw-out);
  display: flex;
  padding: 3px;
  color: var(--c-primary);
  fill: currentColor;

  &, &-content {
    position: relative;

    &::before, &::after {
      content: '';
      position: absolute;
      left: 0;
      box-sizing: border-box;
    }

    &::before {
      transform: rotate(60deg);
    }

    &::after {
      transform: rotate(-60deg);
    }
  }

  &-content {
    @include dynamic-border($hexagon-width - 6, $hexagon-height - 12, $bw-in);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
  }

  &-turned {
    transform: rotate(90deg);

    .hexagon-content > * {
      transform: rotate(-90deg);
    }
  }
}
</style>
