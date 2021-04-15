<template>
  <section class="work-previews">
    <h2 v-text="$t('home.works.title')" />
    <ul class="work-preview-container row">
      <PWorksPreview v-for="work in works" :key="work.id" :work="work" />
    </ul>
    <PButton class="work-preview-cta" :to="localePath('works')">
      {{ $t('home.works.cta') }}
    </PButton>
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

  &-cta {
    margin-top: 16px;
    transition: margin var(--transition);

    @media #{$medium-and-up} {
      margin-top: 32px;
    }
  }
}
</style>
