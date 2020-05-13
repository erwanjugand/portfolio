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
    return this.$nuxtI18nSeo()
  },

  mounted () {
    if (this.$store.state.darkMode === null) {
      this.$store.commit('setDarkMode', window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
  }
}
</script>
