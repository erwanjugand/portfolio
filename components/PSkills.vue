<template>
  <PSection banner class="row">
    <div class="container">
      <PH2 class="xs12">
        {{ $t('PSkills.title') }}
      </PH2>
    </div>
    <div class="skills-container">
      <ul class="skills-wrapper">
        <PSkill v-for="skill of skills" :key="skill.name" :skill="skill" />
      </ul>
    </div>
  </PSection>
</template>

<script setup lang="ts">
const { skills } = useStore()
</script>

<style lang="scss">
$hexagon-height: 200px;
$hexagon-border-out: 3px;
$hexagon-width: math.div(math.round(math.div($hexagon-height * 100, math.sqrt(3))), 100);
$hexagon-space-to-remove: math.ceil(math.div($hexagon-border-out, math.sin(60deg)));

.skills-container {
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  background: url('/images/bee.svg') center top;
  background-position-x: calc(50% - #{math.div($hexagon-width, 4) + math.div($hexagon-space-to-remove, 2)});

  @media #{$medium-and-up} {
    background-position-x: calc(50% - #{$hexagon-width + math.div($hexagon-space-to-remove, 2)});
  }

  @media #{$large-and-up} {
    background-position-x: calc(50% + #{math.div($hexagon-width, 2) - math.div($hexagon-space-to-remove, 2)});
  }

  @media #{$extra-large} {
    background-position-x: calc(50% - #{$hexagon-width + math.div($hexagon-space-to-remove, 2)});
  }
}

.skills-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: math.div($hexagon-height, 2) + math.div($hexagon-border-out, 2);

  > * {
    $margin-top: 0;
    $margin-right: $hexagon-width * 1.5 - math.div($hexagon-space-to-remove, 2);
    $margin-bottom: math.div(-$hexagon-height, 2) - math.div($hexagon-border-out, 2);
    $margin-left: math.div($hexagon-width, 2) - math.div($hexagon-space-to-remove, 2);

    margin: $margin-top $margin-right $margin-bottom $margin-left;
  }

  @media #{$small-and-down} {
    width: $hexagon-width * 3.5 - $hexagon-space-to-remove;

    > *:nth-child(even) {
      margin-right: math.div($hexagon-width, 2) - math.div($hexagon-space-to-remove, 2);
      margin-left: $hexagon-width * 2 - $hexagon-space-to-remove;
    }
  }

  @media #{$medium-only} {
    width: $hexagon-width * 5 - $hexagon-space-to-remove;

    > *:nth-child(3n + 2) {
      margin-right: math.div($hexagon-width, 2) - math.div($hexagon-space-to-remove, 2);
    }

    > *:nth-child(3n + 3) {
      margin-left: $hexagon-width * 2 - $hexagon-space-to-remove;
    }
  }

  @media #{$large-only} {
    width: $hexagon-width * 8 - $hexagon-space-to-remove * 3;

    > *:nth-child(5n + 3) {
      margin-right: math.div($hexagon-width, 2) - math.div($hexagon-space-to-remove, 2);
    }

    > *:nth-child(5n + 4) {
      margin-left: $hexagon-width * 2 - $hexagon-space-to-remove;
    }
  }

  @media #{$extra-large} {
    width: $hexagon-width * 11 - $hexagon-space-to-remove * 3;

    > *:nth-child(7n + 4) {
      margin-right: math.div($hexagon-width, 2) - math.div($hexagon-space-to-remove, 2);
    }

    > *:nth-child(7n + 5) {
      margin-left: $hexagon-width * 2 - $hexagon-space-to-remove;
    }
  }
}
</style>
