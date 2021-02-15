<template>
  <li class="hexagon">
    <div class="hexagon-content">
      <slot />
    </div>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>

<style lang="scss">
@use 'sass:math' as *;

$hexagon-width: $hexagon-height / sqrt(3);

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
  @include dynamic-border($hexagon-width, $hexagon-height, $border-out);
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
    @include dynamic-border($hexagon-width - 6, $hexagon-height - 12, $border-in);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
  }
}
</style>
