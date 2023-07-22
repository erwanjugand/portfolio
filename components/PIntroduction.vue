<template>
  <PSection class="introduction" :style="style">
    <ClientOnly placeholder-tag="h1" placeholder="Erwan Jugand">
      <VTypical
        class="introduction-title"
        wrapper="h1"
        :loop="Infinity"
        :steps="['Erwan Jugand', 4000, $t('PIntroduction.titleAlt'), 4000]"
      />
    </ClientOnly>
    <PButton class="introduction-cv" :to="localePath('resume')" outlined>
      <PIcon :style="IconStyle.regular" name="download" />
      {{ $t('PIntroduction.action') }}
    </PButton>
    <button
      v-ripple
      class="introduction-scroll"
      :aria-label="$t('PIntroduction.scroll')"
      :title="$t('PIntroduction.scroll')"
      @click="scroll"
    >
      <img width="48" height="80" aria-hidden="true" class="introduction-scroll-image" src="/images/mouse.svg" alt="" />
    </button>
  </PSection>
</template>

<script setup lang="ts">
import { defaultWindow } from '@vueuse/core'
import { type CSSProperties } from 'vue'
// eslint-disable-next-line import/no-named-as-default
import VTypical from 'vue-typical'
import { IconStyle } from '~/composables/useIcon'

const localePath = useLocalePath()
const behavior = useScrollBehavior()
const { y } = useScroll(defaultWindow, { behavior })
const style = computed<CSSProperties>(() => {
  return { '--background-position-y': `-${y.value / 3}px` }
})

const scroll = () => {
  y.value = window.innerHeight - 64
}
</script>

<style lang="scss">
.introduction {
  &.section {
    justify-content: space-around;
    min-height: 100vh;
    padding: 128px 0 64px;
    background-image: image-set(
      url('/images/background-mobile-x1.webp') 1x,
      url('/images/background-mobile-x2.webp') 2x
    );
    background-repeat: no-repeat;
    background-position: center bottom var(--background-position-y);
    background-size: cover;
    gap: 64px;

    @supports (min-height: 100svh) {
      min-height: 100svh;
    }

    @media #{$large-and-up} {
      background-image: image-set(
        url('/images/background-desktop-x1.webp') 1x,
        url('/images/background-desktop-x2.webp') 2x
      );
    }

    @supports (background-image: image-set(url('/images/background-mobile-x1.avif') type('image/avif'))) {
      background-image: image-set(
        url('/images/background-mobile-x1.avif') type('image/avif') 1x,
        url('/images/background-mobile-x2.avif') type('image/avif') 2x,
        url('/images/background-mobile-x1.webp') type('image/webp') 1x,
        url('/images/background-mobile-x2.webp') type('image/webp') 2x
      );

      @media #{$large-and-up} {
        background-image: image-set(
          url('/images/background-desktop-x1.avif') type('image/avif') 1x,
          url('/images/background-desktop-x2.avif') type('image/avif') 2x,
          url('/images/background-desktop-x1.webp') type('image/webp') 1x,
          url('/images/background-desktop-x2.webp') type('image/webp') 2x
        );
      }
    }
  }

  h1 {
    padding: 0 1em;
    transition: font-size var(--transition);
    color: $grey-0;
    font-size: 2em;
    text-align: center;
    text-shadow: 0 0 10px $grey-100;

    @media #{$medium-and-up} {
      font-size: 3em;
    }

    @media #{$large-and-up} {
      font-size: 4em;
    }

    &::after {
      content: '|';
      animation: blink 1s infinite step-start;
      font-weight: $fw-light;
    }
  }

  &-cv {
    backdrop-filter: blur(20px);
  }

  &-scroll {
    border-radius: 99px;
    opacity: 0.75;
    color: $grey-0;

    &-image {
      display: flex;
    }
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
