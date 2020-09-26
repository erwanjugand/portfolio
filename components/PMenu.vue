<template>
  <nav id="menu">
    <transition-group tag="ul" name="fade">
      <li v-for="link of links" v-show="$accessor.menuOpened" :key="link.name">
        <nuxt-link v-ripple :to="localePath(link.route)" @click.native="$accessor.setMenuOpening(localePath(link.route) !== $route.path)">
          <PIcon :name="link.icon" />
          {{ $t(`header.${link.name}`) }}
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

<style lang="scss">
#menu {
  background: #212121;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

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
    fill: #fff;
  }

  a, button {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    transition: var(--transition);
    box-sizing: initial; // Fix Flex auto with with text

    &:not(.nuxt-link-exact-active) {
      opacity: .8;
    }

    &:hover {
      opacity: 1;
    }

    @media #{$large-and-up} {
      font-size: 1.5em;
    }
  }
}


// Animation

.fade {
  &-enter-active, &-leave-active {
    transition: transform var(--transition), opacity var(--transition);
  }

  &-enter-active {
    @for $i from 2 through 5 {
      &:nth-child(#{$i}) {
        transition-delay: #{($i - 1) / 10}s;
      }
    }
  }

  &-enter, &-leave-active {
    transform: translateY(100%);
    opacity: 0;
  }
}
</style>
