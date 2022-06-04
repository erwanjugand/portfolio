<template>
  <section class="skills">
    <h2 v-text="$t('home.skills.title')" />
    <div class="skills-container">
      <ul class="skills-wrapper">
        <PSkill
          v-for="skill of $state.skills"
          :key="skill.id"
          :skill="skill"
        />
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
@use 'sass:math' as *;

$hexagon-width: div(round(div($hexagon-height * 100, sqrt(3))), 100);
$hexagon-space-to-remove: ceil(div($bw-out, sin(60deg)));

.skills {
  background-color: var(--c-background-bg-alt);
}

.skills-container {
  display: flex;
  justify-content: center;
  width: 100%;
  background: url('/images/bee.svg') center top;
  overflow: hidden;

  @media #{$small-and-down} {
    background-position-x: calc(50% - #{div($hexagon-width, 4) + div($hexagon-space-to-remove, 2)});
  }

  @media #{$medium-only} {
    background-position-x: calc(50% - #{$hexagon-width + div($hexagon-space-to-remove, 2)});
  }

  @media #{$large-only} {
    background-position-x: calc(50% + #{div($hexagon-width, 2) - div($hexagon-space-to-remove, 2)});
  }

  @media #{$extra-large} {
    background-position-x: calc(50% - #{$hexagon-width + div($hexagon-space-to-remove, 2)});
  }
}

.skills-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: div($hexagon-height, 2) + div($bw-out, 2);

  > * {
    margin: 0 #{$hexagon-width * 1.5 - div($hexagon-space-to-remove, 2)} #{div(-$hexagon-height, 2) - div($bw-out, 2)} #{div($hexagon-width, 2) - div($hexagon-space-to-remove, 2)};
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
