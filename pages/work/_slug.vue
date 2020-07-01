<template>
  <main v-if="work">
    <pre>{{ work }}</pre>
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

  mounted () {
    this.work = this.$accessor.works.find(w => w.slug === this.$route.params.slug)

    if (!this.work) {
      this.$nuxt.error({ statusCode: 404, message: 'Work not found' })
    }
  }
})
</script>
