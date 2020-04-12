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
import PMenu from '~/components/PMenu/PMenu.vue'
import PHeader from '~/components/PHeader/PHeader.vue'

export default {
  head () {
    return this.$nuxtI18nSeo()
  },

  components: {
    PMenu,
    PHeader
  },

  mounted () {
    this.$store.commit('setDarkMode', this.$cookies.get('darkMode') || window.matchMedia('(prefers-color-scheme: dark)').matches)
  }
}
</script>
