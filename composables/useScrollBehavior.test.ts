import { describe, expect, test } from 'vitest'
import { ReducedMotionType } from '@vueuse/core'
import { mockUsePreferredReducedMotion } from '~/vitest/fixtures/usePreferredReducedMotion'

type Test = {
  prefersReducedMotion: ReducedMotionType
  expected: string
}

const useScrollBehaviorTests: Test[] = [
  { prefersReducedMotion: 'no-preference', expected: 'smooth' },
  { prefersReducedMotion: 'reduce', expected: 'auto' },
]

describe('useScrollBehavior', () => {
  test.each(useScrollBehaviorTests)(
    'should return $expected, prefers-reduced-motion value is $prefersReducedMotion',
    ({ expected, prefersReducedMotion }) => {
      mockUsePreferredReducedMotion(prefersReducedMotion)
      const behavior = useScrollBehavior()
      expect(behavior.value).toBe(expected)
    },
  )
})
