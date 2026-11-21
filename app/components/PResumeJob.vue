<script setup lang="ts">
const { job } = defineProps<{
  job: Job
  compact?: boolean
}>()

const { title, description, contract, time } = useJob(() => job)
</script>

<template>
  <div class="cv-job">
    <div class="cv-job-header">
      <p class="cv-job-title" v-text="title" />
      <span class="cv-job-contract" v-text="contract" />
    </div>
    <p class="cv-job-time" v-text="time" />
    <p v-if="!compact" class="cv-job-description" v-text="description" />
  </div>
</template>

<style lang="scss">
.cv-job {
  display: flex;
  flex-direction: column;
  gap: 4px;

  &-header {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 12px;
    align-items: center;
  }

  &-title {
    font-size: 0.75em;
    font-weight: var(--font-weight-bold);
  }

  &-contract {
    padding: 2px 12px;
    font-size: 0.625em;
    font-weight: var(--font-weight-semibold);
    color: var(--c-accent);
    text-transform: uppercase;
    background-color: color-mix(in srgb, var(--c-accent) 12%, var(--c-surface));
    clip-path: var(--chevron);
  }

  &-time {
    font-size: 0.75em;
    font-weight: var(--font-weight-medium);
    color: var(--c-ink-3);
  }

  &-description {
    font-size: 0.75em;
    color: var(--c-ink-2);
  }
}
</style>
