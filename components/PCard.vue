<template>
  <component :is="tag" class="card elevation-1">
    <div v-if="this.$slots.header" class="card-header">
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
  border-radius: 32px 8px;

  &-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 16px 24px 0;

    @media #{$medium-and-up} {
      padding: 16px 32px 0;
    }

    h2 {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      font-weight: 400;

      svg {
        flex-shrink: 0;
        width: 1.5em;
        height: 1em;
        margin-right: 16px;
        fill: var(--c-text);
      }
    }

    time {
      margin: 0 0 16px 16px;
      color: var(--c-text-secondary-4);
    }
  }

  &-content {
    padding: 0 24px 16px;
    font-weight: 300;

    @media #{$medium-and-up} {
      padding: 0 32px 32px;
    }
  }
}
</style>
