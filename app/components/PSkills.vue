<template>
  <PSection id="skills" class="skills-section" :style="{ '--skills-count': skills.length }" banner>
    <div class="container">
      <PHeading>
        {{ $t('PSkills.title') }}
      </PHeading>
      <ul class="skills">
        <PSkill v-for="(skill, index) of skills" :key="skill.name" :skill :style="{ '--skills-index': index }" />
      </ul>
    </div>
  </PSection>
</template>

<style lang="scss">
@use 'sass:list';
@use 'sass:math';

$skills-gap: 4px;
$skills-size-small: 116px;
$skills-size: 160px;

// Background
$skills-max-rows: 16;
$skills-row-images: ();
$skills-row-positions: ();
$skills-row-sizes: ();
$skills-row-blends: ();

@for $row from 0 to $skills-max-rows {
  $index: $row + 1;
  $shift: $row % 2 * 0.5;
  $hidden: clamp(0px, (#{$index} - var(--skills-rows)) * 10000px, 10000px);
  $x: calc(50% + var(--skills-offset) + #{$shift} * var(--skills-step));
  $y: calc(var(--section-padding) - var(--skills-gap) + #{$row} * var(--skills-row) + #{$hidden});
  $skills-row-images: list.append($skills-row-images, url('~/assets/images/skills-hexagon.svg'), $separator: comma);
  $skills-row-positions: list.append($skills-row-positions, left $x bottom $y, $separator: comma);
  $skills-row-sizes: list.append($skills-row-sizes, var(--skills-step) var(--skills-tile-height), $separator: comma);
  $skills-row-blends: list.append($skills-row-blends, normal, $separator: comma);
}

.skills-section {
  --skills-size: #{$skills-size-small};
  --skills-gap: #{$skills-gap};
  --skills-step: calc(var(--skills-size) + 2 * var(--skills-gap));
  --skills-tile-height: calc(var(--skills-size) * 1.155 + 2 * var(--skills-gap));
  --skills-columns: 1;
  --skills-row: calc(var(--skills-step) * 0.866);
  --skills-rows: round(up, var(--skills-count) / var(--skills-columns), 1);
  --skills-width: calc(var(--skills-columns) * var(--skills-step) + var(--skills-step) / 2);
  --skills-offset: calc(var(--skills-step) * (mod(var(--skills-rows) - 1, 2) - var(--skills-columns) + 0.5) / 2);

  background-image: linear-gradient(var(--c-line-2) 0 0), $skills-row-images;
  background-repeat: repeat-x;
  background-position:
    0 0,
    $skills-row-positions;
  background-size: auto, $skills-row-sizes;
  background-blend-mode: darken, $skills-row-blends;

  @media #{breakpoints.$medium-and-up} {
    --skills-size: #{$skills-size};
  }

  @each $columns, $size in (2: $skills-size-small, 3: $skills-size, 4: $skills-size, 6: $skills-size) {
    @media (width >= #{math.ceil(math.div(100 * (($columns + 0.5) * ($size + 2 * $skills-gap) + 32px), 95))}) {
      --skills-columns: #{$columns};
    }
  }
}

.skills {
  display: grid;
  grid-template-columns: repeat(auto-fill, calc(var(--skills-step) / 2));
  grid-auto-rows: var(--skills-row);
  width: var(--skills-width);
  padding-bottom: calc(var(--skills-size) * 1.155 + var(--skills-gap) - var(--skills-row));
  margin-inline: calc((100% - var(--skills-width)) / 2);
  margin-top: calc(-1 * var(--skills-gap));
}
</style>
