<template>
  <PSection id="environments">
    <div class="medium-container row">
      <PH2 class="xs12">
        {{ $t('PEnvironments.title') }}
      </PH2>
      <figure
        v-for="(environment, index) in environments"
        :key="index"
        tabindex="0"
        class="xs6 s4 m2 tool scroll-animation-fade"
      >
        <PIcon class="tool-icon" :type="environment.icon.type" :name="environment.icon.name" />
        <figcaption class="tool-text" v-text="environment.title" />
      </figure>
    </div>
  </PSection>
</template>

<style lang="scss">
.tool {
  --scroll-animation-y: 64px;

  position: relative;
  display: flex;
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
    margin-inline: -16px;
    color: var(--c-primary);
    text-align: center;
    opacity: 0;
    transform: translateY(-100%);
    transition:
      transform var(--transition),
      opacity var(--transition);

    .tool:hover &,
    .tool:focus & {
      opacity: 1;
      transform: translateY(20%);
    }
  }
}
</style>
