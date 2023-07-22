import { describe, expect, test, vi } from 'vitest'
import * as vueuse from '@vueuse/core'
import { ReducedMotionType } from '@vueuse/core'

describe('useScrollBehavior', () => {
  const values: Array<{ prefersReducedMotion: ReducedMotionType; expected: string }> = [
    { prefersReducedMotion: 'no-preference', expected: 'smooth' },
    { prefersReducedMotion: 'reduce', expected: 'auto' },
  ]

  test.each(values)(
    'should return $expected, prefers-reduced-motion value is $prefersReducedMotion',
    ({ expected, prefersReducedMotion }) => {
      vi.spyOn(vueuse, 'usePreferredReducedMotion').mockImplementation(() => {
        return computed(() => prefersReducedMotion)
      })

      const behavior = useScrollBehavior()
      expect(behavior.value).toBe(expected)
    },
  )
})
