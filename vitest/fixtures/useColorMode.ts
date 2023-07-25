import { vi } from 'vitest'
import { reactive } from 'vue'
import * as nuxtColor from '~/node_modules/@nuxtjs/color-mode/dist/runtime/composables'

const mockUseColorMode = (value: string) =>
  vi.spyOn(nuxtColor, 'useColorMode').mockImplementation(() => {
    return reactive({
      preference: 'system',
      value,
      unknown: false,
      forced: false,
    })
  })

export { mockUseColorMode }
