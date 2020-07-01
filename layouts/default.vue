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
      title: this.$config.siteTitle + (this.page && this.page.metaTitle && this.page.metaTitle !== this.$config.siteTitle ? ` - ${this.page.metaTitle}` : ''),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page?.metaDescription || ''
        },
        ...(i18nSeo.meta || [])
      ],
      htmlAttrs: i18nSeo.htmlAttrs,
      link: i18nSeo.link
    }
  },

  data () {
    return {
      page: this.$accessor.pages.find(p => this.$route.name && p.name === this.$route.name.split('__')[0])
    }
  },

  watch: {
    $route: {
      handler (to) {
        this.page = this.$accessor.pages.find(p => p.name === to.name.split('__')[0])
      }
    }
  }
})
</script>
