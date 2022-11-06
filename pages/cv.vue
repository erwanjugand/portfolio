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
    </header>

    <aside class="cv-aside">
      <div class="cv-aside-title">
        <h2 class="cv-aside-title-text" v-text="$t('pages.cv.personalInformations.title')" />
        <hr class="cv-aside-title-separator">
      </div>

      <div class="cv-aside-content">
        <a
          v-for="information of informations"
          :key="information.title"
          :href="information.cta"
          class="cv-aside-content-text"
        >
          <PIcon class="cv-aside-content-text-icon" :name="information.icon" />
          <span v-text="information.content" />
        </a>
        <NuxtLink :href="siteUrl" class="cv-aside-content-text">
          <PIcon class="cv-aside-content-text-icon" name="link" />
          <span v-text="siteUrl" />
        </NuxtLink>
      </div>

      <div class="cv-aside-title">
        <h2 class="cv-aside-title-text" v-text="$t('pages.cv.environments.title')" />
        <hr class="cv-aside-title-separator">
      </div>

      <div class="cv-aside-content">
        <div class="cv-aside-content-icons">
          <PIcon
            v-for="environment of environments"
            :key="environment.name"
            class="cv-aside-content-icon"
            type="custom"
            :name="environment.name"
          />
        </div>
      </div>

      <div class="cv-aside-title">
        <h2 class="cv-aside-title-text" v-text="$t('pages.cv.hobbies.title')" />
        <hr class="cv-aside-title-separator">
      </div>

      <div class="cv-aside-content">
        <p class="cv-aside-content-text">
          <PIcon class="cv-aside-content-text-icon" name="gamepadModern" />
          <span v-text="$t('pages.cv.hobbies.videoGame')" />
        </p>
        <p class="cv-aside-content-text">
          <PIcon class="cv-aside-content-text-icon" name="newspaper" />
          <span v-text="$t('pages.cv.hobbies.highTech')" />
        </p>
      </div>

      <div class="cv-aside-title">
        <h2 class="cv-aside-title-text" v-text="$t('pages.cv.additionalSkill.title')" />
        <hr class="cv-aside-title-separator">
      </div>

      <div class="cv-aside-content">
        <p class="cv-aside-content-text">
          <PIcon class="cv-aside-content-text-icon" name="users" />
          <span v-text="$t('pages.cv.additionalSkill.management')" />
        </p>
        <p class="cv-aside-content-text">
          <PIcon class="cv-aside-content-text-icon" name="paintbrushPencil" />
          <span v-text="$t('pages.cv.additionalSkill.webDesign')" />
        </p>
        <p class="cv-aside-content-text">
          <PIcon class="cv-aside-content-text-icon" name="listCheck" />
          <span v-text="$t('pages.cv.additionalSkill.productManagment')" />
        </p>
      </div>
    </aside>

    <main class="cv-main">
      Main
    </main>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '~/store'

const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl
const { environments, informations } = useStore()

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
    grid: "i" "t" "p";
    grid-area: h;
    justify-content: center;
    padding: 24px 16px;
    background: $grey-84;
    color: $grey-0;
    gap: 16px;

    @media #{$medium-and-up} {
      grid: "i t" "i p" / 208px  auto;
      justify-content: flex-start;
      gap: 16px 64px;
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
      align-self: flex-end;
      font-size: 3em;
      font-weight: $fw-light;
    }

    &-post {
      grid-area: p;
      align-self: flex-start;
      opacity: 0.8;
      font-weight: $fw-light;
      text-transform: uppercase;
    }
  }

  &-aside {
    display: flex;
    grid-area: a;
    flex-direction: column;
    gap: 32px;
    padding: 32px 16px;
    background-color: $grey-87;
    color: $grey-0;

    &-title {
      display: flex;
      position: relative;
      justify-content: center;

      &-text {
        position: relative;
        z-index: 1;
        padding: 0 8px;
        background-color: $grey-87;
        text-align: center;
        text-transform: uppercase;
      }

      &-separator {
        position: absolute;
        top: calc(50% - 1px);
        width: 100%;
        height: 1px;
        background-color: $grey-75;
      }
    }

    &-content {
      display: flex;
      flex-direction: column;
      gap: 12px;

      &-text {
        display: flex;
        align-items: center;
        gap: 8px;
        color: $grey-25;
        font-size: 0.875em;

        &-icon {
          width: 1.25rem;
          height: 1rem;
          fill: $grey-35;
        }
      }

      &-icons {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0 32px;
        gap: 16px;
        justify-items: center;
      }

      &-icon {
        height: 2em;
        fill: $grey-25;
      }
    }
  }

  &-main {
    grid-area: m;
    padding: 24px 16px;
    color: $grey-90;
  }
}
</style>
