<style lang="scss" src="./PHeader.scss"></style>

<template>
  <header class="elevation-2">
    HEADER
    <button type="button" @click="$store.commit('toggleDrawer')">
      Toggle drawer
    </button>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">
            Accueil
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/works">
            travaux
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">
            contact
          </nuxt-link>
        </li>
        <li>
          <button type="button" @click="toggleDarkMode">
            toggle darkMode
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    toggleDarkMode () {
      const cookieValue = !this.$cookies.get('darkMode')
      document.querySelector('#html').className = `${cookieValue ? 'dark' : 'light'}-mode`
      this.$cookies.set('darkMode', cookieValue, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365
      })
    }
  }
}
</script>
