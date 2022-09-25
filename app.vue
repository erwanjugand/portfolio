<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useColorMode()

useHead({
  title: '',
  titleTemplate: title => 'Erwan Jugand' + (title && ` - ${title}`)
})
</script>
