<template>
  <main>
    ChangeLog
    <div v-for="release of releases" :key="release.id">
      <h2 v-text="release.name" />
      <time :datetime="release.date" v-text="$dateFns.format(release.date, 'MMMM yyyy', {locale: currentLanguage})" />
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="release.description" />
    </div>
  </main>
</template>

<script>
import { fr, enGB } from 'date-fns/locale'

export default {
  nuxtI18n: {
    paths: {
      fr: '/journal-des-modifications',
      en: '/changelog'
    }
  },

  computed: {
    currentLanguage () {
      return this.$i18n.locale === 'fr' ? fr : enGB
    }
  },

  async asyncData ({ store, $axios }) {
    // Fetch data if necessary
    let releases = store.state.releases
    if (!releases.length) {
      const { data } = await $axios.get(`${process.env.API_URL}/versions`)
      store.commit('setReleases', data)
      releases = data
    }
    return { releases }
  }
}
</script>
