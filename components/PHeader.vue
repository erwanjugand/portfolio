<template>
  <header class="header">
    <div class="container header-content">
      <NuxtLink to="/" title="" class="header-home">
        <PLogo class="header-logo" />
        Erwan Jugand
      </NuxtLink>

      <button v-if="!isSystem" class="header-toggle-theme" :aria-label="themeText" :title="themeText" @click="toggleTheme()">
        <PIcon class="header-toggle-theme-icon" :name="themeIcon" />
      </button>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const theme = useColorMode()
const isDark = computed(() => theme.value === 'dark')
const isSystem = computed(() => theme.value === 'system')
const { t } = useI18n()
const themeText = computed(() => t(`PHeader.${theme.value}Mode`).toString())
const themeIcon = computed(() => isDark.value ? 'moon' : 'brightness')
const toggleTheme = () => theme.preference = isDark.value ? 'light' : 'dark'
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
