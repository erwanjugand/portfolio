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
  ]
})
</script>
