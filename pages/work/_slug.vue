<template>
  <main v-if="work">
    <article class="container">
      <h1 v-text="work.title" />

      <div class="row">
        <PCard class="work-information xs12 l9">
          <template #header>
            {{ $t('work.description.title') }}
          </template>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-html="work.description" />
        </PCard>

        <PCard class="work-gallery xs12 l9">
          <template #header>
            {{ $t('work.screenshots.title') }}
          </template>
          <div class="work-gallery-row">
            <img v-for="(image, index) of work.images" :key="image.id" :src="image.url" :alt="image.alt" :class="{'work-gallery-big-image': !index && hasOddImages}">
          </div>
        </PCard>

        <PCard class="work-informations xs12 l3">
          <template #header>
            {{ $t('work.informations.title') }}
          </template>
          {{ realisationDate }}
          <nuxt-link v-for="filter of filters" :key="filter.id" :to="localePath({ name: 'works', query: { filterId: filter.id } })">
            {{ filter.name }}
          </nuxt-link>
        </PCard>
      </div>
    </article>
    <PFooter />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Work, WorkFilter } from 'models'
import { fr, enGB } from 'date-fns/locale'
import { LocaleDate } from '~/models'

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

    hasOddImages (): boolean {
      return !!(this.work.images.length % 2)
    },

    currentLocale (): Locale {
      const locales: LocaleDate = { fr, en: enGB }
      return locales[this.$i18n.locale]
    },

    realisationDate (): string {
      return this.$dateFns.format(this.work.dateRealization, 'PPP', { locale: this.currentLocale })
    }
  }
})
</script>

<style lang="scss" >
.work {
  &-information {
    @media #{$large-and-up} {
      grid-row: 1 / 2;
    }
  }

  &-gallery {
    @media #{$large-and-up} {
      grid-row: 2 / 3;
    }

    &-row {
      display: grid;
      grid-column: repeat(2, 1fr);
    }

    &-big-image {
      grid-column: 1 / 3;
      width: 100%;
    }

    &-image {
      width: 100%;
    }
  }

  &-informations {
    @media #{$large-and-up} {
      grid-row: 1 / 3;
    }
  }
}
</style>
