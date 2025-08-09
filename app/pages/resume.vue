<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl

const { t } = useI18n()
useHead({
  title: t('pages.resume.title'),
  meta: [{ name: 'description', content: t('pages.resume.description') }],
})

definePageMeta({
  layout: 'pdf',
})

defineI18nRoute({
  paths: {
    en: '/resume',
    fr: '/cv',
  },
})
</script>

<template>
  <div class="cv">
    <header class="cv-header">
      <picture class="cv-header-profile-container">
        <source
          srcset="/images/erwan-jugand-x1.avif, /images/erwan-jugand-x2.avif 2x, /images/erwan-jugand-x3.avif 3x"
          type="image/avif"
        />
        <img
          width="160"
          height="160"
          class="cv-header-profile"
          src="/images/erwan-jugand-x1.webp"
          srcset="/images/erwan-jugand-x2.webp 2x, /images/erwan-jugand-x3.webp 3x"
          alt="Erwan Jugand"
        />
      </picture>
      <h1 class="cv-header-title">Erwan Jugand</h1>
      <p class="cv-header-post" v-text="$t('PIntroduction.titleAlt')" />
    </header>

    <aside class="cv-aside">
      <div class="cv-aside-title">
        <h2 class="cv-aside-title-text" v-text="$t('pages.resume.personalInformations.title')" />
        <hr class="cv-aside-title-separator" />
      </div>

      <div class="cv-aside-content">
        <a
          v-for="information of informations"
          :key="information.title"
          :href="information.cta"
          :rel="information.externalLink ? 'noopener' : undefined"
          :target="information.externalLink ? '_blank' : undefined"
          class="cv-aside-content-text"
        >
          <PIcon class="cv-aside-content-text-icon" type="light" :name="information.icon" />
          <span v-text="information.content" />
        </a>
        <NuxtLink :href="siteUrl" target="_blank" class="cv-aside-content-text">
          <PIcon class="cv-aside-content-text-icon" type="light" name="link" />
          <span v-text="siteUrl" />
        </NuxtLink>
        <p class="cv-aside-content-text">
          <PIcon class="cv-aside-content-text-icon" type="light" name="carSide" />
          <span v-text="$t('pages.resume.personalInformations.car')" />
        </p>
      </div>

      <div class="cv-aside-title">
        <h2 class="cv-aside-title-text" v-text="$t('pages.resume.environments.title')" />
        <hr class="cv-aside-title-separator" />
      </div>

      <div class="cv-aside-content">
        <div class="cv-aside-environments">
          <figure v-for="(environment, index) in environments" :key="index" class="cv-aside-environment">
            <PIcon class="cv-aside-environment-icon" :type="environment.icon.type" :name="environment.icon.name" />
            <figcaption class="cv-aside-environment-text" v-text="environment.title" />
          </figure>
        </div>
      </div>

      <div class="cv-aside-title">
        <h2 class="cv-aside-title-text" v-text="$t('pages.resume.additionalSkill.title')" />
        <hr class="cv-aside-title-separator" />
      </div>

      <div class="cv-aside-content">
        <p class="cv-aside-content-text">
          <PIcon class="cv-aside-content-text-icon" type="light" name="users" />
          <span v-text="$t('pages.resume.additionalSkill.management')" />
        </p>
        <p class="cv-aside-content-text">
          <PIcon class="cv-aside-content-text-icon" type="light" name="paintbrushPencil" />
          <span v-text="$t('pages.resume.additionalSkill.webDesign')" />
        </p>
        <p class="cv-aside-content-text">
          <PIcon class="cv-aside-content-text-icon" type="light" name="listCheck" />
          <span v-text="$t('pages.resume.additionalSkill.productManagement')" />
        </p>
      </div>

      <div class="cv-aside-title">
        <h2 class="cv-aside-title-text" v-text="$t('pages.resume.hobbies.title')" />
        <hr class="cv-aside-title-separator" />
      </div>

      <div class="cv-aside-content">
        <p class="cv-aside-content-text">
          <PIcon class="cv-aside-content-text-icon" type="light" name="gamepadModern" />
          <span v-text="$t('pages.resume.hobbies.videoGame')" />
        </p>
        <p class="cv-aside-content-text">
          <PIcon class="cv-aside-content-text-icon" type="light" name="newspaper" />
          <span v-text="$t('pages.resume.hobbies.highTech')" />
        </p>
      </div>
    </aside>

    <main class="cv-main">
      <h2 class="cv-main-title" v-text="$t('pages.resume.experiences.title')" />
      <div v-for="experience of experiences" :key="experience.enterprise" class="cv-main-experience">
        <h3 class="cv-main-experience-enterprise" v-text="experience.enterprise" />
        <PResumeJob v-for="job of experience.jobs" :key="job.key" :job />
      </div>

      <h2 class="cv-main-title" v-text="$t('pages.resume.skills.title')" />
      <div class="cv-main-skills">
        <div v-for="skill of skills" :key="skill.name" class="cv-main-skill">
          <p class="cv-main-skill-text" v-text="skill.name" />
          <PIcon
            v-for="n of 3"
            :key="n"
            class="cv-main-skill-level"
            :type="n > skill.level ? 'light' : 'solid'"
            name="star"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
