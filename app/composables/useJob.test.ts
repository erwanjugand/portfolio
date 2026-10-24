import { describe, expect, test } from 'vitest'

import { mockUseI18n } from '~/vitest/fixtures/useI18n'

describe('useJob', () => {
  test('should return the job texts', () => {
    mockUseI18n('en')
    const { title, description, contract } = useJob({ key: 'job', contract: 'cdi', startedAt: new Date(2020, 0) })
    expect(title.value).toBe('PJob.items.job.title')
    expect(description.value).toBe('PJob.items.job.description')
    expect(contract.value).toBe('. PJob.contract.cdi')
  })

  test('time should end today, given a job without finishedAt', () => {
    mockUseI18n('en')
    const startedAt = new Date(2020, 0)
    const { time } = useJob({ key: 'job', contract: 'cdi', startedAt })
    expect(time.value).toContain(`${startedAt.toISOString()} - PJob.today . `)
  })

  test('time should end at finishedAt, given a finished job', () => {
    mockUseI18n('en')
    const startedAt = new Date(2020, 0)
    const finishedAt = new Date(2021, 2)
    const { time } = useJob({ key: 'job', contract: 'cdi', startedAt, finishedAt })
    expect(time.value).toBe(
      `${startedAt.toISOString()} - ${finishedAt.toISOString()} . useDateFormatDuration.years useDateFormatDuration.months`,
    )
  })
})
