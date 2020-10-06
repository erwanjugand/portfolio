<template>
  <main id="changelog" class="release-container">
    <h1 v-text="$t('changeLog.mainTitle')" />
    <STransitionFadeHeight group tag="ul">
      <li v-for="release of releasesFiltered" :key="`release-${release.id}`" class="release-wrapper">
        <div class="release elevation-1">
          <div class="release-header">
            <h2>
              <PIcon :name="release.major ? 'boxFull' : 'pencilRuler'" />
              {{ release.name }}
            </h2>
            <time :datetime="release.date" v-text="$dateFns.format(release.date, 'd MMMM yyyy', {locale: currentLang})" />
          </div>
          <button
            v-for="tag of release.tags"
            :key="`${release.id}-${tag.id}`"
            v-ripple
            :class="['release-tag', 'elevation-2', {'release-tag-darken': filterTag && tag.id !== filterTag}]"
            :style="{background: tag.color}"
            @click.prevent="filter(tag.id)"
            v-text="tag.name"
          />
          <div class="release-content" v-html="release.description" />
        </div>
      </li>
    </STransitionFadeHeight>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Release } from 'models'
import { fr, enGB } from 'date-fns/locale'
const locale: {[key: string]: Locale} = { fr, en: enGB }

export default Vue.extend({
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
      return this.releases.filter((r: Release) => !this.filterTag || r.tags.some(t => t.id === this.filterTag))
    }
  },

  async asyncData ({ app: { $accessor }, $axios, $config: { apiUrl } }) {
    // Fetch data if necessary
    let releases = $accessor.releases as Release[]
    if (!releases.length) {
      const { data } = await $axios.get(`${apiUrl}/versions`)
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
@import '~/assets/css/variables';

.release {
  position: relative;
  max-width: 40em;
  margin: 0 auto 1em;
  padding: 1em;
  background: var(--c-background-1);
  border-radius: 1em;
  transition: margin var(--transition);

  &-wrapper {
    overflow: hidden;

    &:not(:last-child) & {
      @media #{$medium-and-up} {
        margin-bottom: 2em;
      }
    }
  }

  &-container {
    padding: 3.75em 1em 1em;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;

    @media #{$small} {
      flex-direction: column;
    }
  }

  h2 {
    display: flex;
    align-items: center;
    font-weight: 500;

    svg {
      width: 1.5em;
      height: 1em;
      margin-right: 1rem;
      fill: var(--c-text-80);
    }
  }

  time {
    color: var(--c-text-35);

    @media #{$small} {
      margin-top: 1em;
    }
  }

  &-tag {
    margin-bottom: 1em;
    padding: .5em 1em;
    font-size: .875em;
    color: $white;
    border-radius: 1rem;
    transition: opacity var(--transition);

    &-darken {
      opacity: .3;
    }

    &:not(:last-of-type) {
      margin-right: 1em;
    }
  }

  &-content {
    font-weight: 300;

    li::before {
      content: '-';
      padding: 0 .5em;
    }
  }
}
</style>
