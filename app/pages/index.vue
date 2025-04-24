<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
  meta: [{ name: 'description', content: t('pages.home.description') }],
})
</script>

<template>
  <main>
    <PIntroduction />
    <PAbout />
    <PSkills />
    <PExperiences />
    <PMoreInformation />
    <PEnvironments />
  </main>
</template>
