<script setup lang="ts">
defineProps<{
  level: Skill['level']
}>()
</script>

<template>
  <span class="skill-level" role="img" :aria-label="$t('PSkillLevel.label', { current: level, max: MAX_LEVEL })">
    <SvgoHexagon
      v-for="n of MAX_LEVEL"
      :key="n"
      class="skill-level-pip"
      :class="{ 'skill-level-pip-on': n <= level }"
    />
  </span>
</template>

<style lang="scss">
.skill-level {
  display: flex;
  gap: 4px;

  &-pip {
    width: var(--skill-level-size, var(--spacing-2));
    fill: none;
    stroke: var(--skill-level-off, var(--c-ink-2));

    &-on {
      fill: var(--skill-level-on, var(--c-accent-ink));
      stroke: var(--skill-level-on, var(--c-accent-ink));
    }
  }
}
</style>