.cv {
  display: grid;
  grid: 'h' 'a' 'm' 1fr;
  height: 100%;

  @media #{variables.$medium-and-up} {
    grid: 'h h' 'a m' 1fr / minmax(240px, 30%) 1fr;
  }

  &-header {
    display: grid;
    grid: 'i' 't' 'p';
    grid-area: h;
    gap: 16px;
    justify-content: center;
    padding: 24px 16px;
    color: variables.$grey-0;
    background: variables.$grey-84;

    @media #{variables.$medium-and-up} {
      grid: 'i t' 'i p' / minmax(208px, calc(30% - 32px)) auto;
      gap: 16px 64px;
      justify-content: flex-start;
    }

    &-profile {
      display: flex;
      clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);

      &-container {
        grid-area: i;
        justify-self: center;
      }
    }

    &-title {
      grid-area: t;
      align-self: flex-end;
      font-size: 3em;
      font-weight: var(--font-weight-light);
    }

    &-post {
      grid-area: p;
      align-self: flex-start;
      font-weight: var(--font-weight-light);
      text-transform: uppercase;
      opacity: 0.8;
    }
  }

  &-aside {
    display: flex;
    flex-direction: column;
    grid-area: a;
    gap: 32px;
    padding: 32px 16px;
    color: variables.$grey-0;
    background-color: variables.$grey-87;

    &-title {
      position: relative;
      display: flex;
      justify-content: center;

      &-text {
        position: relative;
        z-index: 1;
        padding-inline: 8px;
        text-align: center;
        text-transform: uppercase;
        background-color: variables.$grey-87;
      }

      &-separator {
        position: absolute;
        top: calc(50% - 1px);
        width: 100%;
        height: 1px;
        background-color: variables.$grey-75;
      }
    }

    &-content {
      display: flex;
      flex-direction: column;
      gap: 12px;

      &-text {
        --focus-offset: 4px;

        display: flex;
        gap: 8px;
        align-items: center;
        font-size: 0.875em;
        color: variables.$grey-25;

        &-icon {
          flex: 0 0 1.25rem;
          height: 1rem;
          fill: variables.$grey-35;
        }
      }
    }

    &-environments {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      justify-items: center;
      padding-inline: 16px;
    }

    &-environment {
      display: flex;
      flex-direction: column;
      gap: 4px;

      &-icon {
        height: 2em;
        fill: variables.$grey-25;
      }

      &-text {
        font-size: 0.75rem;
        font-weight: var(--font-weight-light);
        color: variables.$grey-25;
        text-align: center;
      }
    }
  }

  &-main {
    display: flex;
    flex-direction: column;
    grid-area: m;
    gap: 32px;
    padding: 32px 24px;
    container-type: inline-size;
    color: variables.$grey-90;

    &-title {
      font-size: 1.25em;
      font-weight: var(--font-weight-bold);
      color: var(--c-primary);
      text-transform: uppercase;
    }

    &-experience {
      display: flex;
      flex-direction: column;
      gap: 16px;

      &-enterprise {
        font-size: 1.125em;
        font-weight: var(--font-weight-bold);
        color: var(--c-primary);
      }

      &-job-title {
        color: var(--c-primary);
      }
    }

    &-skills {
      display: grid;
      grid-template-rows: repeat(12, 1fr);
      grid-auto-flow: column;
      gap: 8px 16px;
      font-size: 0.875em;

      @container (min-width: 400px) {
        grid-template-rows: repeat(6, 1fr);
      }

      @container (min-width: 600px) {
        grid-template-rows: repeat(4, 1fr);
      }

      @media print {
        grid-template-rows: repeat(4, 1fr);
      }
    }

    &-skill {
      display: flex;
      gap: 4px;

      &-text {
        flex: 0 0 50%;
        padding-right: 16px;
        text-align: right;
      }

      &-level {
        fill: var(--c-primary);
      }
    }
  }
}
</style>
