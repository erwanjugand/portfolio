<style lang="scss" src="./PMenu.scss"></style>

<template>
  <nav id="menu">
    <transition-group tag="ul" name="fade">
      <li v-for="link of links" v-show="$store.state.menuOpened" :key="link.name">
        <nuxt-link v-ripple :to="localePath(link.route)" @click.native="$store.commit('setMenuOpening', false)">
          <PIcon :name="link.icon" />
          <span v-text="$t(`header.${link.name}`)" />
        </nuxt-link>
      </li>
      <li v-show="$store.state.menuOpened" key="darkMode">
        <button v-ripple type="button" @click="toggleDarkMode">
          <PIcon :name="`lightbulb${$store.state.darkMode ? 'Slash' : 'On'}`" />
          {{ $t(`header.${$store.state.darkMode ? 'dark' : 'light'}Mode`) }}
        </button>
      </li>
    </transition-group>
  </nav>
</template>

<script>
import PIcon from '~/components/PIcon/PIcon.vue'

export default {
  components: {
    PIcon
  },

  computed: {
    links () {
      return [
        { name: 'home', icon: 'homeAlt', route: 'index' },
        { name: 'works', icon: 'folderOpen', route: 'works' },
        { name: 'contactMe', icon: 'envelopeOpenText', route: 'contact' },
        { name: 'portfolioEvolution', icon: 'sparkles', route: 'contact' }
      ]
    }
  },

  methods: {
    toggleDarkMode () {
      const cookieValue = !this.$cookies.get('darkMode')
      this.$store.commit('setDarkMode', cookieValue)
      this.$cookies.set('darkMode', cookieValue, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365
      })
    }
  }
}
</script>
