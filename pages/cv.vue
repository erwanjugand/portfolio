<template>
  <div class="cv">
    <header class="cv-header">
      Header
    </header>
    <aside class="cv-aside">
      Aside
    </aside>
    <main class="cv-main">
      Main
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'pdf'
})
</script>

<style lang="scss">
.cv {
  display: grid;
  grid: "h" "a" "m" 1fr;
  height: 100%;

  @media #{$medium-and-up} {
    grid: "h h" "a m" 1fr / 240px 1fr;
  }

  &-header {
    grid-area: h;
    padding: 16px;
    background: red;
  }

  &-aside {
    grid-area: a;
    padding: 16px;
    background: blue;
  }

  &-main {
    grid-area: m;
    padding: 16px;
    background: green;
  }
}
</style>
