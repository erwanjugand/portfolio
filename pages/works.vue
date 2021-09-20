<template>
  <main>
    <section>
      <h1 :background="$t('works.mainTitle')" v-text="$t('works.mainTitle')" />
      <div class="row works-filters-container">
        <PCard class="xs12">
          <template #header>
            <h2>
              <PIcon name="filter" />
              {{ $t('works.formTitle') }}
            </h2>
          </template>
          <div class="works-filters">
            <ul>
              <li>
                <PButton :outlined="!!activeFilterId" :to="localePath('works')">
                  {{ $t('works.allWorksButton') }}
                </PButton>
              </li>
              <li v-for="filter of workFilters" :key="filter.id">
                <PButton :outlined="filter.id !== activeFilterId" :to="localePath({ name: 'works', query: { filterId: filter.id } })">
                  {{ filter.name }}
                </PButton>
              </li>
            </ul>
          </div>
        </PCard>
      </div>
      <client-only>
        <ul v-masonry item-selector=".work-preview" :gutter="16" class="row works-masonry">
          <PWorksPreview v-for="work in activeWorks" :key="work.id" v-masonry-tile :work="work" />
        </ul>
      </client-only>
    </section>
    <PFooter />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Work, WorkFilter } from 'models'
import type { MetaInfo } from 'vue-meta'

export default Vue.extend({
  async asyncData ({ app: { $accessor } }) {
    await $accessor.works.fetchAll()
    await $accessor.workFilters.fetchAll()

    return {
      works: $accessor.works.items,
      workFilters: $accessor.workFilters.items
    }
  },

  data () {
    return {
      works: [] as Work[],
      workFilters: [] as WorkFilter[]
    }
  },

  head (): MetaInfo {
    return {
      title: this.$t('works.metaTitle').toString()
    }
  },

  computed: {
    activeFilterId (): number | null {
      return this.$route.query.filterId ? +this.$route.query.filterId : null
    },

    activeFilter (): WorkFilter | undefined {
      return this.workFilters.find(f => f.id === this.activeFilterId)
    },

    activeWorks (): Work[] {
      return this.works.filter(w => !this.activeFilter || this.activeFilter.works.some(fw => fw.id === w.id))
    }
  },

  nuxtI18n: {
    paths: {
      fr: '/travaux',
      en: '/works'
    }
  }
})
</script>

<style lang="scss">
.works {
  &-filters {
    display: flex;
    overflow: auto;

    &-container {
      margin: 0 16px 16px;
      transition: margin var(--transition);

      @media #{$medium-and-up} {
        justify-items: center;
        margin-bottom: 64px;
      }

      .card {
        max-width: 100%;

        @media #{$medium-and-up} {
          width: fit-content;
        }
      }
    }

    ul {
      display: flex;
      white-space: nowrap;
    }

    li:not(:last-of-type) {
      margin-right: 16px;
    }
  }

  &-masonry {
    margin: 0  16px;

    .work-preview {
      width: 100%;
      margin-bottom: 16px;

      @media #{$medium-and-up} {
        width: calc((100% - 16px) / 2);
      }

      @media #{$large-and-up} {
        width: calc((100% - 32px) / 3);
      }
    }
  }
}
</style>
