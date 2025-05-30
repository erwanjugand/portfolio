<script setup lang="ts">
import type { CSSProperties } from 'vue'

interface Emit {
  (e: 'close'): void
}

const emit = defineEmits<Emit>()

const { changeMode } = useTheme()
changeMode('hacked')

const isLocked = useScrollLock(document.documentElement, true)
const { count, inc } = useCounter(0, { max: easterEggSteps.length - 1 })

easterEggSteps.forEach((step, index) => {
  setTimeout(() => {
    if (index + 1 < easterEggSteps.length) {
      inc()
    } else {
      isLocked.value = false
      emit('close')
    }
  }, step.duration)
})

const progressBarValue = computed(() => easterEggSteps[count.value]?.value)
const progressBarStyle = computed<CSSProperties>(() => ({ flexBasis: `${progressBarValue.value}%` }))
</script>

<template>
  <div class="easter-egg">
    <div class="easter-egg-wrapper">
      <img class="easter-egg-animation" src="/images/logo-hack.gif" alt="" />
      <p
        v-for="(step, index) of easterEggSteps"
        :key="step.text"
        :class="['easter-egg-step', { visible: index <= count }]"
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
  background: variables.$grey-100;
  color: var(--c-primary);

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
    margin-top: 16px;
    overflow: hidden;
    border: 1px solid variables.$grey-90;
    border-radius: var(--border-radius-small);

    &-bar {
      flex: 0;
      transition: flex var(--transition);
      background-color: var(--c-primary);
    }
  }
}
</style>
