<template>
  <div class="layout">
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

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>
