<template>
  <PSection id="environments">
    <div class="container">
      <PHeading>
        {{ $t('PEnvironments.title') }}
      </PHeading>
      <ul class="environments">
        <li v-for="environment of environments" :key="environment.title" class="environment reveal">
          <span class="environment-hexagon">
            <SvgoHexagonCell class="environment-outer" />
            <SvgoHexagonCell class="environment-inner" />
            <PIcon class="environment-icon" :type="environment.icon.type" :name="environment.icon.name" />
          </span>
          <span class="environment-name" v-text="environment.title" />
        </li>
      </ul>
    </div>
  </PSection>
</template>

<style lang="scss">
.environments {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-4) var(--spacing-2);

  @media #{breakpoints.$medium-and-up} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media #{breakpoints.$large-and-up} {
    grid-template-columns: repeat(6, 1fr);
  }
}

.environment {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  align-items: center;
  text-align: center;

  &-hexagon {
    display: grid;
    place-items: center;
    width: 104px;
  }

  &-outer,
  &-inner,
  &-icon {
    grid-area: 1 / 1;
  }

  &-outer {
    width: 100%;
    fill: color-mix(in srgb, var(--c-accent) 8%, var(--c-surface));
    stroke: var(--c-line-2);
    transition:
      fill var(--transition),
      stroke var(--transition),
      stroke-width var(--transition);
  }

  &-inner {
    width: calc(100% - var(--spacing-2));
    fill: none;
    stroke: var(--c-line);
  }

  &-icon {
    height: 2.5em;
    fill: var(--c-accent-ink);
  }

  &-name {
    font-weight: var(--font-weight-semibold);
  }

  &:hover &-outer {
    fill: color-mix(in srgb, var(--c-accent-ink) 12%, var(--c-surface));
    stroke: var(--c-accent-ink);
    stroke-width: 1.5px;
  }
}
</style>
