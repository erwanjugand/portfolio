<template>
  <main v-if="work">
    <pre v-text="work" />
    <p v-if="isOnlyFrenchContent" v-text="$t('global.noTranslationAvailable', { lang: $t('global.lang.' + $i18n.locale) })" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Work } from 'models'

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
      return {
        work
      }
    } else {
      error({ statusCode: 404, message: 'Work not found' })
    }
  },

  data () {
    return {
      work: {} as Work
    }
  },

  computed: {
    isOnlyFrenchContent (): boolean {
      return this.$i18n.locale !== 'fr'
    }
  }
})
</script>
