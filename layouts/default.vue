<template>
  <div>
    <PHeader />
    <nuxt />
    <PEasterEgg />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { MetaInfo } from 'vue-meta'

export default Vue.extend({
  head (): MetaInfo {
    return {
      title: '',
      titleTemplate: (titleChunk) => {
        return this.$config.siteTitle + (titleChunk && ` - ${titleChunk}`)
      },
      ...this.$nuxtI18nHead(
        {
          addSeoAttributes: true
        }
      )
    }
  }
})
</script>
