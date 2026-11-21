<script setup lang="ts">
import type { NuxtError } from 'nuxt/app'
import { useI18n } from 'vue-i18n'

const { error } = defineProps<{
  error: NuxtError
}>()

const localePath = useLocalePath()

const { t } = useI18n()

const errorStatus = computed(() => {
  const is4xxError = /4\d{2}/.test((error.status ?? '').toString())
  return is4xxError ? '4xx' : '5xx'
})

const i18nHead = useLocaleHead()
useHead(() => ({
  title: `Erwan Jugand - ${t(`pages.error.${errorStatus.value}.title`)}`,
  htmlAttrs: i18nHead.value.htmlAttrs,
}))

const handleError = () => clearError({ redirect: localePath('index') })
</script>

<template>
  <main class="error dotted">
    <div class="error-content">
      <h1 class="error-title" v-text="$t(`pages.error.${errorStatus}.title`)" />
      <p class="error-text" v-text="$t(`pages.error.${errorStatus}.text`)" />
      <PButton @click="handleError">
        {{ $t('pages.error.cta') }}
      </PButton>
    </div>
  </main>
</template>

<style lang="scss">
.error {
  display: grid;
  place-items: center;
  min-height: 100svh;
  padding: var(--spacing-4);

  &-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    align-items: center;
    max-width: 560px;
    text-align: center;
  }

  &-title {
    font-size: 2.25em;
    font-weight: var(--font-weight-bold);

    @media #{breakpoints.$medium-and-up} {
      font-size: 3em;
    }
  }

  &-text {
    color: var(--c-ink-2);
  }
}
</style>
