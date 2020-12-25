<template>
  <main id="index">
    <h1 class="title" v-text="'portfolio-v3'" />
    <PIndexSkills :skills="skills" />
    <PIndexExperiences :experiences="experiences" />
    <PIndexWorkPreviews :works="works" />
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

<style lang="scss">
#index {
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3em 0;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 2em;
  }
}
</style>
