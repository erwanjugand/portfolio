<template>
  <div class="cv-job">
    <div class="cv-job-header">
      <h4 class="cv-job-title" v-text="title" />
      <p class="cv-job-contract" v-text="contract" />
      <p class="cv-job-time" v-text="time" />
    </div>
    <p class="cv-job-description" v-text="description" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { type Job } from '~/store/store'

interface Props {
  job: Job
}

const props = defineProps<Props>()

// Fix Cloudflare Worker (https://stackoverflow.com/questions/58491003/how-to-get-the-current-date-in-a-cloudflares-worker)
const currentDate = new Date()
const finishedAtValue = computed(() => props.job.finishedAt ?? currentDate)

const { d, t } = useI18n()
const title = computed(() => t(`PJob.items.${props.job.key}.title`))
const description = computed(() => t(`PJob.items.${props.job.key}.description`))
const contract = computed(() => `. ${t(`PJob.contract.${props.job.contract}`)}`)
const startedAt = computed(() => d(props.job.startedAt, 'short'))
const finishedAt = computed(() => {
  const isToday = finishedAtValue.value === currentDate
  return isToday ? t('PJob.today') : d(finishedAtValue.value, 'short')
})
const { duration } = useDateFormatDuration(() => props.job.startedAt, finishedAtValue)
const time = computed(() => `${startedAt.value} - ${finishedAt.value} . ${duration.value}`)
</script>

<style lang="scss">
.cv-job {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 8px;

  &-header {
    display: grid;
    grid: 'a b' 'c c';
    grid-template-columns: auto 1fr;
    font-size: 0.875em;
    gap: 0 0.3em;
  }

  &-title {
    grid-area: a;
    font-weight: $fw-bold;
  }

  &-contract {
    grid-area: b;
    color: $grey-75;
  }

  &-time {
    grid-area: c;
    color: $grey-50;
  }

  &-description {
    color: $grey-75;
    font-size: 0.8125em;
  }
}
</style>
