<template>
  <div class="layout">
    <PHeader />
    <slot />
    <PFooter />
  </div>
</template>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>
