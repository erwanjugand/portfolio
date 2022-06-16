<template>
  <div>
    <PHeader />
    <slot />
    <PFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '',
  titleTemplate: title => 'Erwan Jugand' + (title && ` - ${title}`)
})
</script>
