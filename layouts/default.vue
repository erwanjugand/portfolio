<template>
  <div id="page">
    <PHeader />
    <PMenu />
    <div id="page-content" :class="{'minimized': $accessor.menuOpened}" v-on="$accessor.menuOpened ? { click: () => $accessor.setMenuOpening(false) } : {}">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import { NuxtI18nSeo } from 'nuxt-i18n/types/nuxt-i18n'

export default Vue.extend({
  middleware: 'support',

  head (): MetaInfo {
    const i18nSeo: NuxtI18nSeo = this.$nuxtI18nSeo()
    return {
      htmlAttrs: i18nSeo.htmlAttrs,
      link: i18nSeo.link,
      meta: i18nSeo.meta,
      title: '',
      titleTemplate: (titleChunk) => {
        return this.$config.siteTitle + (titleChunk && ` - ${titleChunk}`)
      }
    }
  }
})
</script>
