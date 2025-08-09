<template>
  <h1 class="h1">
    <slot />
  </h1>
</template>

<style lang="scss">
.h1 {
  align-self: center;
  margin-block: 64px;
  font-size: 2.5em;
  font-weight: var(--font-weight-bold);
  color: var(--c-primary);
  text-align: center;
  transition:
    margin var(--transition),
    font-size var(--transition);

  @media #{variables.$large-and-up} {
    margin-block: 32px 64px;
    font-size: 3em;
  }
}
</style>
