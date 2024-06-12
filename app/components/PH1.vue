<template>
  <h1 class="h1">
    <slot />
  </h1>
</template>

<style lang="scss">
.h1 {
  align-self: center;
  margin: 64px 0;
  transition:
    margin var(--transition),
    font-size var(--transition);
  color: var(--c-primary);
  font-size: 2.5em;
  font-weight: $fw-bold;
  text-align: center;

  @media #{$large-and-up} {
    margin: 32px 0 64px;
    font-size: 3em;
  }
}
</style>
