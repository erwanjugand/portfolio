import { describe, expect, test } from 'vitest'
import { mockUseI18n } from '~/vitest/fixtures/useI18n'

type Test = {
  startedAt: string
  finishedAt: string
  yearExpected: number
  monthExpected: number
}

const formatDurationDateTests: Test[] = [
  {
    startedAt: '2021-01-10',
    finishedAt: '2021-02-01',
    yearExpected: 0,
    monthExpected: 2,
  },
  {
    startedAt: '2021-04-10',
    finishedAt: '2021-10-01',
    yearExpected: 0,
    monthExpected: 7,
  },
  {
    startedAt: '2020-01-20',
    finishedAt: '2022-02-28',
    yearExpected: 2,
    monthExpected: 2,
  },
  {
    startedAt: '2020-10-20',
    finishedAt: '2022-09-30',
    yearExpected: 2,
    monthExpected: 0,
  },
]

describe('useDateFormatDuration', () => {
  describe('formatDurationDate', () => {
    test.each(formatDurationDateTests)(
      'should return $expected, given the start date $startedAt and the end date $finishedAt with $locale locale',
      ({ startedAt, finishedAt, yearExpected, monthExpected }) => {
        mockUseI18n('en')
        const { years, months } = useDateFormatDuration(new Date(startedAt), new Date(finishedAt))
        expect(years.value).toBe(yearExpected)
        expect(months.value).toBe(monthExpected)
      },
    )
  })
})
