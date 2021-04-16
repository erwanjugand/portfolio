<template>
  <main>
    <section>
      <h1 v-text="$t('works.mainTitle')" />
      <div class="row works-filters-container">
        <PCard class="s12">
          <template #header>
            <h2>
              <PIcon name="filter" />
              {{ $t('works.formTitle') }}
            </h2>
          </template>
          <div class="works-filters">
            <ul>
              <li>
                <PButton :outlined="!!activeFilterId" @click="changeFilter(null)">
                  {{ $t('works.allWorksButton') }}
                </PButton>
              </li>
              <li v-for="filter of $accessor.workFilters" :key="filter.id">
                <PButton :outlined="filter.id !== activeFilterId" @click="changeFilter(filter.id)">
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
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Work, WorkFilter } from 'models'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({

  async asyncData ({ app: { $accessor }, $axios, $config: { apiUrl } }) {
    // Fetch datas if necessary
    const datas: {[key: string]: Work | WorkFilter} = {}
    const datasRequired = [
      { name: 'works', path: 'works' },
      { name: 'workFilters', path: 'work_filters' }
    ]

    for (const dataRequired of datasRequired) {
      let values = $accessor[dataRequired.name]
      if (!values.length) {
        const { data } = await $axios.get(`${apiUrl}/${dataRequired.path}`)
        values = data
        $accessor[`set${dataRequired.name[0].toUpperCase() + dataRequired.name.slice(1)}`](data)
      }
      datas[dataRequired.name] = values
    }

    return datas as {[key:string]: Work | WorkFilter}
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
      return this.$accessor.workFilters.find(f => f.id === this.activeFilterId)
    },

    activeWorks (): Work[] {
      return this.$accessor.works.filter(w => !this.activeFilter || this.activeFilter.works.some(fw => fw.id === w.id))
    }
  },
  methods: {
    changeFilter (filterId: number | null) {
      this.$router.replace({ path: this.$route.path, query: { filterId: filterId?.toString() } })
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
      margin-bottom: 16px;
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
