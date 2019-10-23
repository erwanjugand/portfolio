<template>
  <div>
    <PHeader />
    <PDrawer />
    <div id="content">
      <nuxt />
      <PFooter />
    </div>
  </div>
</template>

<script>
import PDrawer from '~/components/PDrawer/PDrawer.vue'
import PFooter from '~/components/PFooter/PFooter.vue'
import PHeader from '~/components/PHeader/PHeader.vue'

export default {
  components: {
    PDrawer,
    PFooter,
    PHeader
  },

  data () {
    return {
      route: null
    }
  },

  watch: {
    '$route' (to, from) {
      this.route = this.$store.state.pages.find(p => p.name === to.name)
    }
  },

  head () {
    return {
      title: this.route ? this.route.metaTitle : process.env.SITE_TITLE,
      meta: [
        { hid: 'description', name: 'description', content: this.route ? this.route.metaDescription : process.env.SITE_DESCRIPTION }
      ]
    }
  }
}
</script>
