<template>
  <section class="skills">
    <h2>Mes expériences</h2>
    <ul class="skills-container">
      <PHexagon v-for="skill of skills" :key="`skill-${skill.id}`">
        {{ skill.name }}
        <PIcon v-for="n of 3" :key="`star-${n}`" :type="n > skill.level ? 'light' : 'solid'" name="star" />
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
@import '~/assets/css/variables';

.skills {
  display: flex;
  flex-direction: column;
  align-items: center;

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

      *:nth-child(3n + 2) {
        margin-right: ($hexagon-width / 2) - ($border-out / 2);
      }

      *:nth-child(3n + 3) {
        margin-left: ($hexagon-width * 2) - $border-out;
      }
    }

    @media #{$large-only} {
      width: ($hexagon-width * 8) - (3 * $border-out);

      *:nth-child(5n + 3) {
        margin-right: ($hexagon-width / 2) - ($border-out / 2);
      }

      *:nth-child(5n + 4) {
        margin-left: ($hexagon-width * 2) - $border-out;
      }
    }

    @media #{$extra-large} {
      width: ($hexagon-width * 11) - (4 * $border-out);

      *:nth-child(7n + 4) {
        margin-right: ($hexagon-width / 2) - ($border-out / 2);
      }

      *:nth-child(7n + 5) {
        margin-left: ($hexagon-width * 2) - $border-out;
      }
    }
  }

  .hexagon-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.25em;
    fill: var(--c-primary);
    color: var(--c-primary);

    svg {
      width: 1.75em;
    }
  }
}
</style>
