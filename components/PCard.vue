<template>
  <component :is="tag" class="card elevation-1">
    <div v-if="this.$slots.header" class="card-header">
      <slot name="header" />
    </div>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    tag: {
      type: String,
      default: ''
    },
  }
})
</script>

<style lang="scss">
.card {
  max-width: 640px;
  padding: 16px;
  border-radius: 32px 8px;

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
}
</style>
