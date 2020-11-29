<template>
  <section>
    <h2>Works</h2>
    <PWorksPreview :works="works" />
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
