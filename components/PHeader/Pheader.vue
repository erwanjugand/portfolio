<style lang="scss" src="./PHeader.scss"></style>

<template>
  <header>
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
      </ul>
    </nav>
  </header>
</template>
