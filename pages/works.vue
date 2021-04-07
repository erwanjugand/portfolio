<template>
  <main>
    <nuxt-link v-for="work in $accessor.works" :key="work.id" :to="localePath({ name: 'work-slug', params: { slug: work.slug } })">
      {{ work.title }}
    </nuxt-link>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Work, WorkFilter } from 'models'

export default Vue.extend({

  async asyncData ({ app: { $accessor }, $axios, $config: { apiUrl } }) {
    // Fetch datas if necessary
    const datas: {[key: string]: Work | WorkFilter} = {}
    const datasRequired = [
      { name: 'works', path: 'works' },
      { name: 'workFilters', path: 'work_filters' }
    ]

    for (const dataRequired of datasRequired) {
      let values = $accessor[dataRequired.name]
      if (!values.length) {
        const { data } = await $axios.get(`${apiUrl}/${dataRequired.path}`)
        values = data
        $accessor[`set${dataRequired.name[0].toUpperCase() + dataRequired.name.slice(1)}`](data)
      }
      datas[dataRequired.name] = values
    }

    return datas as {[key:string]: Work | WorkFilter}
  },
  head () {
    return {
      title: this.$t('works.metaTitle').toString()
    }
  },

  nuxtI18n: {
    paths: {
      fr: '/travaux',
      en: '/works'
    }
  }
})
</script>
