<script setup lang="ts">
const i18nHead = useLocaleHead()
useHead(() => ({
  titleTemplate: (title) => 'Erwan Jugand' + (title ? ` - ${title}` : ''),
  htmlAttrs: i18nHead.value.htmlAttrs,
  link: i18nHead.value.link,
  meta: i18nHead.value.meta,
}))
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@use 'sass:meta';
@include meta.load-css('@/assets/scss/style');
</style>
