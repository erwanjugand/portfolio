<template>
  <main id="index">
    <h1 :background="'portfolio-v3'" class="title" v-text="'portfolio-v3'" />
    <PIndexAbout />
    <PIndexTools />
    <PIndexSkills :skills="skills" />
    <PIndexExperiences :experiences="experiences" />
    <PIndexLastWorks :works="works" />
    <PIndexMoreInformation />
    <PIndexContact />
    <PFooter />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Experience, Skill, Work, WorkFilter } from 'models'

export default Vue.extend({
  async asyncData ({ app: { $accessor } }) {
    await $accessor.experiences.fetchAll()
    await $accessor.works.fetchAll()
    await $accessor.workFilters.fetchAll()
    await $accessor.skills.fetchAll()

    return {
      experiences: $accessor.experiences.items,
      works: $accessor.works.items,
      workFilters: $accessor.workFilters.items,
      skills: $accessor.skills.items
    }
  },

  data () {
    return {
      experiences: [] as Experience[],
      works: [] as Work[],
      workFilters: [] as WorkFilter[],
      skills: [] as Skill[]
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
    padding: 3em 0;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 2em;
    text-align: center;
  }
}
</style>
