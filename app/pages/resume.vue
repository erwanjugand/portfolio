<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import CvHexagons from '~/assets/images/cv-hexagons.svg'

const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl
const siteHost = siteUrl?.replace(/^https?:\/\//, '')

const additionalSkills = [
  { icon: 'users', key: 'management' },
  { icon: 'paintbrushPencil', key: 'webDesign' },
  { icon: 'listCheck', key: 'productManagement' },
]

const hobbies = [
  { icon: 'gamepadModern', key: 'videoGame' },
  { icon: 'newspaper', key: 'highTech' },
]

const { t } = useI18n()
useSeoMeta({
  title: t('pages.resume.title'),
  description: t('pages.resume.description'),
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
  <article class="cv light-mode">
    <header class="cv-header dark-mode">
      <CvHexagons class="cv-header-hexagons" />
      <div class="cv-photo">
        <span class="cv-photo-frame" />
        <picture>
          <source type="image/avif" :srcset="profileImage.avifSrcset" sizes="112px" />
          <img
            class="cv-photo-image"
            width="112"
            height="129"
            :src="profileImage.src"
            :srcset="profileImage.srcset"
            sizes="112px"
            alt="Erwan Jugand"
          />
        </picture>
      </div>
      <div class="cv-identity">
        <h2 class="cv-name">Erwan Jugand</h2>
        <p class="cv-post" v-text="$t('jobTitle')" />
      </div>
    </header>

    <div class="cv-body">
      <aside class="cv-aside">
        <section class="cv-aside-section">
          <h3 class="cv-aside-title" v-text="$t('pages.resume.personalInformations.title')" />
          <ul class="cv-aside-list">
            <li v-for="information of informations" :key="information.title">
              <a
                :href="information.cta"
                :target="information.externalLink ? '_blank' : undefined"
                class="cv-aside-item"
              >
                <PIcon class="cv-aside-icon" type="light" :name="information.icon" />
                {{ information.content }}
              </a>
            </li>
            <li>
              <a :href="siteUrl" target="_blank" class="cv-aside-item">
                <PIcon class="cv-aside-icon" type="light" name="link" />
                {{ siteHost }}
              </a>
            </li>
            <li class="cv-aside-item">
              <PIcon class="cv-aside-icon" type="light" name="carSide" />
              {{ $t('pages.resume.personalInformations.car') }}
            </li>
          </ul>
        </section>

        <section class="cv-aside-section">
          <h3 class="cv-aside-title" v-text="$t('pages.resume.environments.title')" />
          <ul class="cv-aside-list">
            <li v-for="environment of environments" :key="environment.title" class="cv-aside-item">
              <PIcon class="cv-aside-icon" :type="environment.icon.type" :name="environment.icon.name" />
              {{ environment.title }}
            </li>
          </ul>
        </section>

        <section class="cv-aside-section">
          <h3 class="cv-aside-title" v-text="$t('pages.resume.additionalSkill.title')" />
          <ul class="cv-aside-list">
            <li v-for="additionalSkill of additionalSkills" :key="additionalSkill.key" class="cv-aside-item">
              <PIcon class="cv-aside-icon" type="light" :name="additionalSkill.icon" />
              {{ $t(`pages.resume.additionalSkill.${additionalSkill.key}`) }}
            </li>
          </ul>
        </section>

        <section class="cv-aside-section">
          <h3 class="cv-aside-title" v-text="$t('pages.resume.hobbies.title')" />
          <ul class="cv-aside-list">
            <li v-for="hobby of hobbies" :key="hobby.key" class="cv-aside-item">
              <PIcon class="cv-aside-icon" type="light" :name="hobby.icon" />
              {{ $t(`pages.resume.hobbies.${hobby.key}`) }}
            </li>
          </ul>
        </section>
      </aside>

      <div class="cv-main">
        <section class="cv-main-section">
          <h3 class="cv-main-title">
            <SvgoHexagon class="cv-main-title-icon" />
            {{ $t('pages.resume.experiences.title') }}
          </h3>
          <ol class="cv-experiences">
            <li v-for="experience of experiences" :key="experience.enterprise" class="cv-experience">
              <h4 class="cv-experience-enterprise" v-text="experience.enterprise" />
              <PResumeJob
                v-for="job of experience.jobs"
                :key="job.key"
                :job
                :compact="experience.jobs.every(({ contract }) => contract === 'internship')"
              />
            </li>
          </ol>
        </section>

        <section class="cv-main-section">
          <h3 class="cv-main-title">
            <SvgoHexagon class="cv-main-title-icon" />
            {{ $t('pages.resume.skills.title') }}
          </h3>
          <ul class="cv-skills">
            <li v-for="skill of skills" :key="skill.name" class="cv-skill">
              {{ skill.name }}
              <PSkillLevel :level="skill.level" />
            </li>
          </ul>
        </section>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
.cv {
  --cv-padding: var(--spacing-3);
  --cv-aside-flex: 1 1 248px;
  --cv-main-flex: 999 1 460px;
  --cv-title-icon: 12px;

  overflow: hidden;
  background-color: var(--c-surface);
  border: 1px solid var(--c-line);
  border-radius: var(--radius);
  box-shadow:
    0 1px 0 color-mix(in srgb, var(--c-ink) 4%, transparent),
    0 40px 80px -48px color-mix(in srgb, var(--c-ink) 45%, transparent);

  @media #{breakpoints.$medium-and-up} {
    --cv-padding: var(--spacing-4);
  }

  @media print {
    display: flex;
    flex-direction: column;
    aspect-ratio: 210 / 297;
    print-color-adjust: exact;
    border: 0;
    border-radius: 0;
  }

  &-header {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    row-gap: var(--spacing-3);
    align-items: center;
    padding-block: var(--cv-padding);
    overflow: hidden;
    background-color: var(--c-surface);

    &-hexagons {
      position: absolute;
      top: calc(-1 * var(--spacing-4));
      right: calc(-1 * var(--spacing-5));
      width: 300px;
    }
  }

  &-photo {
    display: grid;
    flex: var(--cv-aside-flex);
    justify-content: center;

    &-frame,
    &-image {
      grid-area: 1 / 1;
    }

    &-frame {
      background: linear-gradient(to bottom right, var(--c-g1), var(--c-g2));
      mask: url('~/assets/images/cv-frame.svg') center / 100% 100% no-repeat;
      scale: 1.16;
    }

    &-image {
      object-fit: cover;
      background-color: var(--c-line-2);
      clip-path: var(--hexagon);
    }
  }

  &-identity {
    position: relative;
    display: flex;
    flex: var(--cv-main-flex);
    flex-direction: column;
    gap: var(--spacing-1);
    padding-inline: var(--cv-padding);
  }

  &-name {
    font-size: 2.5em;
    font-weight: var(--font-weight-bold);
    line-height: 1;

    @media #{breakpoints.$medium-and-up} {
      font-size: 3em;
    }
  }

  &-post {
    font-size: 0.75em;
    font-weight: var(--font-weight-semibold);
    color: var(--c-ink-2);
    text-transform: uppercase;
  }

  &-body {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
  }

  &-aside {
    display: flex;
    flex: var(--cv-aside-flex);
    flex-direction: column;
    gap: var(--spacing-4);
    padding: var(--spacing-4) var(--spacing-3);
    font-size: 0.75em;
    color: var(--c-ink-2);
    background-color: var(--c-bg);

    &-section {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-2);
    }

    &-title {
      display: flex;
      gap: 12px;
      align-items: center;
      font-weight: var(--font-weight-semibold);
      color: var(--c-ink);
      text-transform: uppercase;

      &::before,
      &::after {
        flex: 1;
        height: 1px;
        content: '';
        background-color: var(--c-line-2);
      }
    }

    &-list {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-1);
      padding-inline-start: var(--spacing-1);
    }

    &-item {
      display: flex;
      gap: 12px;
      align-items: center;
      overflow-wrap: anywhere;
    }

    &-icon {
      flex: none;
      width: var(--spacing-2);
      height: var(--spacing-2);
      fill: var(--c-accent);
    }
  }

  &-main {
    display: flex;
    flex: var(--cv-main-flex);
    flex-direction: column;
    gap: var(--spacing-4);
    padding: var(--spacing-3) var(--cv-padding) var(--cv-padding) var(--spacing-4);

    &-section {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-2);
    }

    &-title {
      display: flex;
      gap: var(--spacing-1);
      align-items: center;
      margin-inline-start: calc(-1 * (var(--cv-title-icon) + var(--spacing-1)));
      font-size: 1.125em;
      font-weight: var(--font-weight-bold);

      &-icon {
        flex: 0 0 var(--cv-title-icon);
        fill: var(--c-accent);
      }
    }
  }

  &-experiences,
  &-skills {
    padding-inline-start: var(--spacing-1);
  }

  &-experiences {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
  }

  &-experience {
    display: flex;
    flex-direction: column;
    gap: 12px;

    &-enterprise {
      font-size: 0.875em;
      font-weight: var(--font-weight-bold);
      color: var(--c-accent);
    }
  }

  &-skills {
    column-width: 10em;
    column-gap: var(--spacing-3);
    font-size: 0.75em;
  }

  &-skill {
    --skill-level-size: 1em;
    --skill-level-off: var(--c-ink-3);

    display: grid;
    grid-template-columns: 5.5em auto;
    gap: var(--spacing-2);
    align-items: center;
    margin-bottom: var(--spacing-1);
    text-align: end;
    break-inside: avoid;
  }
}
</style>
