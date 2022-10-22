<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useColorMode()

useHead({
  title: '',
  titleTemplate: title => 'Erwan Jugand' + (title && ` - ${title}`),
  meta: [
    { name: 'viewport', content: 'width=320, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
  ]
})
</script>
