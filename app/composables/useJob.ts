import { useI18n } from 'vue-i18n'

export default (job: MaybeRefOrGetter<Job>) => {
  // Fix Cloudflare Worker (https://stackoverflow.com/questions/58491003/how-to-get-the-current-date-in-a-cloudflares-worker)
  const currentDate = new Date()
  const finishedAtValue = computed(() => toValue(job).finishedAt ?? currentDate)

  const { d, t } = useI18n()
  const title = computed(() => t(`PJob.items.${toValue(job).key}.title`))
  const description = computed(() => t(`PJob.items.${toValue(job).key}.description`))
  const contract = computed(() => `. ${t(`PJob.contract.${toValue(job).contract}`)}`)
  const startedAt = computed(() => d(toValue(job).startedAt, 'short'))
  const finishedAt = computed(() => {
    const isToday = finishedAtValue.value === currentDate
    return isToday ? t('PJob.today') : d(finishedAtValue.value, 'short')
  })
  const { duration } = useDateFormatDuration(() => toValue(job).startedAt, finishedAtValue)
  const time = computed(() => `${startedAt.value} - ${finishedAt.value} . ${duration.value}`)

  return {
    title,
    description,
    contract,
    time,
  }
}
