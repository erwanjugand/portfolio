<template>
  <section>
    <h2 v-text="$t('home.experiences.title')" />
    <ul class="experience-container">
      <li
        v-for="(experience, index) of experiences"
        :key="experience.id"
        class="experience"
      >
        <time v-show="!index || experiences[index - 1].year !== experience.year" class="time" :datetime="experience.dateRealization">
          <span class="time-text" v-text="!index ? $t('experiences.today') : experience.year" />
        </time>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="experience-content" v-html="experience.description" />
        <div class="experience-contract" v-text="experience.contract" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import type { PropType } from 'vue'
import { Experience } from 'models'

export default Vue.extend({
  props: {
    experiences: {
      type: Array as PropType<Experience[]>
    }
  }
})
</script>

<style lang="scss">
@use 'sass:math' as *;

$diagonal: sqrt(3);

.experience {
  &-container {
    position: relative;
    max-width: min(100vw, 576px);
    margin: 12px 16px 0;
    transition: var(--transition);

    @media #{$medium-and-up} {
      margin-right: 144+16px;
      transform: translateX(144px);
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: calc(div(24px * $diagonal, 2) - div($bw-out, 2));
      width: $bw-out;
      height: 100%;
      background-image: linear-gradient(180deg, var(--c-primary) 90%, var(--c-background-bg));
    }
  }

  .time {
    position: relative;
    display: flex;
    width: 240px;
    font-size: 1.25em;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: div((24px * $diagonal) - 24px , 2);
      width: 24px;
      height: 24px;
      background-color: var(--c-background-bg);
      border: $bw-out solid transparent;
      box-shadow: 0 0 0 $bw-out var(--c-primary), inset 0 0 0 $bw-in var(--c-primary);
      transform: rotate(45deg);
      box-sizing: border-box;
    }

    &-text {
      text-transform: uppercase;
      opacity: .5;
      transform: translateX(24px * $diagonal + 16px);
      transition: var(--transition);

      @media #{$medium-and-up} {
        transform: translateX(calc(-100% - 16px));
      }
    }
  }

  &-content {
    margin: 16px 0 0 48px;
  }

  &-contract {
    margin: 0 0 16px 48px;
    font-size: .875em;
    color: var(--c-primary);
  }

  &:first-child time::before {
    box-shadow: 0 0 0 3px var(--c-primary), inset 0 0 0 20px var(--c-primary);
  }
}
</style>
