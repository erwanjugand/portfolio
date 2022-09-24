<template>
  <component :is="tag" :class="{ 'hexagon': true, 'hexagon-turned': turned }">
    <div class="hexagon-content">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
defineProps({
  tag: {
    type: String,
    default: 'div'
  },
  turned: Boolean
})
</script>


<style lang="scss">
  $hexagon-height: 200px;
  $hexagon-border: 3px;
  $hexagon-border-in: 1px;
  $hexagon-width: div(round(div($hexagon-height * 100, sqrt(3))), 100);

  @mixin dynamic-border($width, $height, $border-size) {
    width: $width;
    height: $height;
    border: solid currentcolor;
    border-width: $border-size 0;

    &::before,
    &::after {
      top: -$border-size;
      width: $width;
      height: $height;
      border: solid currentcolor;
      border-width: $border-size 0;
    }
  }

  .hexagon {
    @include dynamic-border($hexagon-width, $hexagon-height, $hexagon-border);

    display: flex;
    padding: 3px;
    fill: currentcolor;
    color: var(--c-primary);

    &,
    &-content {
      position: relative;

      &::before,
      &::after {
        content: "";
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
      @include dynamic-border($hexagon-width - 6, $hexagon-height - 12, $hexagon-border-in);

      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: center;
      justify-content: center;
    }

    &-turned {
      transform: rotate(90deg);

      .hexagon-content > * {
        transform: rotate(-90deg);
      }
    }
  }
  </style>
