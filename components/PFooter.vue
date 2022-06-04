<template>
  <div class="footer-container">
    <div class="footer-easter-egg-button-container">
      <button
        v-ripple
        class="footer-easter-egg-button"
        title="?????"
        aria-label="?????"
        @click="$nuxt.$emit('launchEasterEgg')"
      >
        <PIcon type="custom" name="easterEgg" />
      </button>
    </div>
    <footer class="footer elevation-1">
      <div class="container footer-content">
        <p class="footer-copyright" v-text="$t('footer.copyright', { year: currentYear })" />
        <nuxt-link class="footer-legal-mentions" :to="localePath('legal-mentions')">
          {{ $t('legalMentions.mainTitle') }}
        </nuxt-link>
        <a
          v-ripple
          target="_blank"
          rel="noopener"
          class="footer-social-network footer-github"
          href="https://github.com/erwanjugand"
          aria-label="Github"
          :title="$t('footer.github')"
        >
          <PIcon type="brand" name="github" />
        </a>
        <a
          v-ripple
          target="_blank"
          rel="noopener"
          class="footer-social-network footer-linkedin"
          href="https://www.linkedin.com/in/erwan-jugand/"
          aria-label="Linkedin"
          :title="$t('footer.linkedin')"
        >
          <PIcon type="brand" name="linkedin" />
        </a>
        <nuxt-link class="footer-last-version" :to="localePath('changelog')">
          {{ lastVersion }}
        </nuxt-link>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    currentYear (): number {
      return new Date().getFullYear()
    },

    lastVersion (): string {
      return this.$state.releases[0].name
    }
  }
})
</script>

<style lang="scss">
.footer {
  z-index: 1;
  position: relative;
  color: $grey-0;
  background-color: $grey-87;

  &-easter-egg-button {
    width: 64px;
    height: 64px;
    padding: 8px;
    color: var(--c-text-secondary-1);
    fill: currentColor;
    border-radius: $br-small $br-small 0 0;
    transform: translateY(-50%);
    transition: transform var(--transition), color var(--transition);

    &:hover, &:focus {
      color: var(--c-text-secondary-2);
      transform: translateY(-100%);
    }

    &-container {
      position: absolute;
      top: 0;
      right: 10%;
    }
  }

  &-container {
    position: relative;
    margin-top: 16px;

    @media #{$medium-and-up} {
      margin-top: 32px;
    }
  }

  &-content {
    display: grid;
    gap: 16px 0;
    padding: 16px 0;
    align-items: center;
    justify-content: center;
    grid-template:
      'a a'
      'e e'
      'b c'
      'd d';

    @media #{$medium-and-up} {
      padding: 8px 0;
      gap: 0 16px;
      grid-template:
        'a b c d'
        'e b c d' / 1fr auto auto 1fr;
    }
  }

  &-copyright {
    grid-area: a;
  }

  &-legal-mentions {
    justify-self: start;
    grid-area: e;
  }

  &-social-network {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    justify-self: center;
    border-radius: $br-small;

    svg {
      width: 2.5em;
      fill: currentColor;
    }
  }

  &-github {
    grid-area: b;
  }

  &-linkedin {
    grid-area: c;
  }

  &-last-version {
    grid-area: d;

    @media #{$medium-and-up} {
      justify-self: end;
    }
  }
}
</style>
