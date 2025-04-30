<script setup lang="ts">
useColorMode()

const i18nHead = useLocaleHead()
useHead(() => ({
  titleTemplate: title => 'Erwan Jugand' + (title ? ` - ${title}` : ''),
  htmlAttrs: i18nHead.value.htmlAttrs,
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ...(i18nHead.value.link || []),
  ],
  meta: [
    { name: 'viewport', content: 'width=320, initial-scale=1, viewport-fit=cover' },
    ...(i18nHead.value.meta || []),
  ],
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
