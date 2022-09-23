<template>
  <PSection>
    <div class="container row">
      <PH2 class="xs12">
        {{ $t('PExperiences.title') }}
      </PH2>
      <ul class="experiences-content xs12">
        <PExperience
          v-for="(experience, index) of experiences"
          :key="index"
          :experience="experience"
        />
      </ul>
    </div>
  </PSection>
</template>

<script setup lang="ts">
  import { useStore } from '~/store';
  const { experiences } = useStore()
</script>

<style lang="scss">
  $diagonal: sqrt(3);

  .experiences-content {
    display: flex;
    position: relative;
    flex-direction: column;
    width: min(90vw, 576px);
    gap: 32px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: calc(div(24px * $diagonal, 2) - div(3px, 2));
      width: 3px;
      height: 100%;
      background-image: linear-gradient(180deg, var(--c-primary) 90%, var(--c-background-bg));
    }
  }
</style>
