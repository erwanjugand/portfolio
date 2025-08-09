<script setup lang="ts">
const { experience } = defineProps<{
  experience: Experience
}>()

const hasOneJob = computed(() => experience.jobs.length === 1)
</script>

<template>
  <li class="experience">
    <h3 class="experience-header scroll-animation-fade" v-text="experience.enterprise" />
    <PJob v-for="job of experience.jobs" :key="job.key" :job :single="hasOneJob" />
  </li>
</template>

<style lang="scss">
$diagonal: math.sqrt(3);

.experience {
  display: flex;
  flex-direction: column;
  gap: 32px;

  &-header {
    --scroll-animation-y: 48px;

    position: relative;
    padding-left: 64px;
    font-size: 1.5em;
    font-weight: var(--font-weight-bold);

    &::before {
      position: absolute;
      top: calc(50% - 12px);
      left: math.div((24px * $diagonal) - 24px, 2);
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      content: '';
      background-color: var(--c-background-bg);
      border: 3px solid transparent;
      box-shadow:
        0 0 0 3px var(--c-primary),
        inset 0 0 0 1px var(--c-primary);
      transform: rotate(45deg);
    }
  }
}
</style>
