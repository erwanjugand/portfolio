<script setup lang="ts">
const lastRelease = releases[0]
const localePath = useLocalePath()
const currentYear = useDateFormat(useNow(), 'YYYY')

const isVisible = ref(false)
const openEasterEgg = () => {
  isVisible.value = true
}
const closeEasterEgg = () => {
  isVisible.value = false
}
</script>

<template>
  <div class="footer-container">
    <div class="footer-easter-egg-container">
      <button v-ripple class="footer-easter-egg" title="?????" @click="openEasterEgg">
        <PIcon type="custom" name="easterEgg" class="footer-easter-egg-icon" />
      </button>
    </div>
    <footer class="footer">
      <div class="container footer-content">
        <p class="footer-copyright" v-text="$t('PFooter.copyright', { year: currentYear })" />

        <NuxtLink class="footer-legal-mentions" :to="localePath('legal-mentions')">
          {{ $t('pages.legalMentions.title') }}
        </NuxtLink>

        <div class="footer-social-networks">
          <a
            v-ripple
            target="_blank"
            rel="noopener"
            class="footer-github"
            href="https://github.com/erwanjugand"
            title="Github"
          >
            <PIcon type="brands" name="github" class="footer-github-icon" />
          </a>

          <a
            v-ripple
            target="_blank"
            rel="noopener"
            class="footer-linkedin"
            href="https://www.linkedin.com/in/erwan-jugand/"
            title="Linkedin"
          >
            <PIcon type="brands" name="linkedin" class="footer-linkedin-icon" />
          </a>
        </div>

        <NuxtLink class="footer-last-version" :to="localePath('changelog')">
          {{ lastRelease.name }}
        </NuxtLink>
      </div>
    </footer>
    <PEasterEgg v-if="isVisible" @close="closeEasterEgg" />
  </div>
</template>

<style lang="scss">
.footer {
  position: relative;
  background-color: var(--c-background-alt);

  &-container {
    position: relative;
  }

  &-content {
    display: grid;
    grid-template:
      'a'
      'b'
      'c'
      'd';
    place-items: center;
    padding-block: 32px;
    gap: 16px 0;

    @media #{variables.$medium-and-up} {
      justify-items: start;
      grid-template:
        'a c d'
        'b c d';
      gap: 0 16px;
    }

    @media #{variables.$large-and-up} {
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

    @media #{variables.$medium-and-up} {
      justify-self: center;
    }
  }

  &-github,
  &-linkedin {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: var(--border-radius-small);
    justify-self: center;

    &-icon {
      height: 2.5em;
      fill: currentcolor;
    }
  }

  &-last-version {
    grid-area: d;

    @media #{variables.$medium-and-up} {
      justify-self: end;
    }
  }

  &-last-version,
  &-legal-mentions {
    --focus-radius: var(--border-radius-small);
    --focus-offset: 4px;

    &:hover {
      text-decoration: underline;
    }
  }

  &-easter-egg {
    --focus-radius: var(--border-radius-small) var(--border-radius-small) 0 0;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    padding: 8px;
    transform: translateY(-50%);
    transition:
      transform var(--transition),
      color var(--transition);
    border-radius: var(--border-radius-small) var(--border-radius-small) 0 0;
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
