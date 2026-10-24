<script setup lang="ts">
const { job } = defineProps<{
  job: Job
  single?: boolean
}>()

const { title, description, contract, time } = useJob(() => job)
</script>

<template>
  <div class="job scroll-animation-fade">
    <div class="job-header">
      <h4 :class="['job-title', { 'job-title-anchor': !single }]" v-text="title" />
      <p class="job-contract" v-text="contract" />
      <p class="job-time" v-text="time" />
    </div>
    <p class="job-description" v-text="description" />
  </div>
</template>

<style lang="scss">
.job {
  --scroll-animation-y: 48px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  &-header {
    display: grid;
    grid: 'a b' 'c c';
    grid-template-columns: auto 1fr;
    gap: 4px 0.3em;
    align-items: center;
  }

  &-title {
    grid-area: a;
    padding-left: 48px;
    font-weight: var(--font-weight-bold);
    color: var(--c-primary);

    &-anchor {
      position: relative;

      &::before {
        position: absolute;
        top: calc(50% - 6px);
        left: calc(((12px * sqrt(3)) + 8px) / 2);
        box-sizing: border-box;
        width: 12px;
        height: 12px;
        content: '';
        background-color: var(--c-background-bg);
        border: 3px solid transparent;
        box-shadow: 0 0 0 3px var(--c-primary);
        transform: rotate(45deg);
      }
    }
  }

  &-contract {
    grid-area: b;
    font-weight: var(--font-weight-light);
    color: var(--c-primary);
  }

  &-time {
    grid-area: c;
    padding-left: 48px;
    font-size: 0.875rem;
    color: var(--c-text-secondary-3);
  }

  &-description {
    padding-left: 48px;
    white-space: pre-line;
  }
}
</style>
