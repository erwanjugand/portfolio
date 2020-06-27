<style lang="scss" src="./PMenu.scss"></style>

<template>
  <nav id="menu">
    <transition-group tag="ul" name="fade">
      <li v-for="link of links" v-show="$accessor.menuOpened" :key="link.name">
        <nuxt-link v-ripple :to="localePath(link.route)" @click.native="$accessor.setMenuOpening(localePath(link.route) !== $route.path)">
          <PIcon :name="link.icon" />
          <span v-text="$t(`header.${link.name}`)" />
        </nuxt-link>
      </li>
      <li v-show="$accessor.menuOpened" key="darkMode">
        <button v-ripple type="button" @click="() => { $colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark' }">
          <PIcon :name="`lightbulb${$colorMode.value === 'dark' ? 'Slash' : 'On'}`" />
          {{ $t(`header.${$colorMode.value === 'dark' ? 'dark' : 'light'}Mode`) }}
        </button>
      </li>
    </transition-group>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { Link } from 'models'

export default Vue.extend({
  computed: {
    links (): Link[] {
      return [
        { name: 'home', icon: 'homeAlt', route: 'index' },
        { name: 'works', icon: 'folderOpen', route: 'works' },
        { name: 'contactMe', icon: 'envelopeOpenText', route: 'contact' },
        { name: 'portfolioEvolution', icon: 'sparkles', route: 'changelog' }
      ]
    }
  }
})
</script>
