<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import ExperienceNode from '~/assets/images/experience-node.svg'

const { experience } = defineProps<{
  experience: Experience
}>()

const { t } = useI18n()

const years = computed(() => {
  const start = Math.min(...experience.jobs.map(({ startedAt }) => startedAt.getFullYear()))
  const end = Math.max(...experience.jobs.map(({ finishedAt }) => finishedAt?.getFullYear() ?? Infinity))

  if (end === Infinity) return t('PExperience.since', { year: start })
  return start === end ? `${start}` : `${start} - ${end}`
})
</script>

<template>
  <li class="experience">
    <div class="experience-header reveal">
      <h3 class="experience-enterprise">
        <ExperienceNode class="experience-node" />
        {{ experience.enterprise }}
      </h3>
      <span class="experience-years" v-text="years" />
    </div>
    <PJob v-for="job of experience.jobs" :key="job.key" :job :marker="experience.jobs.length > 1" />
  </li>
</template>

<style lang="scss">
.experience {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);

  &-header {
    display: flex;
    flex-wrap: wrap;
    gap: 4px var(--spacing-2);
    align-items: baseline;
  }

  &-enterprise {
    position: relative;
    font-size: 1.5em;
    font-weight: var(--font-weight-bold);

    @media #{breakpoints.$medium-and-up} {
      font-size: 2em;
    }
  }

  &-node {
    position: absolute;
    top: 0.5lh;
    left: calc(var(--timeline-x) - var(--spacing-6) - var(--spacing-3) / 2);
    width: var(--spacing-3);
    background: linear-gradient(to bottom right, var(--c-g1), var(--c-g2));
    clip-path: var(--hexagon);
    translate: 0 -50%;
  }

  &-years {
    font-size: 0.875em;
    font-weight: var(--font-weight-medium);
    color: var(--c-ink-3);
  }
}
</style>
