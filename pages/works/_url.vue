<template>
  <main v-if="work">
    <pre>{{ work }}</pre>
  </main>
</template>

<script>
export default {
  data () {
    return {
      work: null
    }
  },
  mounted () {
    const work = this.$store.state.works.find(w => w.url === this.$route.params.url)

    if (work) {
      this.work = work
    } else {
      this.$nuxt.error({ statusCode: 404, message: 'Work not found' })
    }
  }
}
</script>
