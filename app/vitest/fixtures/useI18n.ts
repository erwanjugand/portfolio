import * as vueI18n from 'vue-i18n'
import { vi } from 'vitest'
import { computed } from 'vue'
import type { Locale } from 'vue-i18n'

const mockUseI18n = (locale: Locale) =>
  vi.spyOn(vueI18n, 'useI18n').mockImplementation(
    () =>
      ({
        locale: computed(() => locale),
        t: (key: string) => key,
        d: (date: Date) => date.toISOString(),
      }) as unknown as ReturnType<typeof vueI18n.useI18n>,
  )

export { mockUseI18n }
