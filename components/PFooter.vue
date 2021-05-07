<template>
  <footer class="footer elevation-1">
    <div class="container">
      <div class="footer-copyright">
        <p v-text="$t('footer.copyright', { year: currentYear })" />
        <nuxt-link :to="localePath('legal-mentions')">
          {{ $t('legalMentions.mainTitle') }}
        </nuxt-link>
      </div>

      <div class="footer-social-networks">
        <a
          v-ripple
          target="_blank"
          rel="noopener"
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
          href="https://www.linkedin.com/in/erwan-jugand/"
          aria-label="Linkedin"
          :title="$t('footer.linkedin')"
        >
          <PIcon type="brand" name="linkedin" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    currentYear (): number {
      return new Date().getFullYear()
    }
  }
})
</script>

<style lang="scss">
.footer {
  margin-top: 16px;
  color: $white;
  background-color: $black-87;

  @media #{$medium-and-up} {
    margin-top: 32px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;

    @media #{$medium-and-up} {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &-copyright {
    padding-top: 16px;

    @media #{$medium-and-up} {
      padding: 0;
    }

    a {
      display: inline-flex;
      padding: 4px 0;
    }
  }

  &-social-networks {
    display: flex;
    gap: 16px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;

      svg {
        width: 2.5em;
        fill: currentColor;
      }
    }
  }
}
</style>
