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
      <span class="introduction-scroll-mouse">
        <span class="introduction-scroll-wheel" />
      </span>
    </button>
  </PSection>
</template>

<style lang="scss">
.introduction {
  &.section {
    gap: 64px;
    justify-content: space-around;
    min-height: 100svh;
    padding-block: 128px 64px;
    background-image: image-set(
      url('/img/background-mobile-x1.avif') type('image/avif') 1x,
      url('/img/background-mobile-x2.avif') type('image/avif') 2x,
      url('/img/background-mobile-x1.webp') type('image/webp') 1x,
      url('/img/background-mobile-x2.webp') type('image/webp') 2x
    );
    background-repeat: no-repeat;
    background-position: center bottom var(--background-position-y);
    background-size: cover;

    @media #{breakpoints.$large-and-up} {
      background-image: image-set(
        url('/img/background-desktop-x1.avif') type('image/avif') 1x,
        url('/img/background-desktop-x2.avif') type('image/avif') 2x,
        url('/img/background-desktop-x1.webp') type('image/webp') 1x,
        url('/img/background-desktop-x2.webp') type('image/webp') 2x
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
    font-size: clamp(2em, 6vw, 4em);
    color: #fff;
    text-align: center;
    text-shadow: 0 0 10px #000;
    transition: font-size var(--transition);

    &::after {
      font-weight: var(--font-weight-light);
      content: '|';
      animation: blink 1s infinite step-start;
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

    &-mouse {
      display: block;
      width: 48px;
      height: 80px;
      border: 2px solid #fff;
      border-radius: 24px;
    }

    &-wheel {
      display: block;
      width: 10px;
      height: 10px;
      margin: 16px auto 0;
      background-color: #fff;
      border-radius: 50%;

      @media (prefers-reduced-motion: no-preference) {
        animation: scroll-wheel 1.5s linear infinite;
      }
    }
  }
}

@keyframes scroll-wheel {
  0% {
    opacity: 0;
    transform: translateY(-8px);
  }

  10%,
  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateY(32px);
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
