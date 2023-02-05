/* eslint-disable import/no-duplicates */
import { intervalToDuration, formatDuration, addMonths } from 'date-fns'
import { fr, enGB } from 'date-fns/locale'
import { Ref } from 'vue'

export interface Locales {
  [key: string]: Locale
}

const locales: Locales = {
  fr,
  en: enGB
}

export default () => {
  const { currentLocale } = useLocale()
  const locale = locales[currentLocale.value.code]

  const formatDurationDate = (startedAt: Date, finishedAt: Date): Ref<string> => {
    const interval = intervalToDuration({ start: startedAt, end: addMonths(finishedAt, 1) })
    return ref(formatDuration(interval, { format: ['years', 'months'], locale }))
  }

  return {
    formatDurationDate
  }
}
