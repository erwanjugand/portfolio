<template>
  <PHexagon tag="li" tabindex="0" class="skill">
    <span class="skill-name" v-text="skill.name" />
    <div class="skill-score">
      <PIcon v-for="n of 3" :key="n" :type="n > skill.level ? 'light' : 'solid'" name="star" />
    </div>
  </PHexagon>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Skill } from '~/models'
export default Vue.extend({
  props: {
    skill: {
      type: Object
    } as PropOptions<Skill>
  }
})
</script>

<style lang="scss">
@mixin show-content {
  outline: none;
  opacity: 1;
  transform: translateY(-2.5rem);
}

.skill {
  font-size: 1.25em;

  &-name {
    transform: translateY(0);
    transition: transform var(--transition);

    .skill:hover &, .skill:focus & {
      transform: translateY(-2.5rem);
    }
  }

  &-score {
    position: absolute;
    top: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    opacity: 0;
    transform: translateY(0);
    transition: var(--transition);

    @media #{touchscreen} {
      @include show-content();
    }

    .skill:hover &, .skill:focus & {
      @include show-content();
    }

    .icon {
      width: 50%;
      height: 1.75rem;
      margin-top: .75rem;
    }
  }
}
</style>
