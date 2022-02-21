<template>
  <section class="container tools">
    <h2 v-text="$t('home.tools.title')" />
    <div class="row">
      <figure v-for="tool in $state.tools" :key="tool.id" tabindex="0" class="xs6 s4 m2 l1 tool">
        <PIcon class="tool-icon" type="custom" :name="tool.name" />
        <figcaption class="tool-text" v-text="tool.title" />
      </figure>
    </div>
  </section>
</template>

<style lang="scss">
.tools .row {
  width: 100%;
  row-gap: 32px;
}

.tool {
  position: relative;
  display: flex;
  justify-content: center;

  &-icon {
    width: min(100%, 80px);
    height: 80px;
    fill: var(--c-primary);
  }

  &-text {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    text-align: center;
    color: var(--c-primary);
    opacity: 0;
    transform: translateY(-100%);
    transition: transform var(--transition), opacity var(--transition);

    .tools-item:hover &, .tools-item:focus & {
      opacity: 1;
      transform: translateY(20%);
    }
  }
}
</style>
