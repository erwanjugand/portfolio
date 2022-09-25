<template>
  <main>
    <NuxtLink to="/">
      index
    </NuxtLink>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup () {
    const { t } = useI18n()

    useHead({
      title: t('pages.changelog.title')
    })
  }
})
</script>
