import { describe, expect, test } from 'vitest'
import { mockUseI18n } from '../vitest/fixtures/useI18n'

type Test = {
  startedAt: string
  finishedAt: string
  locale: 'fr' | 'en'
  expected: string
}

const formatDurationDateTests: Test[] = [
  {
    startedAt: '2021-01-10',
    finishedAt: '2021-02-01',
    locale: 'fr',
    expected: '1 mois',
  },
  {
    startedAt: '2021-01-10',
    finishedAt: '2021-02-01',
    locale: 'en',
    expected: '1 month',
  },
  {
    startedAt: '2020-01-20',
    finishedAt: '2022-02-30',
    locale: 'fr',
    expected: '2 ans 2 mois',
  },
  {
    startedAt: '2020-01-20',
    finishedAt: '2022-02-30',
    locale: 'en',
    expected: '2 years 2 months',
  },
]

describe('useDateFns', () => {
  describe('formatDurationDate', () => {
    test.each(formatDurationDateTests)(
      'should return $expected, given the start date $startedAt and the end date $finishedAt with $locale locale',
      ({ startedAt, finishedAt, locale, expected }) => {
        mockUseI18n(locale)
        const { formatDurationDate } = useDateFns()
        const formattedDate = formatDurationDate(new Date(startedAt), new Date(finishedAt))
        expect(formattedDate.value).toBe(expected)
      },
    )
  })
})
