<template>
  <main>
    <PIntroduction />
    <PAbout />
    <PSkills />
    <PExperiences />
    <PMoreInformations />
    <PEnvironments />
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

useHead({
  title: t('pages.home.title'),
  meta: [
    { name: 'description', content: () => t('pages.home.description') }
  ]
})
</script>
