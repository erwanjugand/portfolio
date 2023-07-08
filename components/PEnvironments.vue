<template>
  <PSection>
    <div class="medium-container row">
      <PH2 class="xs12">
        {{ $t('PEnvironments.title') }}
      </PH2>
      <figure v-for="(environment, index) in environments" :key="index" tabindex="0" class="xs6 s4 m2 tool">
        <PIcon class="tool-icon" :style="environment.icon.style" :name="environment.icon.name" />
        <figcaption class="tool-text" v-text="environment.title" />
      </figure>
    </div>
  </PSection>
</template>

<script setup lang="ts">
const { environments } = useStore()
</script>

<style lang="scss">
.tool {
  display: flex;
  position: relative;
  justify-content: center;
  cursor: pointer;

  &-icon {
    width: 100%;
    height: 80px;
    fill: var(--c-primary);
  }

  &-text {
    position: absolute;
    top: 100%;
    left: 0;
    width: calc(100% + 32px);
    margin: 0 -16px;
    transform: translateY(-100%);
    transition:
      transform var(--transition),
      opacity var(--transition);
    opacity: 0;
    color: var(--c-primary);
    text-align: center;

    .tool:hover &,
    .tool:focus & {
      transform: translateY(20%);
      opacity: 1;
    }
  }
}
</style>
