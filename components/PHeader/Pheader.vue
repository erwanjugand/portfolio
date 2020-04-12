<style lang="scss" src="./PHeader.scss"></style>

<template>
  <header :class="['elevation-2', {'flat': $store.state.menuOpened}]">
    <div>
      <nuxt-link v-ripple class="logo" :to="localePath('index')" :title="$t('header.backToHome')" @click.native="$store.commit('setMenuOpening', false)">
        <img src="/images/logo.svg" alt="">
        <span v-text="'Erwan Jugand'" />
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
            :to="localePath('index', lang.iso)"
            :aria-label="$t(`header.lang.${lang.iso}`)"
            :title="$t(`header.lang.${lang.iso}`)"
            @click.native="switchLanguage = false"
          >
            <img :src="`/images/flag-${lang.iso}.svg`" :alt="$t(`header.lang.${lang.iso}`)">
          </nuxt-link>
        </div>
      </transition>
    </div>

    <button v-ripple type="button" :class="['burger', {'active': $store.state.menuOpened}]" @click="$store.commit('setMenuOpening', !$store.state.menuOpened)">
      <span v-text="$t('header.menu')" />
      <span class="burger-icon">
        <span />
        <span />
        <span />
      </span>
    </button>
  </header>
</template>

<script>
import PIcon from '~/components/PIcon/PIcon.vue'

export default {
  components: {
    PIcon
  },
  data () {
    return {
      switchLanguage: false
    }
  }
}
</script>
