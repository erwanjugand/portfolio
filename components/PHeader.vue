<template>
  <header :class="['elevation-2', { 'flat': $accessor.menuOpened }]">
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
        <ul v-show="switchLanguage" id="menu-languages" role="menu" class="switch-language-list elevation-3">
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
      ref="menuButton"
      v-ripple
      :aria-expanded="$accessor.menuOpened"
      aria-controls="menu"
      class="burger"
      @click="$accessor.setMenuOpening(!$accessor.menuOpened)"
    >
      {{ $t('header.menu') }}
      <span aria-hidden="true" class="burger-icon">
        <span v-for="n of 3" :key="n" :class="'burger-path-' + n" />
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
  },

  mounted () {
    document.documentElement.addEventListener('keyup', this.closeMenu)
  },

  beforeDestroy () {
    document.documentElement.removeEventListener('keyup', this.closeMenu)
  },

  methods: {
    closeMenu (e: KeyboardEvent) {
      if (this.$accessor.menuOpened && e.key === 'Escape') {
        (this.$refs.menuButton as HTMLButtonElement).focus()
        this.$accessor.setMenuOpening(false)
      }
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
  height: 64px;
  padding: 0 5%;
  transition: box-shadow var(--transition);

  &.elevation-2 {
    background-color: $grey-87;
  }

  &.flat {
    box-shadow: none;
  }
}

.logo, .burger {
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-weight: $fw-light;
  text-decoration: none;
  text-transform: uppercase;
  color: $grey-0;
  transition: font-size var(--transition);

  @media #{$small-and-down} {
    font-size: 0;
  }
}

.logo {
  position: relative;
  margin-right: auto;

  svg {
    position: relative;
    width: 70px;
    margin-right: 1em;
    fill: var(--c-primary);
    transition: margin var(--transition);
  }
}

.switch-language {
  display: flex;
  align-items: center;
  padding: 0 16px;
  color: $grey-0;

  svg {
    width: 10px;
    margin-left: 8px;
    fill: $grey-0;
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
      position: relative;
      width: 32px;
      height: 32px;
    }
  }

  &-list {
    position: absolute;
    top: 100%;
    left: 50%;
    display: flex;
    border-radius: $br-small;
    transform: translateX(-50%);
    transition: transform var(--transition);

    li {
      &:first-child a {
        border-radius: $br-small 0 0 $br-small;
      }

      &:last-child a {
        border-radius: 0 $br-small $br-small 0;
      }
    }

    a {
      display: flex;
      padding: 8px;
      color: $grey-0;

      &.nuxt-link-exact-active {
        background-color: var(--c-secondary);
      }
    }
  }

  &-enter, &-leave-to {
    transform: translateX(-50%) scale(0);
  }
}

.burger {
  &-icon {
    margin-left: 1em;
  }

  &-path-1, &-path-2, &-path-3 {
    display: flex;
    width: 32px;
    height: 3px;
    background-color: $grey-0;
    border-radius: 2px;
    transition: margin var(--transition), transform var(--transition);
  }

  &-path-2, &-path-3 {
    margin-top: 8px;
  }

  &[aria-expanded='true'] .burger {
    &-path-1 {
      transform: rotate(45deg) translate3d(8px, 8px, 0);
    }

    &-path-2 {
      transform: rotate(45deg);
    }

    &-path-3 {
      transform: rotate(135deg) translate3d(-8px, 8px, 0);
    }
  }
}
</style>
