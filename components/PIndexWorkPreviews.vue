<template>
  <section class="work-previews">
    <h2>Me derniers travaux</h2>
    <ul class="work-preview-container row">
      <li v-for="work in works" class="work-preview s12 m6 l4" :key="work.id">
        {{ work.title }}
      </li>
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
  background: red;
  height: 18.75em;

  &-container {
    width: 100%;
    gap: 3px;
  }
}
</style>
