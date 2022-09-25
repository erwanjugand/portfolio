<template>
  <div class="job">
    <div class="job-header">
      <h4 :class="['job-title', { 'job-title-anchor': !single }]" v-text="title" />
      <p class="job-contract" v-text="contract" />
      <p class="job-time" v-text="time" />
    </div>
    <p class="job-description" v-text="description" />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import { intervalToDuration, addMonths } from 'date-fns'
import { Job } from '~/store/store'
const { d, t } = useI18n()

const props = defineProps({
  job: {
    type: Object as PropType<Job>,
    required: true
  },

  single: Boolean
})

const title = computed(() => t(`PJob.items.${props.job.key}.title`))
const description = computed(() => t(`PJob.items.${props.job.key}.description`))
const contract = computed(() => '· ' + t(`PJob.contract.${props.job.contract}`))

const startedAt = computed(() => d(props.job.startedAt, 'short'))
const finishedAt = computed(() => {
  const isToday = new Date().getTime() - props.job.finishedAt.getTime() < 100_000
  return isToday ? t('PJob.today') : d(props.job.finishedAt, 'short')
})
const duration = computed(() => {
  const interval = intervalToDuration({ start: props.job.startedAt, end: addMonths(props.job.finishedAt, 1) })
  return t('PJob.years', interval.years!) + ' ' + t('PJob.months', interval.months!)
})
const time = computed(() => startedAt.value + ' - ' + finishedAt.value + ' · ' + duration.value)
</script>

<style lang="scss">
$diagonal: sqrt(3);

.job {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &-header {
    display: grid;
    grid: "a b" "c c";
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
        content: "";
        position: absolute;
        top: calc(50% - 6px);
        left: div((12px * $diagonal) + 8px, 2);
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