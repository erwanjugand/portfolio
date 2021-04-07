<template>
  <section class="work-previews">
    <h2>Me derniers travaux</h2>
    <ul class="work-preview-container row">
      <PWorksPreview v-for="work in works" :key="work.id" :work="work" />
    </ul>
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Work } from 'models'

export default Vue.extend({
  props: {
    works: {
      type: Array as PropType<Work[]>,
      default: []
    }
  }
})
</script>

<style lang="scss">
.work-preview {
  &-container {
    width: 100%;
    padding: 0 16px;
  }

  &:not(:first-child) {
    a, .card {
      border-top-left-radius: 8px;
    }
  }

  &:not(:last-child) {
    a, .card {
      border-bottom-right-radius: 8px;
    }
  }
}
</style>
