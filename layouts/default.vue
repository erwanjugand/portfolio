<template>
  <div id="page" :class="$store.state.darkMode !== null && `${$store.state.darkMode ? 'dark' : 'light'}-mode`">
    <PHeader />
    <PMenu />
    <div id="page-content" :class="{'minimized': $store.state.menuOpened}" v-on="$store.state.menuOpened ? { click: () => $store.commit('setMenuOpening', false) } : {}">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  head () {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      title: process.env.SITE_TITLE + (this.page && this.page.metaTitle && this.page.metaTitle !== process.env.SITE_TITLE ? ` - ${this.page.metaTitle}` : ''),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page && this.page.metaDescription
        },
        ...i18nSeo.meta
      ],
      htmlAttrs: i18nSeo.htmlAttrs,
      link: i18nSeo.link
    }
  },

  data ({ $store }) {
    return {
      page: $store.state.pages.find(p => p.name === this.$route.name.split('__')[0])
    }
  },

  watch: {
    $route: {
      handler (to) {
        this.page = this.$store.state.pages.find(p => p.name === to.name.split('__')[0])
      }
    }
  },

  mounted () {
    if (this.$store.state.darkMode === null) {
      this.$store.commit('setDarkMode', window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
  }
}
</script>
