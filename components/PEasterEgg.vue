<template>
  <div class="easter-egg">
    <div class="easter-egg-wrapper">
      <img class="easter-egg-animation" src="/images/logo-hack.gif" alt="">
      <p
        v-for="(step, index) of easterEggSteps"
        :key="step.text"
        :class="['easter-egg-step', { 'visible': index <= lastStepIndex }]"
        v-text="step.text"
      />
      <div
        role="progressbar"
        :aria-valuenow="progressBarValue"
        aria-valuemin="0"
        aria-valuemax="100"
        class="easter-egg-progress"
      >
        <div class="easter-egg-progress-bar" :style="progressBarStyle" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '~/store'

const page = document.documentElement
page.style.overflow = CSS.supports('overflow: clip') ? 'clip' : 'hidden'

const { easterEggSteps } = useStore()
const emit = defineEmits(['close'])
const theme = useColorMode()
const lastStepIndex = ref(0)

easterEggSteps.forEach((step, index) => {
  setTimeout(() => {
    if (index + 1 < easterEggSteps.length) {
      lastStepIndex.value += 1
    } else {
      page.style.removeProperty('overflow')
      theme.preference = 'hacked'
      emit('close')
    }
  }, step.duration)
})

const progressBarValue = computed(() => easterEggSteps[lastStepIndex.value].value)
const progressBarStyle = computed(() => { return { flexBasis: `${progressBarValue.value}%` } })
</script>

<style lang="scss">
.easter-egg {
  display: flex;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: $grey-100;
  color: var(--c-primary-alt);

  &-animation {
    display: flex;
    width: 190px;
    height: 70px;
    margin: 0 auto 32px;
  }

  &-wrapper {
    width: min(80vw, 360px);
  }

  &-step {
    margin-bottom: 8px;
    font-family: sans-serif;

    &:not(.visible) {
      opacity: 0;
    }
  }

  &-progress {
    display: flex;
    height: 24px;
    overflow: hidden;
    border: 1px solid $grey-90;
    border-radius: $br-small;

    &-bar {
      flex: 0;
      transition: flex var(--transition);
      background-color: var(--c-primary-alt);
    }
  }
}
</style>
