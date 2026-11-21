<script setup lang="ts">
import AboutFrame from '~/assets/images/about-frame.svg'
</script>

<template>
  <PSection id="about">
    <div class="container">
      <PHeading>
        {{ $t('PAbout.title') }}
      </PHeading>
      <div class="about-content">
        <figure class="about-profile reveal">
          <AboutFrame class="about-profile-frame" />
          <picture>
            <source type="image/avif" :srcset="profileImage.avifSrcset" sizes="400px" />
            <img
              class="about-profile-photo"
              width="400"
              height="400"
              loading="lazy"
              :src="profileImage.src"
              :srcset="profileImage.srcset"
              sizes="400px"
              :alt="$t('PAbout.profileAlt')"
            />
          </picture>
        </figure>
        <div class="about-text">
          <I18nT tag="p" class="reveal" keypath="PAbout.text1" scope="global">
            <template #name>
              <strong>Erwan Jugand</strong>
            </template>
            <template #job>
              <strong>{{ $t('PAbout.text1Job') }}</strong>
            </template>
          </I18nT>
          <I18nT tag="p" class="reveal" keypath="PAbout.text2" scope="global">
            <template #school>
              <strong>Digital Campus</strong>
            </template>
            <template #enterprise>
              <strong>Steeple</strong>
            </template>
          </I18nT>
          <p class="reveal" v-text="$t('PAbout.text3')" />
          <p class="reveal" v-text="$t('PAbout.text4')" />
        </div>
      </div>
    </div>
  </PSection>
</template>

<style lang="scss">
@property --about-progress {
  syntax: '<number>';
  inherits: true;
  initial-value: 0;
}

.about {
  &-content {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-8) var(--spacing-12);
    align-items: center;
    justify-content: center;
  }

  &-profile {
    display: grid;

    &-frame {
      grid-area: 1 / 1;
      overflow: visible;
    }

    &-outer,
    &-inner {
      transform-origin: center;
    }

    &-outer {
      rotate: calc(var(--about-progress) * 10deg);
      scale: 1.2;
    }

    &-inner {
      rotate: calc(var(--about-progress) * -6deg);
      scale: 1.1;
    }

    &-photo {
      --about-angle: calc(var(--about-progress) * 3deg);

      grid-area: 1 / 1;
      height: auto;
      background-color: var(--c-line);
      clip-path: polygon(
        calc(50% + 50% * sin(var(--about-angle))) calc(50% - 50% * cos(var(--about-angle))),
        calc(50% + 50% * sin(var(--about-angle) + 60deg)) calc(50% - 50% * cos(var(--about-angle) + 60deg)),
        calc(50% + 50% * sin(var(--about-angle) + 120deg)) calc(50% - 50% * cos(var(--about-angle) + 120deg)),
        calc(50% - 50% * sin(var(--about-angle))) calc(50% + 50% * cos(var(--about-angle))),
        calc(50% - 50% * sin(var(--about-angle) + 60deg)) calc(50% + 50% * cos(var(--about-angle) + 60deg)),
        calc(50% - 50% * sin(var(--about-angle) + 120deg)) calc(50% + 50% * cos(var(--about-angle) + 120deg))
      );
    }
  }

  &-text {
    display: flex;
    flex: 1 1 480px;
    flex-direction: column;
    gap: var(--spacing-3);
    max-width: 680px;
    color: var(--c-ink-2);

    strong {
      font-weight: var(--font-weight-semibold);
      color: var(--c-ink);
    }
  }
}

@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .about-profile-frame,
    .about-profile-photo {
      animation: about-spin linear both;
      animation-timeline: view();
    }
  }
}

@keyframes about-spin {
  from {
    --about-progress: -1;
  }

  to {
    --about-progress: 1;
  }
}
</style>
