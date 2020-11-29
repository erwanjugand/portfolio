<template>
  <ul class="preview-work-container row">
    <li v-for="work in works" :key="work.id" class="s12 m6 l4">
      <article>
        {{ work.title }}
      </article>
    </li>
  </ul>
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
@import '~/assets/css/variables';

.preview-work-container {
  gap: $border-out;
  width: unquote('min(calc(100vw - #{2 * $border-out}), 120em)');
  margin: auto;

  article {
    height: 18.75em;
    background: red;
  }
}
</style>
