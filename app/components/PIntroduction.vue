<script setup lang="ts">
import IntroductionVisual from '~/assets/images/introduction.svg'

const localePath = useLocalePath()
const behavior = useScrollBehavior()
const scrollToAbout = () => {
  document.getElementById('about')?.scrollIntoView({ behavior: behavior.value })
}
</script>

<template>
  <section id="introduction" class="introduction dotted">
    <div class="container introduction-content">
      <div class="introduction-visual">
        <IntroductionVisual class="introduction-visual-hexagons" />
        <PLogo class="introduction-visual-logo" />
      </div>

      <div class="introduction-text">
        <h1 class="introduction-title">
          Erwan<br />
          Jugand
        </h1>
        <p class="introduction-subtitle" v-text="$t('jobTitle')" />
        <PButton class="introduction-cv" :to="localePath('resume')">
          <PIcon type="regular" name="download" />
          {{ $t('PIntroduction.action') }}
        </PButton>
      </div>

      <a class="introduction-scroll" href="#about" :title="$t('PIntroduction.scroll')" @click.prevent="scrollToAbout">
        <SvgoHexagon class="introduction-scroll-hexagon" />
        <span class="introduction-scroll-arrow">
          <PIcon class="introduction-scroll-icon" type="light" name="arrowDown" />
        </span>
      </a>
    </div>
  </section>
</template>

<style lang="scss">
.introduction {
  @media #{breakpoints.$large-and-up} {
    --dotted-x: 70%;
  }

  &-content {
    display: grid;
    grid-template:
      'text visual' 1fr
      'scroll scroll' auto
      / 1fr minmax(0, 560px);
    gap: var(--spacing-2) var(--spacing-8);
    align-items: center;
    min-height: calc(100svh - var(--header-height));
    padding-block: max(var(--spacing-2), round(down, 4svh, var(--spacing-1)));

    @media #{breakpoints.$medium-and-down} {
      grid-template:
        '.' 1fr
        'text' auto
        'visual' auto
        '.' 1fr
        'scroll' auto
        / 1fr;
      justify-items: center;
    }
  }

  &-visual {
    display: grid;
    grid-area: visual;

    @media #{breakpoints.$medium-and-down} {
      width: clamp(176px, 72px + 28vw, 320px);
    }

    &-hexagons,
    &-logo {
      grid-area: 1 / 1;
    }

    &-hexagons {
      overflow: visible;
    }

    &-logo {
      place-self: center;
      width: 15%;
    }
  }

  &-petal,
  &-petal path {
    transform-origin: center;
    transform-box: fill-box;
  }

  &-text {
    display: flex;
    flex-direction: column;
    grid-area: text;
    gap: var(--spacing-3);
    align-items: flex-start;

    @media #{breakpoints.$medium-and-down} {
      align-items: center;
      text-align: center;
    }
  }

  &-title {
    font-size: 3.5em;
    font-weight: var(--font-weight-bold);
    line-height: 1;

    @media #{breakpoints.$medium-and-up} {
      font-size: 4em;
    }

    @media #{breakpoints.$large-and-up} {
      font-size: 6em;
    }
  }

  &-subtitle {
    font-weight: var(--font-weight-medium);
    color: var(--c-ink-2);

    @media #{breakpoints.$medium-and-up} {
      font-size: 1.25em;
    }

    @media #{breakpoints.$large-and-up} {
      font-size: 1.5em;
    }
  }

  &-cv {
    margin-top: var(--spacing-1);
  }

  &-scroll {
    display: grid;
    grid-area: scroll;
    justify-self: center;
    width: var(--spacing-6);
    margin-bottom: env(safe-area-inset-bottom);
    color: var(--c-ink-2);

    &-hexagon {
      grid-area: 1 / 1;
      fill: none;
      stroke: var(--c-line-2);
      transition:
        stroke var(--transition),
        stroke-width var(--transition);
    }

    &:hover &-hexagon {
      stroke: var(--c-accent-ink);
      stroke-width: 1.5px;
    }

    &-arrow {
      display: grid;
      grid-area: 1 / 1;
      place-items: center;
      clip-path: polygon(50% 6%, 88% 28%, 88% 72%, 50% 94%, 12% 72%, 12% 28%);
    }

    &-icon {
      height: var(--spacing-2);
      fill: currentcolor;
    }
  }
}

@media (prefers-reduced-motion: no-preference) {
  .introduction-visual {
    animation: introduction-zoom 1.2s var(--ease) 0.15s backwards;
  }

  .introduction-title {
    animation: reveal 0.9s var(--ease) 0.15s backwards;
  }

  .introduction-subtitle {
    animation: reveal 0.9s var(--ease) 0.3s backwards;
  }

  .introduction-cv {
    animation: reveal 0.9s var(--ease) 0.45s backwards;
  }

  .introduction-scroll-icon {
    animation: introduction-drip 3s var(--ease) infinite;
  }

  .introduction-petal path {
    animation: introduction-float 6s ease-in-out infinite;
  }

  .introduction-petal:nth-child(even) path {
    animation-delay: -3s;
  }

  @supports (animation-timeline: scroll()) {
    .introduction-petal {
      animation-name: introduction-petal;
      animation-timing-function: linear;
      animation-fill-mode: both;
      animation-timeline: scroll(root);
      animation-range: 0 720px;
    }
  }
}

@keyframes introduction-zoom {
  from {
    opacity: 0;
    scale: 0.7;
  }
}

@keyframes introduction-petal {
  to {
    opacity: 0.25;
    rotate: 30deg;
    translate: var(--dx) var(--dy);
  }
}

@keyframes introduction-float {
  50% {
    rotate: 2deg;
    scale: 1.03;
  }
}

@keyframes introduction-drip {
  15%,
  75% {
    translate: 0 0;
  }

  45% {
    translate: 0 180%;
    animation-timing-function: step-end;
  }

  46% {
    translate: 0 -180%;
  }
}
</style>
