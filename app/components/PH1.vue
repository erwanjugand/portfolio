<template>
  <h1 class="h1">
    <slot />
  </h1>
</template>

<style lang="scss">
.h1 {
  align-self: center;
  margin-block: 64px;
  transition:
    margin var(--transition),
    font-size var(--transition);
  color: var(--c-primary);
  font-size: 2.5em;
  font-weight: var(--font-weight-bold);
  text-align: center;

  @media #{variables.$large-and-up} {
    margin-block: 32px 64px;
    font-size: 3em;
  }
}
</style>
