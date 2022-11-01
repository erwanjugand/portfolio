<template>
  <div class="cv">
    <header class="cv-header">
      <picture class="cv-header-profil-container">
        <source srcset="/images/erwan-jugand-x1.avif, /images/erwan-jugand-x2.avif 2x, /images/erwan-jugand-x3.avif 3x" type="image/avif">
        <img
          width="160"
          height="160"
          class="cv-header-profil"
          src="/images/erwan-jugand-x1.webp"
          srcset="/images/erwan-jugand-x2.webp 2x, /images/erwan-jugand-x3.webp 3x"
          alt="Erwan Jugand"
        >
      </picture>
      <h1 class="cv-header-title">
        Erwan Jugand
      </h1>
      <p class="cv-header-post" v-text="$t('PIntroduction.titleAlt')" />
      <a class="cv-header-link" target="_blank" :href="siteUrl" v-text="siteUrl" />
    </header>
    <aside class="cv-aside">
      Aside
    </aside>
    <main class="cv-main">
      Main
    </main>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl

definePageMeta({
  layout: 'pdf'
})
</script>

<style lang="scss">
.cv {
  display: grid;
  grid: "h" "a" "m" 1fr;
  height: 100%;

  @media #{$medium-and-up} {
    grid: "h h" "a m" 1fr / 240px 1fr;
  }

  &-header {
    display: grid;
    grid: "i" "t" "p" "l";
    grid-area: h;
    align-items: center;
    justify-content: center;
    padding: 32px 16px;
    background: $grey-84;
    color: $grey-0;
    gap: 16px;

    @media #{$medium-and-up} {
      grid: "i t" "i p" "i l" / 208px  auto;
      justify-content: flex-start;
      gap: 0 64px;
    }

    &-profil {
      display: flex;
      clip-path:
        polygon(
          50% 0%,
          93% 25%,
          93% 75%,
          50% 100%,
          7% 75%,
          7% 25%
        );

      &-container {
        grid-area: i;
        justify-self: center;
      }
    }

    &-title {
      grid-area: t;
      font-size: 3em;
      font-weight: $fw-light;
    }

    &-post {
      grid-area: p;
      opacity: 0.8;
      font-weight: $fw-light;
      text-transform: uppercase;
    }

    &-link {
      grid-area: l;
      color: var(--c-primary);
    }
  }

  &-aside {
    grid-area: a;
    padding: 16px;
    background: $grey-87;
    color: $grey-0;
  }

  &-main {
    grid-area: m;
    padding: 16px;
    color: $grey-90;
  }
}
</style>
