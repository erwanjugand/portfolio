<script setup lang="ts">
const { currentModeIcon, currentModeName, toggleMode } = useTheme()
const { currentLocale, locales } = useLocale()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

// Menu
const switchMenu = useTemplateRef('switch-menu')
const closeMenu = () => switchMenu.value?.hidePopover()
</script>

<template>
  <header class="header">
    <div class="container header-content">
      <NuxtLink v-ripple :to="localePath('index')" class="header-home" :title="$t('PHeader.homeAction')">
        <PLogo class="header-logo" />
        Erwan Jugand
      </NuxtLink>

      <button
        v-ripple
        class="header-switch-cta"
        popovertarget="switch-menu"
        :aria-label="$t('PHeader.langActionLabel', { lang: currentLocale?.name })"
        :title="$t('PHeader.langAction')"
      >
        <img
          class="header-switch-cta-image"
          :src="`/images/flag-${currentLocale?.code}.svg`"
          :alt="currentLocale?.name"
        />
        <PIcon class="header-switch-cta-icon" type="solid" name="caretDown" />
      </button>

      <ul id="switch-menu" ref="switch-menu" role="menu" class="header-switch-menu" popover>
        <li v-for="otherLocale of locales" :key="otherLocale.code" class="header-switch-menu-item">
          <NuxtLink
            v-ripple
            role="menuitem"
            class="header-switch-menu-link"
            :to="switchLocalePath(otherLocale.code)"
            :title="otherLocale.name"
            @click="closeMenu"
          >
            <img
              class="header-switch-menu-image"
              loading="lazy"
              :src="`/images/flag-${otherLocale.language}.svg`"
              :alt="otherLocale.name"
            />
          </NuxtLink>
        </li>
      </ul>

      <div class="header-toggle-theme-container">
        <ClientOnly>
          <button
            v-ripple
            class="header-toggle-theme"
            :aria-label="$t('PHeader.themeActionLabel', { theme: currentModeName })"
            :title="$t('PHeader.themeAction')"
            @click="toggleMode()"
          >
            <PIcon class="header-toggle-theme-icon" :type="currentModeIcon.type" :name="currentModeIcon.name" />
          </button>
        </ClientOnly>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(20px);
  box-shadow:
    inset 0 -1px 0 0 var(--c-border),
    0 3px 1px -2px rgba(variables.$grey-100, 0.2),
    0 2px 2px 0 rgba(variables.$grey-100, 0.14),
    0 1px 5px 0 rgba(variables.$grey-100, 0.12);

  @media print {
    display: none;
  }

  .dark-mode &,
  .hacked-mode & {
    background-color: rgba(variables.$grey-87, 80%);

    @media (prefers-contrast: more) {
      background-color: rgba(variables.$grey-90, 90%);
    }
  }

  .light-mode & {
    background-color: rgba(variables.$grey-0, 80%);

    @media (prefers-contrast: more) {
      background-color: rgba(variables.$grey-0, 90%);
    }
  }

  &-content {
    display: grid;
    grid-template-columns: 1fr auto auto;
    height: 64px;
  }

  &-home {
    display: flex;
    align-items: center;
    padding-inline: 16px;
    transition: font-size var(--transition);
    font-size: 1.125em;
    text-decoration: none;
    text-transform: uppercase;
    justify-self: flex-start;

    @media #{variables.$small-and-down} {
      font-size: 0;
    }
  }

  &-logo {
    width: 70px;
    margin-right: 1em;
    fill: var(--c-primary);
  }

  &-switch-cta {
    display: flex;
    align-items: center;
    padding-inline: 16px;

    @supports (anchor-name: --header-switch-cta) {
      anchor-name: --header-switch-cta;
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

    &:has(+ [popover]:popover-open) &-icon {
      transform: rotate(180deg);
    }
  }

  &-switch-menu {
    position: fixed;
    border-radius: var(--border-radius-small);
    background-color: var(--c-background-3);
    scale: 0;

    @supports (position-anchor: --header-switch-cta) and (position-area: bottom) {
      position-anchor: --header-switch-cta;
      position-area: bottom;
    }

    @supports (transition-behavior: allow-discrete) {
      transition:
        scale var(--transition) allow-discrete,
        display var(--transition) allow-discrete,
        overlay var(--transition) allow-discrete;
    }

    @supports not (
      (anchor-name: --header-switch-cta) and (position-area: bottom) and (position-anchor: --header-switch-cta)
    ) {
      top: 64px;
      right: 128px;
    }

    &:popover-open {
      display: flex;
      scale: 1;

      @starting-style {
        scale: 0;
      }
    }

    &-link {
      display: flex;
      width: max-content;
      padding: 8px;

      &.router-link-exact-active {
        background-color: var(--c-primary);
      }
    }

    &-item:first-child &-link {
      border-radius: var(--border-radius-small) 0 0 var(--border-radius-small);
    }

    &-item:last-child &-link {
      border-radius: 0 var(--border-radius-small) var(--border-radius-small) 0;
    }

    &-image {
      width: 32px;
      height: 32px;
    }
  }

  &-toggle-theme {
    display: flex;
    align-items: center;
    padding: 16px;

    &-container {
      width: 64px;
    }

    &-icon.icon {
      width: 2rem;
      height: 2rem;
      fill: var(--c-text);
    }
  }
}
</style>
