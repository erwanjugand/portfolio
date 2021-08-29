<template>
  <component :is="tag" class="card elevation-1">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    <div class="card-content">
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
    }
  }
})
</script>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  border-radius: $br-large $br-small;
  overflow: hidden;

  &-header {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: space-between;
    padding: 16px 24px;
    transition: padding var(--transition);

    @media #{$medium-and-up} {
      padding: 24px 32px;
    }

    h2, h3 {
      display: flex;
      align-items: center;
      font-size: 1.5em;
      font-weight: 400;
      transition: margin var(--transition);

      svg {
        flex-shrink: 0;
        width: 1.5em;
        height: 1em;
        margin-right: 16px;
        fill: var(--c-text);
      }
    }

    time {
      color: var(--c-text-secondary-4);
    }
  }

  &-content {
    padding: 0 24px 16px;
    font-weight: 300;
    transition: padding var(--transition);

    @media #{$medium-and-up} {
      padding: 0 32px 32px;
    }
  }
}
</style>
