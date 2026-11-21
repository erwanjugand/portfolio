<script setup lang="ts">
const { job } = defineProps<{
  job: Job
  marker?: boolean
}>()

const { title, description, contract, time } = useJob(() => job)
</script>

<template>
  <article class="job reveal">
    <div class="job-header">
      <h4 class="job-title">
        <span v-if="marker" class="job-marker" aria-hidden="true" />
        {{ title }}
      </h4>
      <span class="job-contract" v-text="contract" />
    </div>
    <p class="job-time" v-text="time" />
    <p class="job-description" v-text="description" />
  </article>
</template>

<style lang="scss">
.job {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);

  &-header {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-1) 12px;
    align-items: center;
  }

  &-title {
    position: relative;
    font-size: 1.125em;
    font-weight: var(--font-weight-bold);
  }

  &-marker {
    position: absolute;
    top: 0.5lh;
    left: calc(var(--timeline-x) - var(--spacing-6) - var(--spacing-1) / 2);
    width: var(--spacing-1);
    aspect-ratio: 0.866;
    background-color: var(--c-line-2);
    clip-path: var(--hexagon);
    translate: 0 -50%;
  }

  &-contract {
    padding: 4px 12px;
    font-size: 0.75em;
    font-weight: var(--font-weight-semibold);
    color: var(--c-accent-ink);
    text-transform: uppercase;
    background-color: color-mix(in srgb, var(--c-accent) 12%, transparent);
    clip-path: var(--chevron);
  }

  &-time {
    font-size: 0.875em;
    font-weight: var(--font-weight-medium);
    color: var(--c-ink-3);
  }

  &-description {
    color: var(--c-ink-2);
  }
}
</style>
