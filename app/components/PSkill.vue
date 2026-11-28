<script setup lang="ts">
defineProps<{
  skill: Skill
}>()
</script>

<template>
  <li class="skill reveal">
    <SvgoHexagonCell class="skill-background" />
    <span class="skill-name" v-text="skill.name" />
    <PSkillLevel :level="skill.level" />
  </li>
</template>

<style lang="scss">
.skill {
  --skill-cell: color-mix(in srgb, var(--c-surface), var(--c-line));
  --skill-row: round(down, var(--skills-index) / var(--skills-columns), 1);

  position: relative;
  display: flex;
  flex-direction: column;
  grid-column: calc(2 * mod(var(--skills-index), var(--skills-columns)) + mod(var(--skill-row), 2) + 1) / span 2;
  gap: var(--spacing-1);
  align-items: center;
  justify-content: center;
  height: calc(var(--skills-size) * 1.155);
  margin: var(--skills-gap);
  clip-path: var(--hexagon);

  @media (prefers-contrast: more) {
    --skill-cell: var(--c-surface);
  }

  &-background {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    fill: var(--skill-cell);
    stroke: var(--c-line-2);
    transition:
      fill var(--transition),
      stroke var(--transition),
      stroke-width var(--transition);
  }

  &:hover &-background {
    fill: color-mix(in srgb, var(--c-accent-ink) 12%, var(--skill-cell));
    stroke: var(--c-accent-ink);
    stroke-width: 1.5px;
  }

  &-name {
    font-weight: var(--font-weight-semibold);
  }
}

@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .skill {
      animation-name: skill-zoom;
    }
  }
}

@keyframes skill-zoom {
  from {
    opacity: 0;
    scale: 0.7;
  }
}
</style>
