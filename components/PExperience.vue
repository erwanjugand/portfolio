<template>
  <li class="experience">
    <h3 class="experience-header" v-text="experience.enterprise" />
    <PJob v-for="job of experience.jobs" :key="job.key" :job="job" :single="hasOneJob" />
  </li>
</template>

<script setup lang="ts">
import { type Experience } from '~/store/store'

interface Props {
  experience: Experience
}

const props = defineProps<Props>()

const hasOneJob = computed(() => props.experience.jobs.length === 1)
</script>

<style lang="scss">
$diagonal: math.sqrt(3);

.experience {
  display: flex;
  flex-direction: column;
  gap: 32px;

  &-header {
    position: relative;
    padding-left: 64px;
    font-size: 1.5em;
    font-weight: $fw-bold;

    &::before {
      content: '';
      position: absolute;
      top: calc(50% - 12px);
      left: math.div((24px * $diagonal) - 24px, 2);
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      transform: rotate(45deg);
      border: 3px solid transparent;
      background-color: var(--c-background-bg);
      box-shadow:
        0 0 0 3px var(--c-primary),
        inset 0 0 0 1px var(--c-primary);
    }
  }
}
</style>
