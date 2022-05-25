<template>
  <nav id="menu">
    <transition-group tag="ul" name="fade">
      <li v-for="link of links" v-show="$state.menuOpened" :key="link.name">
        <nuxt-link v-ripple :to="localePath(link.route)" @click.native="$state.setMenuState(false)">
          <PIcon :name="link.icon" />
          {{ $t(`header.${link.name}`) }}
        </nuxt-link>
      </li>
      <li v-show="$state.menuOpened" key="darkMode">
        <button v-ripple type="button" @click="toggleDarkMode">
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
        { name: 'home', icon: 'house', route: 'index' },
        { name: 'portfolioEvolution', icon: 'sparkles', route: 'changelog' }
      ]
    }
  },

  methods: {
    toggleDarkMode () {
      this.$colorMode.preference = this.$colorMode.value === 'dark' ? 'light' : 'dark'
    }
  }
})
</script>

<style lang="scss">
@use 'sass:math' as *;

#menu {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: $grey-87;

  ul {
    position: relative;
    left: 12vw;
    max-width: 70vw;
    transition: var(--transition);

    @media #{$medium-and-up} {
      left: 28vw;
      max-width: 40vw;
    }
  }

  svg {
    flex: 0 0 2em;
    height: calc(4em / 3);
    margin-right: .5em;
    fill: $grey-0;
  }

  a, button {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem;
    font-weight: $fw-light;
    text-decoration: none;
    text-transform: uppercase;
    color: $grey-0;
    box-sizing: initial; // Fix Flex auto with with text
    transition: var(--transition);

    &:not(.nuxt-link-exact-active) {
      opacity: .75;
    }

    &:hover {
      opacity: 1;
    }

    @media #{$large-and-up} {
      font-size: 1.5em;
    }
  }
}

.fade {
  &-enter-active, &-leave-active {
    transition: transform var(--transition), opacity var(--transition);
  }

  &-enter-active {
    @for $i from 2 through 5 {
      &:nth-child(#{$i}) {
        transition-delay: div($i - 1s, 10);
      }
    }
  }

  &-enter, &-leave-active {
    opacity: 0;
    transform: translateY(100%);
  }
}
</style>
