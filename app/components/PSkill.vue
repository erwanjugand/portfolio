<script setup lang="ts">
import type { Skill } from '~/store/state/skills'

defineProps<{
  skill: Skill
}>()

const MAX_LEVEL = 3
</script>

<template>
  <PHexagon tag="li" tabindex="0" class="skill">
    <span class="skill-name" v-text="skill.name" />
    <div class="skill-score" role="img" :aria-label="$t('PSkills.level', { current: skill.level, max: MAX_LEVEL })">
      <PIcon v-for="n of MAX_LEVEL" :key="n" :type="n > skill.level ? 'light' : 'solid'" name="star" />
    </div>
  </PHexagon>
</template>

<style lang="scss">
@mixin show-content {
  transform: translateY(-2.5rem);
  outline: none;
  opacity: 1;
}

.skill {
  font-size: 1.5em;
  cursor: pointer;

  &-name {
    transform: translateY(0);
    transition: transform var(--transition);

    @media #{variables.$touchscreen} {
      transform: translateY(-2.5rem);
    }

    .skill:hover &,
    .skill:focus & {
      transform: translateY(-2.5rem);
    }
  }

  &-score {
    display: flex;
    position: absolute;
    top: 60%;
    flex-wrap: wrap;
    justify-content: center;
    transform: translateY(0);
    transition: var(--transition);
    opacity: 0;

    @media #{variables.$touchscreen} {
      @include show-content;
    }

    .skill:hover &,
    .skill:focus & {
      @include show-content;
    }

    .icon {
      width: 50%;
      height: 1.75rem;
      margin-top: 0.75rem;
    }
  }
}
</style>
