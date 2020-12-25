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

<style lang="scss">
.experience {
  &-container {
    position: relative;
    max-width: unquote('min(100vw, 36em)');
    margin: .75em 1em 0;
    transition: var(--transition);

    @media #{$medium-and-up} {
      margin-right: 9em + 1em;
      transform: translateX(9em);
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: calc(#{2rem * $diagonal / 2} - #{$border-out / 2});
      width: $border-out;
      height: 100%;
      background-color: linear-gradient(180deg, var(--c-primary) 90%, var(--c-background-0));
    }
  }

  time {
    position: relative;
    display: flex;
    width: 9em;
    font-size: 1.25em;

    &::before {
      content: '';
      position: absolute;
      top: -.225rem;
      left: ((2rem * $diagonal) - 2rem) / 2;
      width: 2rem;
      height: 2rem;
      background-color: var(--c-background-0);
      border: $border-out solid transparent;
      box-shadow: 0 0 0 $border-out var(--c-primary), inset 0 0 0 $border-in var(--c-primary);
      transform: rotate(45deg);
      box-sizing: border-box;
    }

    span {
      text-transform: uppercase;
      opacity: .5;
      transform: translateX(2rem * $diagonal + 1rem);
      transition: var(--transition);

      @media #{$medium-and-up} {
        transform: translateX(calc(-100% - 1rem));
      }
    }
  }

  &-content {
    margin: 1rem 0 0 3rem;
  }

  &-contract {
    margin: 0 0 1rem 3rem;
    font-size: .875em;
    color: var(--c-primary);
  }

  &:first-child time::before {
    box-shadow: 0 0 0 3px var(--c-primary), inset 0 0 0 20px var(--c-primary);
  }
}
</style>
