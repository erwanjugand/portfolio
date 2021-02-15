<template>
  <main id="changelog">
    <section class="container">
      <h1 v-text="$t('changeLog.mainTitle')" />
      <STransitionFadeHeight group tag="ul">
        <li v-for="release of releasesFiltered" :key="`release-${release.id}`" class="release-wrapper">
          <PCard tag="article" class="release">
            <template #header>
              <h2>
                <PIcon :name="release.major ? 'boxFull' : 'pencilRuler'" />
                {{ release.name }}
              </h2>
              <time :datetime="release.date" v-text="$dateFns.format(release.date, 'd MMMM yyyy', {locale: currentLang})" />
            </template>
            <ul class="release-tags">
              <li v-for="tag of release.tags" :key="`${release.id}-${tag.id}`">
                <button
                  v-ripple
                  :class="['release-tag', 'elevation-2', { 'release-tag-darken': filterTag && tag.id !== filterTag }]"
                  :style="{ backgroundColor: tag.color }"
                  @click.prevent="filter(tag.id)"
                  v-text="tag.name"
                />
              </li>
            </ul>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="release-content" v-html="release.description" />
          </PCard>
        </li>
      </STransitionFadeHeight>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Release } from 'models'
import { AxiosResponse } from 'axios'
import { Locale } from 'date-fns'
import { fr, enGB } from 'date-fns/locale'

const locale: {[key: string]: Locale} = { fr, en: enGB }

export default Vue.extend({
  head () {
    return {
      title: this.$t('changeLog.metaTitle').toString()
    }
  },

  nuxtI18n: {
    paths: {
      fr: '/journal-des-modifications',
      en: '/changelog'
    }
  },

  data () {
    return {
      filterTag: null as number | null,
      releases: [] as Release[]
    }
  },

  computed: {
    currentLang (): Locale {
      return locale[this.$i18n.locale]
    },

    releasesFiltered (): Release[] {
      return this.releases.filter(r => !this.filterTag || r.tags.some(t => t.id === this.filterTag))
    }
  },

  async asyncData ({ app: { $accessor }, $axios, $config: { apiUrl } }) {
    // Fetch data if necessary
    let releases = $accessor.releases
    if (!releases.length) {
      const { data }: AxiosResponse<Release[]> = await $axios.get(`${apiUrl}/versions`)
      $accessor.setReleases(data)
      releases = data
    }
    return { releases }
  },

  methods: {
    filter (id: number) {
      this.filterTag = this.filterTag === id ? null : id
    }
  }
})
</script>

<style lang="scss">
.release {
  max-width: 640px;
  margin: 0 auto 16px;

  &-wrapper:last-child {
    margin-bottom: 48px;
  }

  &-tags {
    display: flex;

    li:not(:last-of-type) {
      margin-right: 16px;
    }
  }

  &-tag {
    margin-bottom: 16px;
    padding: 8px 16px;
    font-size: 14px;
    line-height: 1.2;
    color: $white;
    border-radius: 16px;
    transition: opacity var(--transition);

    &-darken {
      opacity: .25;
    }
  }

  .release-content li::before {
    content: '-';
    padding: 0 8px;
  }
}
</style>
