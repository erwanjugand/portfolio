import { intervalToDuration, formatDuration, addMonths } from 'date-fns'
import fr from 'date-fns/locale/fr/index'
import enGB from 'date-fns/locale/en-GB/index'

export interface DateFnsLocales {
  [key: string]: Locale
}

const locales: DateFnsLocales = {
  fr,
  en: enGB,
}

export default (startDate: MaybeRefOrGetter<Date>, endDate: MaybeRefOrGetter<Date>) => {
  const { currentLocale } = useLocale()
  const dateFnsLocale = locales[currentLocale.value.code]

  return computed(() => {
    const interval = intervalToDuration({ start: toValue(startDate), end: addMonths(toValue(endDate), 1) })
    return formatDuration(interval, { format: ['years', 'months'], locale: dateFnsLocale })
  })
}
