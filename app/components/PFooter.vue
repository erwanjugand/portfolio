<script setup lang="ts">
const localePath = useLocalePath()
const CURRENT_YEAR = new Date().getFullYear()
const COMMIT_SHA = import.meta.env.VITE_DEPLOY_COMMIT
const COMMIT_URL = `https://github.com/erwanjugand/portfolio/commit/${COMMIT_SHA}`
const COMMIT_NAME = COMMIT_SHA?.slice(0, 7)

const isVisible = ref(false)
const openEasterEgg = () => {
  isVisible.value = true
}
const closeEasterEgg = () => {
  isVisible.value = false
}
</script>

<template>
  <footer class="footer">
    <div class="container footer-content">
      <nav class="footer-links" :aria-label="$t('PFooter.links')">
        <a class="footer-link" href="https://github.com/erwanjugand" target="_blank">GitHub</a>
        <a class="footer-link" href="https://www.linkedin.com/in/erwan-jugand/" target="_blank">LinkedIn</a>
        <NuxtLink class="footer-link" :to="localePath('legal-mentions')">
          {{ $t('pages.legalMentions.title') }}
        </NuxtLink>
      </nav>

      <p class="footer-meta">
        <span class="footer-copyright" v-text="$t('PFooter.copyright', { year: CURRENT_YEAR })" />
        <a v-if="COMMIT_SHA" class="footer-link" target="_blank" :href="COMMIT_URL" :title="$t('PFooter.commitTitle')">
          #{{ COMMIT_NAME }}
        </a>
        <button class="footer-easter-egg" title="?????" aria-label="?????" @click="openEasterEgg">
          <span class="footer-easter-egg-dot" />
        </button>
      </p>
    </div>
    <PEasterEgg v-if="isVisible" @close="closeEasterEgg" />
  </footer>
</template>

<style lang="scss">
.footer {
  padding-bottom: env(safe-area-inset-bottom);
  border-top: 1px solid var(--c-line);

  &-content {
    display: flex;
    flex-wrap: wrap;
    column-gap: var(--spacing-4);
    justify-content: space-between;
    padding-block: var(--spacing-2);
  }

  &-links {
    display: flex;
    flex-wrap: wrap;
    column-gap: var(--spacing-3);
    font-size: 0.875em;
    font-weight: var(--font-weight-semibold);
  }

  &-link {
    padding-block: 12px;
    line-height: var(--spacing-3);
    background: linear-gradient(90deg, var(--c-g1), var(--c-g2)) 0 100% / 0 2px no-repeat content-box;
    transition:
      background-size var(--transition),
      color var(--transition);

    &:hover {
      background-size: 100% 2px;
    }
  }

  &-meta {
    display: flex;
    flex-wrap: wrap;
    column-gap: var(--spacing-1);
    align-items: center;
    font-size: 0.875em;
    color: var(--c-ink-3);
  }

  &-copyright {
    @media #{breakpoints.$small-and-down} {
      flex-basis: 100%;
    }
  }

  &-easter-egg {
    display: grid;
    place-items: center;
    width: var(--spacing-6);
    height: var(--spacing-6);
    margin-inline-start: calc(-1 * var(--spacing-1));

    &-dot {
      width: 8px;
      aspect-ratio: 0.866;
      background-color: var(--c-line-2);
      clip-path: var(--hexagon);
      transition: background-color var(--transition);
    }

    &:hover &-dot {
      background-color: var(--c-accent);
    }
  }
}
</style>
