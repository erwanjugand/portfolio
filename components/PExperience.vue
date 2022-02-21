<template>
  <li class="experience">
    <time v-show="showYear" class="time" :datetime="experience.dateRealization">
      <span class="time-text" v-text="textYear" />
    </time>
    <div class="experience-content" v-text="$t(`experiences.items.${experience.title}`)" />
    <div class="experience-contract" v-text="$t(`experiences.contract.${experience.contract}`)" />
  </li>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Experience } from '~/models'
export default Vue.extend({
  props: {
    experience: {
      type: Object
    } as PropOptions<Experience>,
    index: Number
  },

  computed: {
    showYear (): boolean {
      return !this.index || this.$state.experiences[this.index - 1].year !== this.experience.year
    },
    textYear (): string {
      return (!this.index ? this.$t('experiences.today') : this.experience.year).toString()
    }
  }
})
</script>

<style lang="scss">
@use 'sass:math' as *;

$diagonal: sqrt(3);

.experience {
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
