<template>
  <div>
    <PHeader />
    <slot />
    <PFooter />
  </div>
</template>

<script setup>
useHead({
  title: '',
  titleTemplate: title => 'Erwan Jugand' + (title && ` - ${title}`)
})
</script>
