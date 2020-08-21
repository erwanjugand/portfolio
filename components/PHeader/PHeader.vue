<style lang="scss" src="./PHeader.scss"></style>

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
        :class="['switch-language', {'active': switchLanguage}]"
        :aria-label="$t('header.changeLanguage')"
        :title="$t('header.changeLanguage')"
        @click="switchLanguage = !switchLanguage"
      >
        <img :src="`/images/flag-${$i18n.locale}.svg`" :alt="$t(`header.lang.${$i18n.locale}`)">
        <PIcon type="solid" name="caretDown" />
      </button>
      <transition name="switch-language">
        <div v-show="switchLanguage" class="switch-language-list elevation-1">
          <nuxt-link
            v-for="lang of $i18n.locales"
            :key="lang.iso"
            v-ripple
            :to="localePath($route.name ? $route.name.split('__')[0] : 'index', lang.iso)"
            :aria-label="$t(`header.lang.${lang.iso}`)"
            :title="$t(`header.lang.${lang.iso}`)"
            @click.native="switchLanguage = false"
          >
            <img loading="lazy" :src="`/images/flag-${lang.iso}.svg`" :alt="$t(`header.lang.${lang.iso}`)">
          </nuxt-link>
        </div>
      </transition>
    </div>

    <button v-ripple type="button" :class="['burger', {'active': $accessor.menuOpened}]" @click="$accessor.setMenuOpening(!$accessor.menuOpened)">
      {{ $t('header.menu') }}
      <span class="burger-icon">
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
