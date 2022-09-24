<template>
  <PSection banner>
    <div class="container">
      <PH2 class="xs12">
        {{ $t('PSkills.title') }}
      </PH2>
    </div>
    <div class="skills-container">
      <ul class="skills-content">
        <PSkill
          v-for="skill of skills"
          :key="skill.name"
          :skill="skill"
        />
      </ul>
    </div>
  </PSection>
</template>

<script setup lang="ts">
import { useStore } from '~/store';
const { skills } = useStore()
</script>

<style lang="scss">
$hexagon-height: 200px;
$hexagon-border: 3px;
$hexagon-width: div(round(div($hexagon-height * 100, sqrt(3))), 100);
$hexagon-space-to-remove: ceil(div($hexagon-border, sin(60deg)));

.skills-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 64px;
  overflow: hidden;
  background: url("/images/bee.svg") center top;
  background-position-x: calc(50% - #{div($hexagon-width, 4) + div($hexagon-space-to-remove, 2)});

  @media #{$medium-and-up} {
    background-position-x: calc(50% - #{$hexagon-width + div($hexagon-space-to-remove, 2)});
  }

  @media #{$large-and-up} {
    background-position-x: calc(50% + #{div($hexagon-width, 2) - div($hexagon-space-to-remove, 2)});
  }

  @media #{$extra-large} {
    background-position-x: calc(50% - #{$hexagon-width + div($hexagon-space-to-remove, 2)});
  }
}

.skills-content {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: div($hexagon-height, 2) + div($hexagon-border, 2);

  > * {
    $margin-top: 0;
    $margin-right: $hexagon-width * 1.5 - div($hexagon-space-to-remove, 2);
    $margin-bottom: div(-$hexagon-height, 2) - div($hexagon-border, 2);
    $margin-left: div($hexagon-width, 2) - div($hexagon-space-to-remove, 2);

    margin: $margin-top $margin-right $margin-bottom $margin-left;
  }

  @media #{$small-and-down} {
    width: $hexagon-width * 3.5 - $hexagon-space-to-remove;

    > *:nth-child(even) {
      margin-right: div($hexagon-width, 2) - div($hexagon-space-to-remove, 2);
      margin-left: $hexagon-width * 2 - $hexagon-space-to-remove;
    }
  }

  @media #{$medium-only} {
    width: $hexagon-width * 5 - $hexagon-space-to-remove;

    > *:nth-child(3n + 2) {
      margin-right: div($hexagon-width, 2) - div($hexagon-space-to-remove, 2);
    }

    > *:nth-child(3n + 3) {
      margin-left: $hexagon-width * 2 - $hexagon-space-to-remove;
    }
  }

  @media #{$large-only} {
    width: $hexagon-width * 8 - $hexagon-space-to-remove * 3;

    > *:nth-child(5n + 3) {
      margin-right: div($hexagon-width, 2) - div($hexagon-space-to-remove, 2);
    }

    > *:nth-child(5n + 4) {
      margin-left: $hexagon-width * 2 - $hexagon-space-to-remove;
    }
  }

  @media #{$extra-large} {
    width: $hexagon-width * 11 - $hexagon-space-to-remove * 3;

    > *:nth-child(7n + 4) {
      margin-right: div($hexagon-width, 2) - div($hexagon-space-to-remove, 2);
    }

    > *:nth-child(7n + 5) {
      margin-left: $hexagon-width * 2 - $hexagon-space-to-remove;
    }
  }
}
</style>
