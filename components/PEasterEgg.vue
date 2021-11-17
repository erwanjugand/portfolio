<template>
  <div v-if="show" ref="easteEgg" tabindex="0" class="easter-egg">
    <div class="easter-egg-wrapper">
      <img class="easter-egg-animation" src="/images/logo-hack.gif" alt="">
      <p
        v-for="(step, index) of steps"
        :key="step.text"
        :class="['easter-egg-step', { 'visible': index <= lastStepIndex }]"
        v-text="step.text"
      />
      <div
        role="progressbar"
        :aria-valuenow="value"
        aria-valuemin="0"
        aria-valuemax="100"
        class="easter-egg-progress"
      >
        <div class="easter-egg-progress-bar" :style="progressBarStyle" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { EasterEggStep } from '~/models'

export default Vue.extend({
  data () {
    return {
      show: false,
      lastColorPreference: this.$colorMode.preference,
      lastStepIndex: 0,
      steps: [
        {
          text: 'Launch mpl.exe',
          value: 0,
          duration: 500
        },
        {
          text: 'Protocol initialization...',
          value: 10,
          duration: 1000
        },
        {
          text: 'Recovery of user data...',
          value: 50,
          duration: 2000
        },
        {
          text: 'Sends data to Skynet\'s servers...',
          value: 80,
          duration: 1500
        },
        {
          text: 'Program completed !',
          value: 100,
          duration: 1000
        },
        {
          text: 'Good day ! <3',
          value: 100,
          duration: 500
        }
      ] as EasterEggStep[]
    }
  },

  computed: {
    visibleSteps (): EasterEggStep[] {
      return this.steps.slice(0, this.lastStepIndex)
    },

    value (): number {
      return this.steps[this.lastStepIndex].value
    },

    progressBarStyle (): {} {
      return {
        flexBasis: this.value + '%'
      }
    }
  },

  mounted () {
    this.$nuxt.$on('launchEasterEgg', this.lauchEasterEgg)
  },

  destroyed () {
    this.$nuxt.$off('launchEasterEgg')
  },

  methods: {
    async lauchEasterEgg () {
      this.show = true
      const page = document.documentElement.querySelector('main')!
      page.style.overflow = CSS.supports('overflow: clip') ? 'clip' : 'hidden'
      await new Promise(resolve => setTimeout(resolve))
      ;(this.$refs.easteEgg as HTMLDivElement).focus()

      for (let i = 0; i < this.steps.length; i++) {
        const step = this.steps[i]
        await new Promise(resolve => setTimeout(resolve, step.duration))
        if (i < this.steps.length - 1) {
          this.lastStepIndex = i + 1
        } else {
          this.show = false
          this.lastStepIndex = 0
          if (this.$colorMode.value === 'hacked') {
            this.$colorMode.preference = this.lastColorPreference
          } else {
            this.lastColorPreference = this.$colorMode.preference
            this.$colorMode.preference = 'hacked'
          }
          page.style.removeProperty('overflow')
        }
      }
    }
  }
})
</script>

<style lang="scss">
.easter-egg {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: var(--c-secondary);
  background: $grey-100;

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
    border: 1px solid $grey-90;
    border-radius: $br-small;
    overflow: hidden;

    &-bar {
      flex: 0;
      background: var(--c-secondary);
      transition: flex var(--transition);
    }
  }
}
</style>
