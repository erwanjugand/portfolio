<template>
  <main v-if="work">
    <pre v-text="work" />
    <p v-if="isNotFrenchPage" v-text="$t('global.noTranslationAvailable', { country: $t('global.country.' + $i18n.locale) })" />
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

  data () {
    return {
      work: undefined as Work | undefined
    }
  },

  computed: {
    isNotFrenchPage (): boolean {
      return this.$i18n.locale !== 'fr'
    }
  },

  mounted () {
    this.work = this.$accessor.works.find(w => w.slug === this.$route.params.slug)

    if (!this.work) {
      this.$nuxt.error({ statusCode: 404, message: 'Work not found' })
    }
  }
})
</script>
