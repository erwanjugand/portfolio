<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="header">
    <div class="container header-content">
      <NuxtLink v-ripple :to="localePath('index')" class="header-home" :title="$t('PHeader.homeAction')">
        <PLogo class="header-logo" />
        Erwan Jugand
      </NuxtLink>

      <div ref="switchLocaleContainer" class="header-switch-locale-container">
        <button
          v-ripple
          class="header-switch-locale"
          aria-controls="menu-locales"
          :aria-expanded="localeMenuIsOpen"
          :aria-label="$t('PHeader.langAction')"
          :title="$t('PHeader.langAction')"
          @click="localeMenuIsOpen = !localeMenuIsOpen"
        >
          <img class="header-switch-locale-image" :src="`/images/flag-${currentLocale.code}.svg`" :alt="currentLocale.name">
          <PIcon class="header-switch-locale-icon" type="solid" name="caretDown" />
        </button>
        <Transition name="header-switch-locale">
          <ul v-show="localeMenuIsOpen" id="menu-locales" role="menu" class="header-switch-locale-list">
            <li v-for="otherLocale of locales" :key="otherLocale.code" class="header-switch-locale-list-item">
              <NuxtLink
                v-ripple
                class="header-switch-locale-list-link"
                role="menuitem"
                :to="switchLocalePath(otherLocale.code)"
                :aria-label="otherLocale.name"
                :title="otherLocale.name"
                @click="localeMenuIsOpen = false"
              >
                <img class="header-switch-locale-image" loading="lazy" :src="`/images/flag-${otherLocale.iso}.svg`" :alt="otherLocale.name">
              </NuxtLink>
            </li>
          </ul>
        </Transition>
      </div>

      <div class="header-toggle-theme-container">
        <ClientOnly>
          <button
            v-ripple
            class="header-toggle-theme"
            :aria-label="themeText"
            :title="themeText"
            @click="toggleTheme()"
          >
            <PIcon class="header-toggle-theme-icon" :type="currentThemeIcon.type" :name="currentThemeIcon.name" />
          </button>
        </ClientOnly>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { onClickOutside } from '@vueuse/core'
import { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'
import { ComputedRef } from 'vue'

// Theme
const themeIcon: headerIcons = {
  light: { type: 'light', name: 'brightness' },
  dark: { type: 'light', name: 'moon' },
  hacked: { type: 'custom', name: 'easterEgg' }
}
const theme = useColorMode()
const isDark = computed(() => theme.value === 'dark')
const themeText = computed(() => t(`PHeader.${theme.value}Mode`).toString())
const currentThemeIcon = computed(() => themeIcon[theme.value])
const toggleTheme = () => {
  theme.preference = isDark.value ? 'light' : 'dark'
}

// Locale
const localePath = useLocalePath()
const locales = useI18n().locales as ComputedRef<LocaleObject[]>
const { t, locale } = useI18n()
const switchLocaleContainer = ref(null)
const localeMenuIsOpen = ref(false)
const currentLocale = computed(() => locales.value.find(l => l.code === locale.value)!)
const switchLocalePath = useSwitchLocalePath()
onClickOutside(switchLocaleContainer, () => {
  localeMenuIsOpen.value = false
})

</script>

<style lang="scss">
.header {
  position: fixed;
  z-index: 10;
  width: 100%;
  backdrop-filter: blur(20px);
  box-shadow:
    inset 0 -1px 0 0 var(--c-border),
    0 3px 1px -2px rgba($grey-100, 0.2),
    0 2px 2px 0 rgba($grey-100, 0.14),
    0 1px 5px 0 rgba($grey-100, 0.12);

  .dark-mode & {
    background-color: rgba($grey-87, 80%);

    @media (prefers-contrast: more) {
      background-color: rgba($grey-90, 90%);
    }
  }

  .light-mode & {
    background-color: rgba($grey-0, 80%);
  }

  &-content {
    display: grid;
    grid-template-columns: 1fr auto auto;
    height: 64px;
  }

  &-home {
    display: flex;
    align-items: center;
    padding: 0 16px;
    transition: font-size var(--transition);
    font-size: 1.125em;
    text-decoration: none;
    text-transform: uppercase;
    justify-self: flex-start;

    @media #{$small-and-down} {
      font-size: 0;
    }
  }

  &-logo {
    width: 70px;
    margin-right: 1em;
    fill: var(--c-primary);
  }

  &-switch-locale {
    display: flex;
    align-items: center;
    padding: 0 16px;

    &-container {
      display: flex;
      position: relative;
    }

    &-icon {
      width: 10px;
      margin-left: 8px;
      transition: transform var(--transition);
      fill: var(--c-text);
    }

    &-image {
      width: 32px;
      height: 32px;
    }

    &[aria-expanded="true"] &-icon {
      transform: rotate(180deg);
    }

    &-list {
      display: flex;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      transition: transform var(--transition);
      border-radius: $br-small;
      background-color: var(--c-background-3);

      &-link {
        display: flex;
        width: max-content;
        padding: 8px;

        &.router-link-exact-active {
          background-color: var(--c-primary);
        }
      }

      &-item {
        &:first-child .header-switch-locale-list-link {
          border-radius: $br-small 0 0 $br-small;
        }

        &:last-child .header-switch-locale-list-link {
          border-radius: 0 $br-small $br-small 0;
        }
      }
    }

    &-enter-from,
    &-leave-to {
      transform: translateX(-50%) scale(0);
    }
  }

  &-toggle-theme {
    display: flex;
    align-items: center;
    padding: 16px;

    &-container {
      width: 64px;
    }

    &-icon {
      height: 2rem;
      fill: var(--c-text);
    }
  }
}
</style>
