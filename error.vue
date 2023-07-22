<template>
  <main class="error">
    <PCard class="error-content">
      <template #header>
        <h1 v-text="$t(`pages.error.${errorStatus}.title`)" />
      </template>
      <p v-text="$t(`pages.error.${errorStatus}.text`)" />
      <PButton class="error-cta" @click="handleError">
        {{ $t('pages.error.cta') }}
      </PButton>
    </PCard>
  </main>
</template>

<script setup lang="ts">
import { type NuxtError } from 'nuxt/app'
import { useI18n } from 'vue-i18n'

const localePath = useLocalePath()

interface Props {
  error: NuxtError
}

const props = defineProps<Props>()

const { t } = useI18n()

const errorStatus = computed(() => {
  const is4xxError = /4\d{2}/.test(props.error.statusCode.toString())
  return is4xxError ? '4xx' : '5xx'
})

useHead({
  title: t(`pages.error.${errorStatus.value}.title`),
})

const handleError = () => clearError({ redirect: localePath('index') })
</script>

<style lang="scss">
.error {
  display: grid;
  place-items: center;
  height: 100vh;
  padding: 32px;
  background: url('/images/bee.svg') center center;

  &-content {
    background-color: transparent;
    backdrop-filter: blur(5px);
  }

  &-cta {
    margin: 16px auto 0;

    @media #{$medium-and-up} {
      margin: 24px auto 0;
    }
  }
}
</style>
