import { useI18n } from 'vue-i18n'

export default (job: MaybeRefOrGetter<Job>) => {
  const currentDate = new Date()
  const finishedAtValue = computed(() => toValue(job).finishedAt ?? currentDate)

  const { d, t } = useI18n()
  const title = computed(() => t(`useJob.items.${toValue(job).key}.title`))
  const description = computed(() => t(`useJob.items.${toValue(job).key}.description`))
  const contract = computed(() => t(`useJob.contract.${toValue(job).contract}`))
  const startedAt = computed(() => d(toValue(job).startedAt, 'short'))
  const finishedAt = computed(() => {
    const isToday = finishedAtValue.value === currentDate
    return isToday ? t('useJob.today') : d(finishedAtValue.value, 'short')
  })
  const { duration } = useDateFormatDuration(() => toValue(job).startedAt, finishedAtValue)
  const time = computed(() => `${startedAt.value} - ${finishedAt.value} · ${duration.value}`)

  return {
    title,
    description,
    contract,
    time,
  }
}
