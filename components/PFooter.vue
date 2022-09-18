<template>
  <div class="footer-container">
    <div class="footer-easter-egg-container">
      <button
        class="footer-easter-egg"
        title="?????"
        aria-label="?????"
      >
        <PIcon type="custom" name="easterEgg" class="footer-easter-egg-icon" />
      </button>
    </div>
    <footer class="footer">
    <div class="container footer-content">
      <p class="footer-copyright" v-text="$t('PFooter.copyright', { year: currentYear })" />

      <NuxtLink class="footer-legal-mentions" to="/legal-mentions">
          {{ $t('pages.legalMentions.title') }}
      </NuxtLink>

      <div class="footer-social-networks">
        <a
            target="_blank"
            rel="noopener"
            class="footer-github"
            href="https://github.com/erwanjugand"
            aria-label="Github"
            :title="$t('PFooter.github')"
          >
            <PIcon type="brand" name="github" class="footer-github-icon" />
          </a>

          <a
            target="_blank"
            rel="noopener"
            class="footer-linkedin"
            href="https://www.linkedin.com/in/erwan-jugand/"
            aria-label="Linkedin"
            :title="$t('PFooter.linkedin')"
          >
            <PIcon type="brand" name="linkedin" class="footer-linkedin-icon" />
          </a>
      </div>

      <NuxtLink class="footer-last-version" to="/changelog">
        {{ lastVersion }}
      </NuxtLink>
    </div>
  </footer>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '~/store'
const { releases } = useStore()
const lastVersion = releases[0].name
const currentYear = new Date().getFullYear()
</script>

<style lang="scss">
.footer {
  position: relative;
  background-color: var(--c-background-alt);

  &-container {
    position: relative;
  }

  &-content {
    display: grid;
    position: relative;
    z-index: 1;
    grid-template:
      "a"
      "b"
      "c"
      "d";
    align-items: center;
    padding: 16px 0;
    gap: 16px 0;

    @media #{$medium-and-up} {
      grid-template:
        "a c d"
        "b c d";
      padding: 8px 0;
      gap: 0 16px;
    }

    @media #{$large-and-up} {
      grid-template-columns: 1fr auto 1fr;
    }
  }

  &-copyright {
    grid-area: a;
  }

  &-legal-mentions {
    grid-area: b;
  }

  &-social-networks {
    display: flex;
    gap: 16px;
    grid-area: c;

    @media #{$medium-and-up} {
      justify-self: center;
    }
  }

  &-github,
  &-linkedin {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: $br-small;
    justify-self: center;

    &-icon {
      height: 2.5em;
      fill: currentcolor;
    }
  }

  &-last-version {
    grid-area: d;

    @media #{$medium-and-up} {
      justify-self: end;
    }
  }

  &-last-version,
  &-legal-mentions {
    &:hover {
      text-decoration: underline;
    }
  }

  &-easter-egg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    padding: 8px;
    transform: translateY(-50%);
    transition: transform var(--transition), color var(--transition);
    border-radius: $br-small $br-small 0 0;
    fill: currentcolor;
    color: var(--c-text-secondary-1);

    &:hover,
    &:focus {
      transform: translateY(-100%);
      color: var(--c-text-secondary-2);
    }

    &-container {
      position: absolute;
      top: 0;
      right: 10%;
    }

    &-icon {
      height: 2.5em;
      fill: currentcolor;
    }
  }
}
</style>
