<template>
  <div id="page">
    <PHeader />
    <PMenu />
    <div id="page-content" :class="{'minimized': $accessor.menuOpened}" v-on="$accessor.menuOpened ? { click: () => $accessor.setMenuOpening(false) } : {}">
      <nuxt />
    </div>
    <PEasterEgg />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  head (): MetaInfo {
    return {
      title: '',
      titleTemplate: (titleChunk) => {
        return this.$config.siteTitle + (titleChunk && ` - ${titleChunk}`)
      },
      ...this.$nuxtI18nSeo()
    }
  }
})
</script>
