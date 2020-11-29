<template>
  <section class="work-previews">
    <h2>Me derniers travaux</h2>
    <ul class="work-preview-container row">
      <li v-for="work in works" :key="work.id" class="work-preview s12 m6 l4">
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
  height: 18.75em;
  background: #F00;

  &-container {
    gap: 3px;
    width: 100%;
  }
}
</style>
