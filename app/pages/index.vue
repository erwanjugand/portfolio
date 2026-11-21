<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useSeoMeta({
  description: t('pages.home.description'),
})
</script>

<template>
  <div>
    <PIntroduction />
    <PAbout />
    <PSkills />
    <PExperiences />
    <PMoreInformation />
    <PEnvironments />
  </div>
</template>
