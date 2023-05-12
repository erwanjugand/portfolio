<template>
  <Component :is="tag" :class="{ hexagon: true, 'hexagon-turned': turned }">
    <div class="hexagon-content">
      <slot />
    </div>
  </Component>
</template>

<script setup lang="ts">
interface Props {
  tag?: keyof HTMLElementTagNameMap
  turned?: boolean
}

withDefaults(defineProps<Props>(), {
  tag: 'div',
  turned: false,
})
</script>

<style lang="scss">
$hexagon-height: 200px;
$hexagon-border-out: 3px;
$hexagon-border-in: 1px;
$hexagon-width: math.div(math.round(math.div($hexagon-height * 100, math.sqrt(3))), 100);

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
  @include dynamic-border($hexagon-width, $hexagon-height, $hexagon-border-out);

  display: flex;
  padding: 3px;
  fill: currentcolor;
  color: var(--c-primary);

  &,
  &-content {
    position: relative;

    &::before,
    &::after {
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
