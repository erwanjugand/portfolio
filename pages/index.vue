<template>
  <main id="index">
    <h1 :background="'portfolio-v3'" class="title" v-text="'portfolio-v3'" />
    <PIndexAbout />
    <PIndexTools />
    <PIndexSkills />
    <PIndexExperiences :experiences="experiences" />
    <PIndexLastWorks :works="works" />
    <PIndexMoreInformation />
    <PIndexContact />
    <PFooter />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Experience, Work, WorkFilter } from 'models'

export default Vue.extend({
  async asyncData ({ app: { $accessor } }) {
    await $accessor.experiences.fetchAll()
    await $accessor.works.fetchAll()
    await $accessor.workFilters.fetchAll()

    return {
      experiences: $accessor.experiences.items,
      works: $accessor.works.items,
      workFilters: $accessor.workFilters.items
    }
  },

  data () {
    return {
      experiences: [] as Experience[],
      works: [] as Work[],
      workFilters: [] as WorkFilter[]
    }
  }
})
</script>

<style lang="scss">
#index {
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 0;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 2em;
    font-weight: 500;
    text-align: center;
  }
}
</style>
