<template>
  <li class="experience">
    <h3 class="experience-header" v-text="experience.enterprise" />
    <PJob
      v-for="job of experience.jobs"
      :key="job.key"
      :job="job"
      :single="hasOneJob"
    />
  </li>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Experience } from '~/models'

export default Vue.extend({
  props: {
    experience: {
      type: Object
    } as PropOptions<Experience>
  },

  computed: {
    hasOneJob (): boolean {
      return this.experience.jobs.length === 1
    }
  }
})
</script>

<style lang="scss">
@use 'sass:math' as *;

$diagonal: sqrt(3);

.experience {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &-header {
    position: relative;
    padding-left: 64px;
    font-size: 1.5em;
    font-weight: $fw-bold;

    &::before {
      content: '';
      position: absolute;
      top: calc(50% - 12px);
      left: div((24px * $diagonal) - 24px , 2);
      width: 24px;
      height: 24px;
      background-color: var(--c-background-bg);
      border: $bw-out solid transparent;
      box-shadow: 0 0 0 $bw-out var(--c-primary), inset 0 0 0 $bw-in var(--c-primary);
      transform: rotate(45deg);
      box-sizing: border-box;
    }
  }
}
</style>
