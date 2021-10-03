<template>
  <main v-if="work">
    <article class="container">
      <h1 v-text="work.title" />

      <div class="row">
        <PCard class="work-description xs12 l9">
          <template #header>
            <h2 v-text="$t('work.description.title')" />
          </template>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-html="work.description" />
        </PCard>

        <PCard class="work-gallery xs12 l9">
          <template #header>
            <h2 v-text="$t('work.screenshots.title')" />
          </template>
          <div class="work-gallery-row">
            <iframe
              v-for="video of work.videos"
              :key="video.id"
              class="elevation-2 work-gallery-video"
              :src="'https://www.youtube.com/embed/' + video.link"
              allowfullscreen
            />
            <img
              v-for="(image, index) of work.images"
              :key="image.id"
              :src="image.url"
              :alt="image.alt"
              :class="['elevation-2', !(index + work.videos.length) && hasOddMedias ? 'work-gallery-big-image' : 'work-gallery-image']"
            >
          </div>
        </PCard>

        <PCard class="work-informations xs12 l3">
          <template #header>
            <h2 v-text="$t('work.informations.title')" />
          </template>
          <div class="row">
            <div class="xs12 m6 l12 work-information">
              <h3 class="work-sub-title" v-text="$t('work.informations.dateTitle')" />
              <PTime :date="work.dateRealization" />
            </div>
            <div class="xs12 m6 l12 work-information">
              <h3 class="work-sub-title" v-text="$t('work.informations.categoriesTitle')" />
              <ul>
                <li v-for="filter of filters" :key="filter.id">
                  <nuxt-link :to="localePath({ name: 'works', query: { filterId: filter.id } })">
                    {{ $t(`works.filters.${filter.identifier}`) }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </PCard>
      </div>
    </article>
    <PFooter />
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

    hasOddMedias (): boolean {
      return !!((this.work.images.length + this.work.videos.length) % 2)
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

    &-row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    &-big-image, &-image, &-video {
      width: 100%;
      border-radius: $br-small;
    }

    &-big-image, &-video {
      grid-column: 1 / 3;
    }

    &-image {
      aspect-ratio: 1 / 1;
    }

    &-video {
      border: 0;
      aspect-ratio: 16 / 9;
    }
  }

  &-informations {
    @media #{$large-and-up} {
      grid-row: 1 / 3;
    }
  }

  &-information {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &-sub-title {
    font-size: 1.25rem;
    font-weight: $fw-regular;
  }
}
</style>
