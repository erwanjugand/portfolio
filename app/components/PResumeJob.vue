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
      <h4 class="cv-job-title" v-text="title" />
      <p class="cv-job-contract" v-text="contract" />
      <p class="cv-job-time" v-text="time" />
    </div>
    <p v-if="!compact" class="cv-job-description" v-text="description" />
  </div>
</template>

<style lang="scss">
.cv-job {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-inline: 8px;

  &-header {
    display: grid;
    grid: 'a b' 'c c';
    grid-template-columns: auto 1fr;
    gap: 0 0.3em;
    font-size: 0.875em;
  }

  &-title {
    grid-area: a;
    font-weight: var(--font-weight-bold);
  }

  &-contract {
    grid-area: b;
    color: var(--c-gray-75);
  }

  &-time {
    grid-area: c;
    color: var(--c-gray-50);
  }

  &-description {
    font-size: 0.8125em;
    color: var(--c-gray-75);
  }
}
</style>
