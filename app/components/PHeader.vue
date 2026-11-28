<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { currentModeIcon, currentModeName, toggleMode } = useTheme()
const { locale: currentLocale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const themeTurns = ref(0)
const toggleTheme = () => {
  toggleMode()
  themeTurns.value++
}
</script>

<template>
  <header class="header">
    <div class="container header-content">
      <NuxtLink :to="localePath('index')" class="header-home" :title="$t('PHeader.homeAction')">
        <PLogo class="header-logo" />
        <span class="header-name">Erwan Jugand</span>
      </NuxtLink>

      <div class="header-lang">
        <template v-for="(locale, index) of locales" :key="locale.code">
          <span v-if="index > 0" class="header-lang-separator" aria-hidden="true">/</span>
          <NuxtLink
            class="header-lang-link"
            :to="switchLocalePath(locale.code)"
            :lang="locale.language"
            :hreflang="locale.language"
            :title="locale.name"
            :aria-current="locale.code === currentLocale ? 'page' : undefined"
          >
            {{ locale.code.toUpperCase() }}
          </NuxtLink>
        </template>
      </div>

      <div class="header-theme-container">
        <ClientOnly>
          <button
            class="header-theme"
            :aria-label="$t('PHeader.themeActionLabel', { theme: currentModeName })"
            :title="$t('PHeader.themeAction')"
            @click="toggleTheme"
          >
            <SvgoHexagon class="header-theme-hexagon" :style="{ rotate: `${themeTurns * 60}deg` }" />
            <PIcon class="header-theme-icon" :type="currentModeIcon.type" :name="currentModeIcon.name" />
          </button>
        </ClientOnly>
      </div>
    </div>

    <span class="header-progress" aria-hidden="true" />
  </header>
</template>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: color-mix(in srgb, var(--c-bg) 90%, transparent);
  border-bottom: 1px solid var(--c-line);
  backdrop-filter: blur(16px);

  @media (prefers-contrast: more) {
    background-color: var(--c-bg);
  }

  @media print {
    display: none;
  }

  &-content {
    display: flex;
    gap: var(--spacing-1);
    align-items: center;
    height: calc(var(--header-height) - 1px);
  }

  &-home {
    display: flex;
    gap: var(--spacing-2);
    align-items: center;
    min-height: var(--spacing-6);
    margin-inline-end: auto;
    font-size: 0.875em;
    font-weight: var(--font-weight-bold);

    &:hover {
      color: inherit;
    }
  }

  &-name {
    display: none;

    @media #{breakpoints.$small-and-up} {
      display: inline;
    }
  }

  &-logo {
    width: 60px;
  }

  &-lang {
    display: flex;
    align-items: center;
    font-size: 0.875em;

    &-separator {
      color: var(--c-line-2);
    }

    &-link {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: var(--spacing-5);
      min-height: var(--spacing-6);
      font-weight: var(--font-weight-semibold);
      color: var(--c-ink-3);
      transition: color var(--transition);

      &:hover {
        color: var(--c-accent-ink);
      }

      &[aria-current] {
        color: var(--c-ink);

        @media (prefers-contrast: more) {
          text-decoration: underline 2px;
          text-underline-offset: 4px;
        }
      }
    }
  }

  &-theme {
    display: grid;
    place-items: center;
    width: var(--spacing-6);
    height: var(--spacing-6);

    &-container {
      width: var(--spacing-6);
      height: var(--spacing-6);
    }

    &-hexagon {
      grid-area: 1 / 1;
      fill: transparent;
      stroke: var(--c-line-2);
      transition:
        rotate var(--transition),
        fill var(--transition),
        stroke var(--transition),
        stroke-width var(--transition);
    }

    &-icon {
      grid-area: 1 / 1;
      height: var(--spacing-2);
      fill: currentcolor;
      transition:
        scale var(--transition),
        color var(--transition);
    }

    &:hover &-hexagon {
      fill: color-mix(in srgb, var(--c-accent-ink) 12%, transparent);
      stroke: var(--c-accent-ink);
      stroke-width: 1.5px;
    }

    &:hover &-icon {
      color: var(--c-accent-ink);
      scale: 1.1;
    }
  }

  &-progress {
    position: absolute;
    inset: auto 0 -1px;
    height: 2px;
    background: linear-gradient(90deg, var(--c-g1), var(--c-g2));
    transform-origin: 0 50%;
    scale: 0 1;
  }
}

@supports (animation-timeline: scroll()) {
  @media (prefers-reduced-motion: no-preference) {
    .header,
    .header-progress {
      animation-timing-function: linear;
      animation-fill-mode: both;
      animation-timeline: scroll(root);
    }

    .header {
      animation-range: 0 96px;

      @media (prefers-contrast: no-preference) {
        animation-name: header-background;
      }
    }

    .header-progress {
      animation-name: header-progress;
    }

    @keyframes header-background {
      from {
        background-color: transparent;
        border-bottom-color: transparent;
      }
    }

    @keyframes header-progress {
      to {
        scale: 1;
      }
    }
  }
}
</style>
