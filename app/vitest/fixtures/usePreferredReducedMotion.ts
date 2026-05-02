import * as vueuse from '@vueuse/core'
import type { ReducedMotionType } from '@vueuse/core'
import { vi } from 'vitest'
import { computed } from 'vue'

const mockUsePreferredReducedMotion = (value: ReducedMotionType) =>
  vi.spyOn(vueuse, 'usePreferredReducedMotion').mockImplementation(() => computed(() => value))

export { mockUsePreferredReducedMotion }
