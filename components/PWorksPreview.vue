<template>
  <li class="work-preview xs12 m6 l4">
    <nuxt-link v-ripple :to="localePath({ name: 'work-slug', params: { slug: work.slug } })">
      <PCard tag="article">
        <template #header>
          <h3 v-text="work.title" />
          <PTime :date="work.dateRealization" />
        </template>
        <img class="work-preview-image" src="/images/favicon-pwa.png" alt="">
        <ul v-if="filters.length" class="work-preview-tags">
          <li v-for="filter of filters" :key="filter.id" class="work-preview-tag" v-text="$t(`works.filters.${filter.identifier}`)" />
        </ul>
      </PCard>
    </nuxt-link>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import type { PropType } from 'vue'
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
      return this.$accessor.workFilters.items.filter(f => this.work.filters.some(wf => wf.id === f.id))
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
    border-radius: $br-large $br-small;

    .ripple {
      z-index: 1;
    }
  }

  .card {
    height: 320px;

    &-content {
      position: relative;
      display: flex;
      padding: 0;
      overflow: hidden;
    }
  }

  &-image {
    width: 100%;
  }

  &-tags {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    padding: 32px 24px 16px;
    color: $white;
    background: linear-gradient(transparent 0%, rgba($black, .5) 80%);
    transition: padding var(--transition);

    @media #{$medium-and-up} {
      padding: 32px;
    }
  }

  &-tag:not(:first-child)::before {
    content: ',\a0';
  }
}
</style>
