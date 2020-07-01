<template>
  <main>
    <h1 class="title">
      portfolio-v3
    </h1>
    skills
    <pre>{{ skills }}</pre>
    experiences
    <pre>{{ experiences }}</pre>
    works
    <pre>{{ works }}</pre>
    works filters
    <pre>{{ workFilters }}</pre>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Experience, Skill, Work, WorkFilter } from 'models'

export default Vue.extend({
  async asyncData ({ app: { $accessor }, $axios, $config: { apiUrl } }) {
    // Fetch datas if necessary
    const datas: {[key: string]: Experience | Skill | Work | WorkFilter} = {}
    const datasRequired = [
      { name: 'experiences', path: 'experiences' },
      { name: 'skills', path: 'skills' },
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

    return datas
  }
})
</script>
