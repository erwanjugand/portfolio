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

<style lang="scss">
.skills {
  &-container {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: $hexagon-height / 2;

    > * {
      margin: 0 #{($hexagon-width * 1.5) - ($border-out / 2)} #{(-$hexagon-height / 2) - ($border-out / 2)} #{($hexagon-width / 2) - ($border-out / 2)};
    }

    @media #{$small} {
      width: $hexagon-width * 3.5 - 3px;

      > *:nth-child(even) {
        margin-right: ($hexagon-width / 2) - ($border-out / 2);
        margin-left: ($hexagon-width * 2) - $border-out;
      }
    }

    @media #{$medium-only} {
      width: ($hexagon-width * 5) - (2 * $border-out);

      > *:nth-child(3n + 2) {
        margin-right: ($hexagon-width / 2) - ($border-out / 2);
      }

      > *:nth-child(3n + 3) {
        margin-left: ($hexagon-width * 2) - $border-out;
      }
    }

    @media #{$large-only} {
      width: ($hexagon-width * 8) - (3 * $border-out);

      > *:nth-child(5n + 3) {
        margin-right: ($hexagon-width / 2) - ($border-out / 2);
      }

      > *:nth-child(5n + 4) {
        margin-left: ($hexagon-width * 2) - $border-out;
      }
    }

    @media #{$extra-large} {
      width: ($hexagon-width * 11) - (4 * $border-out);

      > *:nth-child(7n + 4) {
        margin-right: ($hexagon-width / 2) - ($border-out / 2);
      }

      > *:nth-child(7n + 5) {
        margin-left: ($hexagon-width * 2) - $border-out;
      }
    }
  }
}

.skill {
  font-size: 1.25em;
  color: var(--c-primary);
  fill: var(--c-primary);

  &-name {
    transform: translateY(0);
    transition: transform var(--transition);

    .skill:hover & {
      transform: translateY(-2.5rem);
    }
  }

  &-score {
    position: absolute;
    top: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    opacity: 0;
    transform: translateY(0);
    transition: var(--transition);

    .skill:hover & {
      opacity: 1;
      transform: translateY(-2.5rem);
    }

    svg {
      width: 50%;
      height: 1.75rem;
      margin-top: .75rem;
    }
  }
}
</style>
