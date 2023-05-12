import { intervalToDuration, formatDuration, addMonths } from 'date-fns'
import fr from 'date-fns/locale/fr/index'
import enGB from 'date-fns/locale/en-GB/index'
import { Ref } from 'vue'

export interface DateFnsLocales {
  [key: string]: Locale
}

const locales: DateFnsLocales = {
  fr,
  en: enGB,
}

export default () => {
  const { currentLocale } = useLocale()
  const dateFnsLocale = locales[currentLocale.value.code]

  const formatDurationDate = (startedAt: Date, finishedAt: Date): Ref<string> => {
    const interval = intervalToDuration({ start: startedAt, end: addMonths(finishedAt, 1) })
    return ref(formatDuration(interval, { format: ['years', 'months'], locale: dateFnsLocale }))
  }

  return {
    formatDurationDate,
  }
}
