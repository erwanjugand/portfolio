<template>
  <PSection class="introduction" :style="style">
    <ClientOnly placeholder-tag="h1" placeholder="Erwan Jugand">
      <VTypical class="introduction-title" wrapper="h1" :loop="Infinity" :steps="['Erwan Jugand', 4000, 'Developpeur Front-End', 4000]" />
    </ClientOnly>
    <PButton class="introduction-cv" href="/cv-erwan-jugand.pdf" target="_blank" outlined>
      <PIcon type="regular" name="download" />
      {{ $t('PIntroduction.action') }}
    </PButton>
    <a v-ripple href="#about" class="introduction-scroll" :aria-label="$t('PIntroduction.scroll')" aria-hidden>
      <img src="/images/mouse.svg" alt="">
    </a>
  </PSection>
</template>

<script setup lang="ts">
import { VTypical } from 'vue-typical'
const { y } = useWindowScroll()
const style = computed(() => ({ backgroundPosition: `center bottom -${y.value / 3}px` }))
</script>

<style lang="scss">
.introduction {
  justify-content: space-around;
  min-height: 100vh;
  padding: 128px 0 64px;
  background-image:
    image-set(
      url("/images/background-mobile-x1.webp") 1x,
      url("/images/background-mobile-x2.webp") 2x
    );
  background-repeat: no-repeat;
  background-size: cover;
  gap: 64px;

  @media #{$large-and-up} {
    background-image:
      image-set(
        url("/images/background-desktop-x1.webp") 1x,
        url("/images/background-desktop-x2.webp") 2x
      );
  }

  // Only Firefox support "type" in image-set
  @supports (background-image: image-set(url("/images/background-mobile-x1.avif") type("image/avif"))) {
    background-image:
      image-set(
        url("/images/background-mobile-x1.avif") type("image/avif") 1x,
        url("/images/background-mobile-x2.avif") type("image/avif") 2x,
        url("/images/background-mobile-x1.webp") type("image/webp") 1x,
        url("/images/background-mobile-x2.webp") type("image/webp") 2x
      );

    @media #{$large-and-up} {
      background-image:
        image-set(
          url("/images/background-desktop-x1.avif") type("image/avif") 1x,
          url("/images/background-desktop-x2.avif") type("image/avif") 2x,
          url("/images/background-desktop-x1.webp") type("image/webp") 1x,
          url("/images/background-desktop-x2.webp") type("image/webp") 2x
        );
    }
  }

  h1 {
    transition: font-size var(--transition);
    color: $grey-0;
    font-size: 2em;

    @media #{$medium-and-up} {
      font-size: 3em;
    }

    @media #{$large-and-up} {
      font-size: 4em;
    }

    &::after {
      content: "|";
      animation: blink 1s infinite step-start;
      font-weight: $fw-light;
    }
  }

  &-cv {
    backdrop-filter: blur(20px);
  }

  &-scroll {
    width: 48px;
    border-radius: 99px;
    opacity: 0.75;
    color: $grey-0;
  }
}

@keyframes blink {
  50% { opacity: 0; }
}
</style>
