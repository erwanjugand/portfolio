<template>
  <header :class="['elevation-2', {'flat': $accessor.menuOpened}]">
    <nuxt-link
      v-ripple
      class="logo"
      :to="localePath('index')"
      :title="$t('header.backToHome')"
      @click.native="$accessor.setMenuOpening(false)"
    >
      <PLogo />
      {{ $config.siteTitle }}
    </nuxt-link>

    <div v-click-outside="() => switchLanguage = false" class="switch-language-container">
      <button
        v-ripple
        class="switch-language"
        aria-controls="menu-languages"
        :aria-expanded="switchLanguage"
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
  width: 100%;
  height: 60px;
  padding: 0 5%;
  background-color: mix($black, $white, 87%);
  transition: box-shadow var(--transition);

  &.flat {
    box-shadow: none;
  }
}

.logo, .burger {
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-weight: 300;
  text-decoration: none;
  text-transform: uppercase;
  color: $white;
  transition: font-size var(--transition);

  @media #{$small} {
    font-size: 0;
  }
}

// Logo

.logo {
  margin-right: auto;

  svg {
    width: 60px;
    margin-right: 16px;
    fill: var(--c-primary);
  }
}

// Switch Language

.switch-language {
  display: flex;
  align-items: center;
  padding: 0 16px;
  color: $white;

  svg {
    width: 10px;
    margin-left: 8px;
    fill: $white;
    transition: transform var(--transition);
  }

  &[aria-expanded='true'] svg {
    transform: rotate(180deg);
  }

  &-container {
    position: relative;
    display: flex;
    transition: margin var(--transition);

    @media #{$medium-and-up} {
      margin-right: 16px;
    }

    img {
      width: 32px;
    }
  }

  &-list {
    position: absolute;
    top: 100%;
    left: 50%;
    display: flex;
    background-color: var(--c-background-0);
    border-radius: 8px;
    transform: translateX(-50%);
    overflow: hidden;
    transition: transform var(--transition);

    a {
      display: flex;
      padding: 8px;

      &:hover {
        background-color: var(--c-background-1);
      }

      &.nuxt-link-exact-active {
        background-color: var(--c-primary);
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
    margin-left: 16px;

    span {
      display: flex;
      width: 32px;
      height: 3px;
      background-color: $white;
      border-radius: 2px;
      transition: transform var(--transition);

      &:not(:first-of-type) {
        margin-top: 8px;
      }
    }

    [aria-expanded='true'] & span {
      &:nth-child(1) {
        transform: rotate(45deg) translate3d(8px, 8px, 0);
      }

      &:nth-child(2) {
        transform: rotate(45deg);
      }

      &:nth-child(3) {
        transform: rotate(135deg) translate3d(-8px, 8px, 0);
      }
    }
  }
}
</style>
