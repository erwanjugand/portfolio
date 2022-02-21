<template>
  <section>
    <h2 v-text="$t('home.experiences.title')" />
    <ul class="experiences-container">
      <PExperience
        v-for="(experience, index) of $state.experiences"
        :key="experience.id"
        :experience="experience"
        :index="index"
      />
    </ul>
  </section>
</template>

<style lang="scss">
@use 'sass:math' as *;

$diagonal: sqrt(3);

.experiences-container {
  position: relative;
  max-width: min(100vw, 576px);
  margin: 12px 16px 0;
  transition: var(--transition);

  @media #{$medium-and-up} {
    margin-right: 144+16px;
    transform: translateX(144px);
  }

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
