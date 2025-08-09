<template>
  <PSection id="experiences">
    <div class="container row">
      <PH2 class="xs12">
        {{ $t('PExperiences.title') }}
      </PH2>
      <ul class="experiences-wrapper xs12">
        <PExperience v-for="(experience, index) of experiences" :key="index" :experience />
      </ul>
    </div>
  </PSection>
</template>

<style lang="scss">
$diagonal: math.sqrt(3);

.experiences-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: min(90vw, 576px);

  &::before {
    position: absolute;
    top: 0;
    left: calc(math.div(24px * $diagonal, 2) - math.div(3px, 2));
    width: 3px;
    height: 100%;
    content: '';
    background-image: linear-gradient(
      180deg,
      var(--c-primary) 2px,
      var(--c-background-bg) 2px,
      var(--c-background-bg) 6px,
      var(--c-primary) 6px,
      var(--c-primary) 12px,
      var(--c-background-bg) 12px,
      var(--c-background-bg) 16px,
      var(--c-primary) 16px,
      var(--c-primary) 28px,
      var(--c-background-bg) 28px,
      var(--c-background-bg) 32px,
      var(--c-primary) 32px,
      var(--c-primary) 90%,
      var(--c-background-bg)
    );
  }
}
</style>
