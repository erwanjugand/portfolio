import { useI18n } from 'vue-i18n'

export default (startDate: MaybeRefOrGetter<Date>, endDate: MaybeRefOrGetter<Date>) => {
  const { t } = useI18n()

  const gapYears = computed(() => toValue(endDate).getFullYear() - toValue(startDate).getFullYear())
  const gapMonths = computed(() => toValue(endDate).getMonth() - toValue(startDate).getMonth() + 1)
  const totalDiffMonths = computed(() => gapYears.value * 12 + gapMonths.value)
  const months = computed(() => totalDiffMonths.value % 12)
  const years = computed(() => Math.floor(totalDiffMonths.value / 12))

  const duration = computed(() => {
    return `${years.value ? t('useDateFormatDuration.years', years.value) : ''} ${
      months.value ? t('useDateFormatDuration.months', months.value) : ''
    }`
  })

  return {
    years,
    months,
    duration,
  }
}
