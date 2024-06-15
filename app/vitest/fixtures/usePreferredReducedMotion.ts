import { vi } from 'vitest'
import * as vueuse from '@vueuse/core'
import { computed } from 'vue'
import { type ReducedMotionType } from '@vueuse/core'

const mockUsePreferredReducedMotion = (value: ReducedMotionType) =>
  vi.spyOn(vueuse, 'usePreferredReducedMotion').mockImplementation(() => computed(() => value))

export { mockUsePreferredReducedMotion }
