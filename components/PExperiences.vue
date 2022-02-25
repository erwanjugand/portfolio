<template>
  <section>
    <h2 v-text="$t('home.experiences.title')" />
    <ul class="experiences-container">
      <PExperience
        v-for="experience of $state.experiences"
        :key="experience.id"
        :experience="experience"
      />
    </ul>
  </section>
</template>

<style lang="scss">
@use 'sass:math' as *;

$diagonal: sqrt(3);

.experiences-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: min(90vw, 576px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: calc(div(24px * $diagonal, 2) - div($bw-out, 2));
    width: $bw-out;
    height: 100%;
    background-image: linear-gradient(180deg, var(--c-primary) 90%, var(--c-background-bg));
  }
}
</style>
