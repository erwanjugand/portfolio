<template>
  <PSection id="experiences">
    <div class="container">
      <PHeading>
        {{ $t('PExperiences.title') }}
      </PHeading>
      <ol class="experiences">
        <PExperience v-for="experience of experiences" :key="experience.enterprise" :experience />
      </ol>
    </div>
  </PSection>
</template>

<style lang="scss">
.experiences {
  --timeline-x: 12px;

  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  max-width: 720px;
  padding-inline-start: var(--spacing-6);
  margin-inline: auto;
  background-image: linear-gradient(var(--c-line-2) 88%, transparent);
  background-repeat: no-repeat;
  background-position: calc(var(--timeline-x) - 0.5px) var(--spacing-2);
  background-size: 1px calc(100% - var(--spacing-2));
}
</style>
