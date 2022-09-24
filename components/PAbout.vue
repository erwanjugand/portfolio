<template>
  <PSection id="about">
    <div class="container row">
      <PH2 class="xs12">
        {{ $t('PAbout.title') }}
      </PH2>
      <picture class="xs12 l4 about-profil-container">
        <source srcset="/images/erwan-jugand-x1.avif, /images/erwan-jugand-x2.avif 2x, /images/erwan-jugand-x3.avif 3x" type="image/avif">
        <img class="about-profil" src="/images/erwan-jugand-x1.webp" srcset="/images/erwan-jugand-x2.webp 2x, /images/erwan-jugand-x3.webp 3x" alt="Erwan Jugand">
      </picture>
      <div class="xs12 l8 about-content">
        <p class="about-text" v-html="$t('PAbout.text1', { year: age })" />
        <p class="about-text" v-html="$t('PAbout.text2')" />
        <p class="about-text" v-html="$t('PAbout.text3')" />
        <p class="about-text" v-html="$t('PAbout.text4')" />
        <p class="about-text" v-html="$t('PAbout.text5')" />
      </div>
    </div>
  </PSection>
</template>

<script setup lang="ts">
const diff = new Date().getTime() - new Date('1997-07-17').getTime()
const age = Math.floor(diff / (365 * 24 * 60 * 60 * 1000))
</script>

<style lang="scss">
.about {
  &-profil {
    flex: 0 1 300px;
    border: 6px solid var(--c-background-3);
    border-radius: 50%;
    background-color: var(--c-background-1);
    box-shadow:
      inset 0 0 0 1px var(--c-border),
      0 2px 1px -1px rgba($grey-100, 0.2),
      0 1px 1px 0 rgba($grey-100, 0.14),
      0 1px 3px 0 rgba($grey-100, 0.12);
    aspect-ratio: 1/1;

    &-container {
      display: flex;
      justify-content: center;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
  }

  &-text {
    @media #{$medium-and-up} {
      font-size: 1.125em;
    }

    strong {
      font-weight: $fw-bold;
    }
  }
}
</style>
