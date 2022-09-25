<template>
  <h1 class="h1">
    <slot />
  </h1>
</template>

<style lang="scss">
.h1 {
  color: var(--c-primary);
  font-size: 2.5em;
  font-weight: $fw-bold;
  text-align: center;
}
</style>
