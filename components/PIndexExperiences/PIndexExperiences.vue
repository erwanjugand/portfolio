<style lang="scss" src="./PIndexExperiences.scss"></style>

<template>
  <section>
    <h2>Mes expériences</h2>
    <ul class="experience-container">
      <li
        v-for="(experience, index) of experiences"
        :key="experience.id"
        class="experience"
      >
        <time v-show="!index || experiences[index - 1].year !== experience.year" :datetime="experience.dateRealization">
          <span v-text="!index ? $t('experiences.today') : experience.year" />
        </time>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="experience-content" v-html="experience.description" />
        <div class="experience-contract" v-text="experience.contract" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Experience } from 'models'

export default Vue.extend({
  props: {
    experiences: {
      type: Array as PropType<Experience[]>,
      default: []
    }
  }
})
</script>
