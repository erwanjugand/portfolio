<template>
  <header class="header elevation-2">
    <div class="header-content container">
      <nuxt-link
        v-ripple
        class="logo"
        :to="localePath('index')"
        :title="$t('header.backToHome')"
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
        v-ripple
        class="switch-theme"
        type="button"
        :aria-label="themeText"
        :title="themeText"
        @click="toggleDarkMode"
      >
        <PIcon :name="themeIcon" />
      </button>
    </div>
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

  computed: {
    themeText (): string {
      return this.$t(`header.${this.$colorMode.value}Mode`).toString()
    },

    themeIcon (): string {
      return this.$colorMode.value === 'dark'
        ? 'moon'
        : this.$colorMode.value === 'light'
          ? 'brightness'
          : 'computer'
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
.header {
  z-index: 10;
  position: fixed;
  transition: box-shadow var(--transition);
  width: 100%;

  &.elevation-2 {
    background-color: rgba($grey-87, 80%);
    backdrop-filter: blur(20px);
  }

  &-content {
    display: grid;
    grid-template-columns: 1fr auto auto;
    height: 64px;
  }
}

.logo {
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

.switch-theme {
  display: flex;
  align-items: center;
  padding: 16px;

  svg {
    width: 2rem;
    fill: $grey-0;
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
</style>
