<template>
  <li class="work-preview s12 m6 l4">
    <nuxt-link v-ripple :to="localePath({ name: 'work-slug', params: { slug: work.slug } })">
      <PCard tag="article">
        <template #header>
          <h3 v-text="work.title" />
          <PTime :date="work.dateRealization" />
        </template>
        <ul class="work-preview-tags">
          <li v-for="filter of filters" :key="filter.id" v-text="filter.name" />
        </ul>
      </PCard>
    </nuxt-link>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Work, WorkFilter } from 'models'
export default Vue.extend({
  props: {
    work: {
      type: Object as PropType<Work>,
      required: true
    }
  },

  computed: {
    filters (): WorkFilter[] {
      return this.$accessor.workFilters.filter(f => this.work.filters.some(wf => wf.id === f.id))
    }
  }
})
</script>

<style lang="scss">
.work-preview {
  a {
    display: block;
    text-decoration: none;
    color: inherit;
    border-radius: 32px 8px;

    .ripple {
      z-index: 1;
    }
  }

  .card {
    height: 320px;
  }

  &-tags {
    display: flex;
  }
}
</style>
