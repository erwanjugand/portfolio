<template>
  <main class="release-container">
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
          <div class="release-tags">
            <button
              v-for="tag of release.tags"
              :key="`${release.id}-${tag.id}`"
              class="release-tag elevation-2"
              :class="['release-tag', 'elevation-2', {'release-tag-darken': filterTag && tag.id !== filterTag}]"
              :style="{background: tag.color}"
              @click.prevent="filter(tag.id)"
              v-text="tag.name"
            />
          </div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="release-content" v-html="release.description" />
        </div>
      </li>
    </STransitionFadeHeight>
  </main>
</template>

<script>
import { fr, enGB } from 'date-fns/locale'
const locale = { fr, en: enGB }

export default {
  nuxtI18n: {
    paths: {
      fr: '/journal-des-modifications',
      en: '/changelog'
    }
  },

  data () {
    return {
      filterTag: null
    }
  },

  computed: {
    currentLang () {
      return locale[this.$i18n.locale]
    },

    releasesFiltered () {
      return this.releases.filter(r => !this.filterTag || r.tags.some(t => t.id === this.filterTag))
    }
  },

  async asyncData ({ store, $axios }) {
    // Fetch data if necessary
    let releases = store.state.releases
    if (!releases.length) {
      const { data } = await $axios.get(`${process.env.API_URL}/versions`)
      store.commit('setReleases', data.sort())
      releases = data
    }
    return { releases }
  },

  methods: {
    filter (id) {
      this.filterTag = this.filterTag === id ? null : id
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/variables';

.release {
  position: relative;
  max-width: 40em;
  margin: 0 auto 1em;
  padding: 1em;
  border-radius: 1em;
  background: var(--c-background-1);
  transition: margin var(--transition);

  @media #{$medium-and-up} {
    &:not(:first-of-type) {
      margin-top: 2em;
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
    font-weight: 500;
    display: flex;
    align-items: center;

    svg {
      width: 1.5em;
      height: 1em;
      fill: var(--c-text-80);
      margin-right: 1rem;
    }
  }

  time {
    color: var(--c-text-35);

    @media #{$small} {
      margin-top: 1em;
    }
  }

  &-tags {
    display: flex;
    flex-wrap: wrap;
  }

  &-tag {
    margin-bottom: 1em;
    padding: .5em 1em;
    font-size: .875em;
    color: $white;
    border-radius: 1rem;

    &-darken {
      opacity: .3;
    }

    &:not(:last-of-type) {
      margin-right: 1em;
    }
  }

  &-content {
    li::before {
      content: '-';
      padding: 0 .5em;
    }
  }
}
</style>
