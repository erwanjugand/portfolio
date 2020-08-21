<style lang="scss" src="./PIndexSkills.scss"></style>

<template>
  <section class="skills">
    <h2>Mes compétences</h2>
    <ul class="skills-container">
      <PHexagon v-for="skill of skills" class="skill" :key="`skill-${skill.id}`">
        <span class="skill-name" v-text="skill.name" />
        <div class="skill-score">
          <PIcon v-for="n of 3" :key="`star-${n}`" :type="n > skill.level ? 'light' : 'solid'" name="star" />
        </div>
      </PHexagon>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Skill } from 'models'

export default Vue.extend({
  props: {
    skills: {
      type: Array as PropType<Skill[]>,
      default: []
    }
  }
})
</script>
