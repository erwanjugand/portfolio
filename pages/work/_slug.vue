<template>
  <main v-if="work">
    <pre>{{ work }}</pre>
  </main>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      fr: '/travail/:slug',
      en: '/work/:slug'
    }
  },

  data () {
    return {
      work: null
    }
  },

  mounted () {
    const work = this.$store.state.works.find(w => w.slug === this.$route.params.slug)

    if (work) {
      this.work = work
    } else {
      this.$nuxt.error({ statusCode: 404, message: 'Work not found' })
    }
  }
}
</script>
