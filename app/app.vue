<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useColorMode()

const i18nHead = useLocaleHead({ addSeoAttributes: true })
useHead(() => ({
  titleTemplate: title => 'Erwan Jugand' + (title ? ` - ${title}` : ''),
  htmlAttrs: i18nHead.value.htmlAttrs,
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ...(i18nHead.value.link || []),
  ],
  meta: [{ name: 'viewport', content: 'width=320, initial-scale=1' }, ...(i18nHead.value.meta || [])],
}))
</script>

<style lang="scss">
@import './assets/scss/style';
</style>
