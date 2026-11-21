<script setup lang="ts">
const emit = defineEmits<{
  close: []
}>()

const { changeMode } = useTheme()
const { count, inc } = useCounter(0, { max: easterEggSteps.length - 1 })

const timers = easterEggSteps.map((step, index) =>
  setTimeout(() => {
    if (index + 1 < easterEggSteps.length) {
      inc()
    } else {
      changeMode('hacked')
      emit('close')
    }
  }, step.duration),
)
onUnmounted(() => timers.forEach(clearTimeout))

const progress = computed(() => easterEggSteps[count.value]?.value ?? 0)
</script>

<template>
  <div class="easter-egg hacked-mode" role="dialog" aria-label="mlp.exe">
    <div class="easter-egg-header">
      <p class="easter-egg-process">
        <span class="easter-egg-label" v-text="$t('PEasterEgg.process')" />
        <span class="easter-egg-name">mlp.exe</span>
      </p>
      <span class="easter-egg-percent">{{ progress }}%</span>
    </div>
    <div
      class="easter-egg-progress"
      role="progressbar"
      :aria-valuenow="progress"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-label="$t('PEasterEgg.progress')"
    >
      <span v-for="n of 10" :key="n" class="easter-egg-cell" :class="{ 'easter-egg-cell-on': n <= progress / 10 }" />
    </div>
    <ol class="easter-egg-steps" lang="en">
      <li
        v-for="(step, index) of easterEggSteps"
        :key="step.text"
        class="easter-egg-step"
        :class="{ 'easter-egg-step-done': index < count, 'easter-egg-step-hidden': index > count }"
      >
        <span class="easter-egg-prompt" aria-hidden="true">&gt;</span>
        <span v-text="step.text" />
      </li>
    </ol>
    <button class="easter-egg-cancel" type="button" @click="emit('close')" v-text="$t('PEasterEgg.cancel')" />
  </div>
</template>

<style lang="scss">
.easter-egg {
  position: fixed;
  inset-inline: 0;
  bottom: calc(var(--spacing-3) + env(safe-area-inset-bottom));
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  width: min(100% - var(--spacing-4), 480px);
  max-height: calc(100dvh - 2 * var(--spacing-3) - env(safe-area-inset-bottom));
  padding: var(--spacing-3);
  margin-inline: auto;
  overflow-y: auto;
  border: 1px solid var(--c-line-2);
  border-radius: var(--radius);
  box-shadow: 0 40px 80px -48px color-mix(in srgb, var(--c-bg) 70%, transparent);

  &-header {
    display: flex;
    gap: var(--spacing-2);
    align-items: flex-end;
    justify-content: space-between;
  }

  &-process {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &-label {
    font-size: 0.75em;
    font-weight: var(--font-weight-semibold);
    color: var(--c-ink-3);
    text-transform: uppercase;
  }

  &-name {
    font-size: 1.125em;
    font-weight: var(--font-weight-semibold);
  }

  &-percent {
    font-size: 3em;
    font-weight: var(--font-weight-bold);
    font-variant-numeric: tabular-nums;
    line-height: 1;
  }

  &-progress {
    display: flex;
    gap: var(--spacing-1);
  }

  &-cell {
    flex: 1;
    aspect-ratio: 0.866;
    background-color: var(--c-line);
    clip-path: var(--hexagon);

    &-on {
      background-image: linear-gradient(135deg, var(--c-g1), var(--c-g2));

      @media (prefers-contrast: more) {
        background: var(--c-ink);
      }
    }
  }

  &-steps {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 0.875em;
  }

  &-step {
    display: flex;
    gap: var(--spacing-1);
    transition:
      opacity var(--transition),
      visibility var(--transition);

    &-done {
      opacity: 0.5;
    }

    &-hidden {
      visibility: hidden;
      opacity: 0;
    }
  }

  &-prompt {
    color: var(--c-accent);
  }

  &-cancel {
    align-self: flex-start;
    min-height: var(--spacing-6);
    padding-inline: var(--spacing-2);
    font-size: 0.875em;
    font-weight: var(--font-weight-semibold);
    color: var(--c-ink-2);
    border: 1px solid var(--c-line-2);
    transition:
      color var(--transition),
      border-color var(--transition);

    &:hover {
      color: var(--c-ink);
      border-color: var(--c-accent);
    }
  }
}

@media (prefers-reduced-motion: no-preference) {
  .easter-egg {
    animation: reveal 0.6s var(--ease);
  }

  .easter-egg-cell-on {
    animation: easter-egg-cell 0.3s var(--ease);
  }
}

@keyframes easter-egg-cell {
  from {
    opacity: 0.25;
    scale: 0.5;
  }
}
</style>
