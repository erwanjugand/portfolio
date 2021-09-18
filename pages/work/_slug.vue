<template>
  <main v-if="work">
    <section class="container">
      <h1 v-text="work.title" />

      <div class="row">
        <PCard class="work-description xs12 l9">
          <template #header>
            {{ $t('work.description.title') }}
          </template>
          <p v-if="isOnlyFrenchContent" v-text="$t('global.noTranslationAvailable', { lang: $t('global.lang.' + $i18n.locale) })" />
        </PCard>
        <PCard class="work-gallery xs12 l9">
          <template #header>
            {{ $t('work.screenshots.title') }}
          </template>
          <div class="work-gallery-row" :style="galleryStyles" />
        </PCard>
        <PCard class="work-tags xs12 l3">
          <template #header>
            {{ $t('work.tags.title') }}
          </template>
          <nuxt-link v-for="filter of filters" :key="filter.id" :to="localePath({ name: 'works', query: { filterId: filter.id } })">
            {{ filter.name }}
          </nuxt-link>
        </PCard>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Work, WorkFilter } from 'models'

export default Vue.extend({
  nuxtI18n: {
    paths: {
      fr: '/travail/:slug',
      en: '/work/:slug'
    }
  },

  async asyncData ({ app: { $accessor }, route, error }) {
    const id = +route.params.slug.split('-')[0]
    await $accessor.works.fetch(id)

    const work = $accessor.works.items.find(w => w.id === id)

    if (work) {
      await $accessor.workFilters.fetchAll()
      return {
        work,
        workFilters: $accessor.workFilters.items
      }
    } else {
      error({ statusCode: 404, message: 'Work not found' })
    }
  },

  data () {
    return {
      work: {} as Work,
      workFilters: [] as WorkFilter[]

    }
  },

  computed: {
    filters (): WorkFilter[] {
      return this.$accessor.workFilters.items.filter(f => this.work.filters.some(wf => wf.id === f.id))
    },

    isOnlyFrenchContent (): boolean {
      return this.$i18n.locale !== 'fr'
    },

    galleryStyles (): Partial<CSSStyleDeclaration> {
      return {}
    }
  }
})
</script>

<style lang="scss" >
.work {
  &-description {
    @media #{$large-and-up} {
      grid-row: 1 / 2;
    }
  }

  &-gallery {
    @media #{$large-and-up} {
      grid-row: 2 / 3;
    }
  }

  &-tags {
    @media #{$large-and-up} {
      grid-row: 1 / 3;
    }
  }
}
</style>
