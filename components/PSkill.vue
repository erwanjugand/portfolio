<template>
  <PHexagon tag="li" tabindex="0" class="skill">
    <span class="skill-name" v-text="skill.name" />
    <div class="skill-score">
      <PIcon v-for="n of 3" :key="n" :type="n > skill.level ? 'light' : 'solid'" name="star" />
    </div>
  </PHexagon>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Skill } from '~/store/store'

defineProps({
  skill: {
    type: Object as PropType<Skill>,
    required: true
  }
})
</script>

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

    @media #{$touchscreen} {
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

    @media #{$touchscreen} {
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
