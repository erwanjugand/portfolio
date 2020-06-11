<template>
  <main class="release-container">
    <h1 v-text="$t('changeLog.mainTitle')" />
    <div v-for="release of releases" :key="release.id" class="release elevation-1">
      <div class="release-header">
        <h2>
          <PIcon :name="release.major ? 'boxFull' : 'pencilRuler'" />
          {{ release.name }}
        </h2>
        <time :datetime="release.date" v-text="$dateFns.format(release.date, 'd MMMM yyyy', {locale: currentLang})" />
      </div>
      <ul class="release-tags">
        <li v-for="tag of release.tags" :key="`${release.id}-${tag.id}`" class="release-tag elevation-2" :style="{background: tag.color}" v-text="tag.name" />
      </ul>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="release-content" v-html="release.description" />
    </div>
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

  computed: {
    currentLang () {
      return locale[this.$i18n.locale]
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
