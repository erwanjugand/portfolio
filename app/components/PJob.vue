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

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Job } from '~/store/state/experiences'

const { job } = defineProps<{
  job: Job
  single?: boolean
}>()

// Fix Cloudflare Worker (https://stackoverflow.com/questions/58491003/how-to-get-the-current-date-in-a-cloudflares-worker)
const currentDate = new Date()
const finishedAtValue = computed(() => job.finishedAt ?? currentDate)

const { d, t } = useI18n()
const title = computed(() => t(`PJob.items.${job.key}.title`))
const description = computed(() => t(`PJob.items.${job.key}.description`))
const contract = computed(() => `. ${t(`PJob.contract.${job.contract}`)}`)
const startedAt = computed(() => d(job.startedAt, 'short'))
const finishedAt = computed(() => {
  const isToday = finishedAtValue.value === currentDate
  return isToday ? t('PJob.today') : d(finishedAtValue.value, 'short')
})
const { duration } = useDateFormatDuration(() => job.startedAt, finishedAtValue)
const time = computed(() => `${startedAt.value} - ${finishedAt.value} . ${duration.value}`)
</script>

<style lang="scss">
$diagonal: math.sqrt(3);

.job {
  --scroll-animation-y: 48px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  &-header {
    display: grid;
    grid: 'a b' 'c c';
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 4px 0.3em;
  }

  &-title {
    grid-area: a;
    padding-left: 48px;
    color: var(--c-primary);
    font-weight: $fw-bold;

    &-anchor {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: calc(50% - 6px);
        left: math.div((12px * $diagonal) + 8px, 2);
        box-sizing: border-box;
        width: 12px;
        height: 12px;
        transform: rotate(45deg);
        border: 3px solid transparent;
        background-color: var(--c-background-bg);
        box-shadow: 0 0 0 3px var(--c-primary);
      }
    }
  }

  &-contract {
    grid-area: b;
    color: var(--c-primary);
    font-weight: $fw-light;
  }

  &-time {
    grid-area: c;
    padding-left: 48px;
    color: var(--c-text-secondary-3);
    font-size: 0.875rem;
  }

  &-description {
    padding-left: 48px;
    white-space: pre-line;
  }
}
</style>
