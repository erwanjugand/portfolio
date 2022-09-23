<template>
  <header class="header">
    <div class="container header-content">
      <NuxtLink to="/" class="header-home" :title="$t('PHeader.homeAction')">
        <PLogo class="header-logo" />
        Erwan Jugand
      </NuxtLink>

      <div ref="switchLocaleContainer" class="header-switch-locale-container">
        <button
          class="header-switch-locale"
          aria-controls="menu-locales"
          :aria-expanded="localMenuIsOpen"
          :aria-label="$t('PHeader.langAction')"
          :title="$t('PHeader.langAction')"
          @click="localMenuIsOpen = !localMenuIsOpen"
        >
          <img class="header-switch-locale-image" :src="`/images/flag-${currentLocal.code}.svg`" :alt="currentLocal.name">
          <PIcon class="header-switch-locale-icon" type="solid" name="caretDown" />
        </button>
        <Transition name="header-switch-locale">
          <ul v-show="localMenuIsOpen" id="menu-locales" role="menu" class="header-switch-locale-list">
            <li class="header-switch-locale-list-item" v-for="locale of locales" :key="locale.code">
              <NuxtLink
                class="header-switch-locale-list-link"
                role="menuitem"
                :to="switchLocalePath(locale.code)"
                :aria-label="locale.name"
                :title="locale.name"
                @click="localMenuIsOpen = false"
              >
                <img class="header-switch-locale-image" loading="lazy" :src="`/images/flag-${locale.iso}.svg`" :alt="locale.name">
              </NuxtLink>
            </li>
          </ul>
        </Transition>
      </div>

      <ClientOnly>
        <button v-if="!isSystem" class="header-toggle-theme" :aria-label="themeText" :title="themeText" @click="toggleTheme()">
          <PIcon class="header-toggle-theme-icon" :name="themeIcon" />
        </button>
      </ClientOnly>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { onClickOutside } from '@vueuse/core'

const { t, locale, locales } = useI18n()
// Theme
const theme = useColorMode()
const isDark = computed(() => theme.value === 'dark')
const isSystem = computed(() => theme.value === 'system')
const themeText = computed(() => t(`PHeader.${theme.value}Mode`).toString())
const themeIcon = computed(() => isDark.value ? 'moon' : 'brightness')
const toggleTheme = () => theme.preference = isDark.value ? 'light' : 'dark'

// Local
const switchLocaleContainer = ref(null)
const localMenuIsOpen = ref(false)
const currentLocal = computed(() => locales.value.find((l) => l.code === locale.value))
const switchLocalePath = useSwitchLocalePath()
onClickOutside(switchLocaleContainer, (event) => localMenuIsOpen.value = false)

</script>

<style lang="scss">
.header {
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: rgba($grey-87, 80%);
  backdrop-filter: blur(20px);
  box-shadow:
    inset 0 -1px 0 0 var(--c-border),
    0 3px 1px -2px rgba($grey-100, 0.2),
    0 2px 2px 0 rgba($grey-100, 0.14),
    0 1px 5px 0 rgba($grey-100, 0.12);

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
    color: $grey-0;
    font-weight: $fw-light;
    text-decoration: none;
    text-transform: uppercase;

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
    color: $grey-0;

    &-container {
      display: flex;
      position: relative;
    }

    &-icon {
      width: 10px;
      margin-left: 8px;
      transition: transform var(--transition);
      fill: $grey-0;
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
        color: $grey-0;

        &.nuxt-link-exact-active {
          background-color: var(--c-secondary);
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

    &-icon {
      height: 2rem;
      fill: $grey-0;
    }
  }
}
</style>
