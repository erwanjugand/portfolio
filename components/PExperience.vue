<template>
  <li class="experience">
    <h3 class="experience-header" v-text="experience.enterprise" />
    <PJob
      v-for="job of experience.jobs"
      :key="job.key"
      :job="job"
      :single="hasOneJob"
    />
  </li>
</template>

<script setup lang="ts">
import { PropType } from "nuxt/dist/app/compat/vue-demi";
import { Experience } from "~~/store/store";

const { experience } = defineProps({
  experience: {
    type: Object as PropType<Experience>,
    required: true
  }
})

const hasOneJob = computed(() => experience.jobs.length === 1)
</script>

<style lang="scss">
  $diagonal: sqrt(3);

  .experience {
    display: flex;
    flex-direction: column;
    gap: 24px;

    &-header {
      position: relative;
      padding-left: 64px;
      font-size: 1.5em;
      font-weight: $fw-bold;

      &::before {
        content: "";
        position: absolute;
        top: calc(50% - 12px);
        left: div((24px * $diagonal) - 24px, 2);
        box-sizing: border-box;
        width: 24px;
        height: 24px;
        transform: rotate(45deg);
        border: 3px solid transparent;
        background-color: var(--c-background-bg);
        box-shadow: 0 0 0 3px var(--c-primary), inset 0 0 0 1px var(--c-primary);
      }
    }
  }
  </style>
