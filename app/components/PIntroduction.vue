<script setup lang="ts">
import VTypical from 'vue-typical'

const localePath = useLocalePath()
const behavior = useScrollBehavior()
const scroll = () => {
  window.scrollTo({ top: window.innerHeight - 64, behavior: behavior.value })
}
</script>

<template>
  <PSection id="introduction" class="introduction">
    <ClientOnly placeholder-tag="h1" placeholder="Erwan Jugand">
      <VTypical
        class="introduction-title"
        wrapper="h1"
        :loop="Infinity"
        :aria-label="`Erwan Jugand | ${$t('PIntroduction.titleAlt')}`"
        :steps="['Erwan Jugand', 4000, $t('PIntroduction.titleAlt'), 4000]"
      />
    </ClientOnly>
    <PButton class="introduction-cv" :to="localePath('resume')" outlined>
      <PIcon type="regular" name="download" />
      {{ $t('PIntroduction.action') }}
    </PButton>
    <button v-ripple class="introduction-scroll" :title="$t('PIntroduction.scroll')" @click="scroll">
      <img width="48" height="80" aria-hidden="true" class="introduction-scroll-image" src="/images/mouse.svg" alt="" />
    </button>
  </PSection>
</template>

<style lang="scss">
.introduction {
  &.section {
    justify-content: space-around;
    min-height: 100svh;
    padding-block: 128px 64px;
    background-image: image-set(
      url('/images/background-mobile-x1.avif') type('image/avif') 1x,
      url('/images/background-mobile-x2.avif') type('image/avif') 2x,
      url('/images/background-mobile-x1.webp') type('image/webp') 1x,
      url('/images/background-mobile-x2.webp') type('image/webp') 2x
    );
    background-repeat: no-repeat;
    background-position: center bottom var(--background-position-y);
    background-size: cover;
    gap: 64px;

    @media #{variables.$large-and-up} {
      background-image: image-set(
        url('/images/background-desktop-x1.avif') type('image/avif') 1x,
        url('/images/background-desktop-x2.avif') type('image/avif') 2x,
        url('/images/background-desktop-x1.webp') type('image/webp') 1x,
        url('/images/background-desktop-x2.webp') type('image/webp') 2x
      );
    }

    @supports (animation-timeline: view()) and (animation-range: exit-crossing 0% exit 100%) {
      @media (prefers-reduced-motion: no-preference) {
        animation: scroll-parallax linear both;
        animation-timeline: view();
        animation-range: exit-crossing 0% exit 100%;
      }
    }
  }

  h1 {
    padding-inline: 1em;
    transition: font-size var(--transition);
    color: variables.$grey-0;
    font-size: 2em;
    text-align: center;
    text-shadow: 0 0 10px variables.$grey-100;

    @media #{variables.$medium-and-up} {
      font-size: 3em;
    }

    @media #{variables.$large-and-up} {
      font-size: 4em;
    }

    &::after {
      content: '|';
      animation: blink 1s infinite step-start;
      font-weight: var(--font-weight-light);
    }
  }

  &-cv {
    backdrop-filter: blur(20px);
  }

  &-scroll {
    --focus-radius: 99px;
    --focus-offset: 2px;

    border-radius: 99px;
    opacity: 0.75;
    color: variables.$grey-0;

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

@property --background-position-y {
  syntax: '<length>';
  inherits: false;
  initial-value: 0;
}

@keyframes scroll-parallax {
  0% {
    --background-position-y: 0px;
  }

  100% {
    --background-position-y: calc(-100svh / 3);
  }
}
</style>
