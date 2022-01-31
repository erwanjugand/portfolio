<template>
  <section class="container about">
    <h2 v-text="$t('home.about.title')" />

    <div class="row about-row">
      <div class="xs12 l4 about-profil-container">
        <img class="about-profil elevation-1" src="/images/profil/erwan-jugand-x1.webp" srcset="/images/profil/erwan-jugand-x1.webp 1x, /images/profil/erwan-jugand-x2.webp 2x, /images/profil/erwan-jugand-x3.webp 3x" alt="">
      </div>
      <div class="xs12 l8 about-content">
        <!-- eslint-disable vue/no-v-html -->
        <p class="about-text" v-html="$t('home.about.text1', { year: age })" />
        <p class="about-text" v-html="$t('home.about.text2')" />
        <p class="about-text" v-html="$t('home.about.text3')" />
        <p class="about-text" v-html="$t('home.about.text4')" />
        <p class="about-text" v-html="$t('home.about.text5')" />
        <!-- eslint-enable vue/no-v-html -->
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { differenceInYears } from '~/utils/date'

export default Vue.extend({
  computed: {
    age (): number {
      return differenceInYears(new Date(), new Date(1997, 7, 17))
    }
  }
})
</script>

<style lang="scss">
.about {
  &-row {
    row-gap: 32px;
  }

  &-profil-container {
    display: flex;
    justify-content: center;
  }

  &-profil {
    width: 256+12px;
    max-width: 100%;
    height: 256+12px;
    border: 6px solid var(--c-background-3);
    border-radius: 50%;
    transition: width var(--transition), height var(--transition);
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
  }

  &-text strong {
    font-weight: $fw-bold;
  }
}
</style>
