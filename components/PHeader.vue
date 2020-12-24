<template>
  <header :class="['elevation-2', {'flat': $accessor.menuOpened}]">
    <div>
      <nuxt-link v-ripple class="logo" :to="localePath('index')" :title="$t('header.backToHome')" @click.native="$accessor.setMenuOpening(false)">
        <PLogo />
        {{ $config.siteTitle }}
      </nuxt-link>
    </div>

    <div v-click-outside="() => switchLanguage = false" class="switch-language-container">
      <button
        v-ripple
        type="button"
        class="switch-language"
        :aria-expanded="switchLanguage"
        aria-controls="menu-languages"
        :aria-label="$t('header.changeLanguage')"
        :title="$t('header.changeLanguage')"
        @click="switchLanguage = !switchLanguage"
      >
        <img :src="`/images/flag-${$i18n.locale}.svg`" :alt="$t(`header.lang.${$i18n.locale}`)">
        <PIcon type="solid" name="caretDown" />
      </button>
      <transition name="switch-language">
        <ul v-show="switchLanguage" id="menu-languages" role="menu" class="switch-language-list elevation-1">
          <li v-for="lang of $i18n.locales" :key="lang.iso">
            <nuxt-link
              v-ripple
              role="menuitem"
              :to="localePath($route.name ? $route.name.split('__')[0] : 'index', lang.iso)"
              :aria-label="$t(`header.lang.${lang.iso}`)"
              :title="$t(`header.lang.${lang.iso}`)"
              @click.native="switchLanguage = false"
            >
              <img loading="lazy" :src="`/images/flag-${lang.iso}.svg`" :alt="$t(`header.lang.${lang.iso}`)">
            </nuxt-link>
          </li>
        </ul>
      </transition>
    </div>

    <button
      v-ripple
      type="button"
      :aria-expanded="$accessor.menuOpened"
      aria-controls="menu"
      class="burger"
      @click="$accessor.setMenuOpening(!$accessor.menuOpened)"
    >
      {{ $t('header.menu') }}
      <span aria-hidden="true" class="burger-icon">
        <span v-for="n of 3" :key="n" />
      </span>
    </button>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import PLogo from '~/assets/svg/logo.svg?inline'

export default Vue.extend({
  components: {
    PLogo
  },

  data () {
    return {
      switchLanguage: false
    }
  }
})
</script>

<style lang="scss">
header {
  z-index: 10;
  position: fixed;
  display: grid;
  grid-template-columns: 1fr auto auto;
  width: 100vw;
  height: 3.75em;
  padding: 0 5vw;
  transition: box-shadow var(--transition), border var(--transition);

  &.elevation-2 {
    background: #212121;
    border-color: transparent transparent rgba($white, .05) transparent;
    border-width: 0 0 1px;
  }

  &.flat {
    border-color: transparent;
    box-shadow: none;
  }

  > div {
    display: flex;
  }
}

.logo, .burger {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-weight: 300;
  text-decoration: none;
  text-transform: uppercase;
  color: #FFF;
  transition: font-size var(--transition);

  @media #{$small} {
    font-size: 0;
  }
}

// Logo

.logo svg {
  width: 3.75rem;
  margin-right: 1em;
  fill: var(--c-primary);
}

// Switch Language

.switch-language {
  display: flex;
  align-items: center;
  padding: 0 1em;
  color: #FFF;

  svg {
    width: .625em;
    margin-left: .5em;
    fill: #FFF;
    transition: var(--transition);
  }

  &[aria-expanded='true'] svg {
    transform: rotate(180deg);
  }

  &-container {
    position: relative;
    transition: var(--transition);

    @media #{$medium-and-up} {
      margin-right: 1em;
    }

    img {
      width: 2em;
    }
  }

  &-list {
    position: absolute;
    top: 100%;
    left: 50%;
    display: flex;
    background: var(--c-background-0);
    border-radius: .5em;
    transform: translateX(-50%);
    overflow: hidden;
    transition: var(--transition);

    a {
      display: flex;
      padding: .5em;

      &:hover {
        background: var(--c-background-1);
      }

      &.nuxt-link-exact-active {
        background: var(--c-primary);
      }
    }
  }

  &-enter, &-leave-to {
    transform: translateX(-50%) scale(0);
  }
}

// Burger

.burger {
  &-icon {
    margin-left: 1em;

    span {
      display: flex;
      width: 2rem;
      height: .1875rem;
      background: #FFF;
      border-radius: .25rem;
      transition: var(--transition);

      &:not(:first-of-type) {
        margin-top: .5rem;
      }
    }

    [aria-expanded='true'] & span {
      &:nth-child(1) {
        transform: rotate(45deg) translate3d(.5rem, .5rem, 0);
      }

      &:nth-child(2) {
        transform: rotate(45deg);
      }

      &:nth-child(3) {
        transform: rotate(135deg) translate3d(-.5rem, .5rem, 0);
      }
    }
  }
}
</style>
