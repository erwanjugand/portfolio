<template>
  <div class="job">
    <div class="job-header">
      <h4 :class="['job-title', {'job-title-anchor': !single}]" v-text="title" />
      <p class="job-contract" v-text="contract" />
      <p class="job-time" v-text="time" />
    </div>
    <p class="job-description" v-text="description" />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { TranslateResult } from 'vue-i18n'
import { intervalToDuration, addMonths } from 'date-fns'
import { Job } from '~/models'

export default Vue.extend({
  props: {
    job: {
      type: Object
    } as PropOptions<Job>,

    single: Boolean
  },

  computed: {
    title (): TranslateResult {
      return this.$t(`jobs.items.${this.job.key}.title`)
    },

    description (): TranslateResult {
      return this.$t(`jobs.items.${this.job.key}.description`)
    },

    contract (): TranslateResult {
      return '· ' + this.$t(`jobs.contract.${this.job.contract}`)
    },

    duration (): string {
      const interval = intervalToDuration({ start: this.job.startedAt, end: addMonths(this.job.finishedAt, 1) })
      return this.$tc('jobs.years', interval.years) + ' ' + this.$tc('jobs.months', interval.months)
    },

    startedAt (): string {
      return this.$d(this.job.startedAt, 'short')
    },

    finishedAt (): TranslateResult | string {
      const isToday = new Date().getTime() - this.job.finishedAt.getTime() < 100_000
      return isToday ? this.$t('jobs.today') : this.$d(this.job.finishedAt, 'short')
    },

    time (): string {
      return this.startedAt + ' - ' + this.finishedAt + ' · ' + this.duration
    }
  }
})
</script>

<style lang="scss">
@use 'sass:math' as *;

$diagonal: sqrt(3);

.job {
  display: flex;
  flex-direction: column;
  gap: 12px;

  &-header {
    display: grid;
    grid: 'a b' 'c c';
    grid-template-columns: auto 1fr;
    column-gap: .3em;
    align-items: center;
  }

  &-title {
    grid-area: a;
    padding-left: 48px;
    font-weight: $fw-bold;
    color: var(--c-primary);

    &-anchor {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: calc(50% - 6px);
        left: div((12px * $diagonal) + 8px , 2);
        width: 12px;
        height: 12px;
        background-color: var(--c-background-bg);
        border: $bw-out solid transparent;
        box-shadow: 0 0 0 $bw-out var(--c-primary);
        transform: rotate(45deg);
        box-sizing: border-box;
      }
    }
  }

  &-contract {
    grid-area: b;
    font-weight: $fw-light;
    color: var(--c-primary);
  }

  &-time {
    grid-area: c;
    padding-left: 48px;
    font-size: .875rem;
    color: var(--c-text-secondary-3);
  }

  &-description {
    padding-left: 48px;
    white-space: pre-line;
  }
}
</style>
