<template>
  <section class="container about">
    <h2 v-text="$t('home.about.title')" />

    <div class="row">
      <div class="s12 l4 about__profil-container">
        <img class="about__profil elevation-1" src="/images/profil/erwan-jugand-x1.webp" srcset="/images/profil/erwan-jugand-x1.webp 1x, /images/profil/erwan-jugand-x2.webp 2x, /images/profil/erwan-jugand-x3.webp 3x" alt="">
      </div>
      <div class="s12 l8 about__content">
        <!-- eslint-disable vue/no-v-html -->
        <p class="about__text" v-html="$t('home.about.text1', { year: age })>" />
        <p class="about__text" v-html="$t('home.about.text2')" />
        <p class="about__text" v-html="$t('home.about.text3')" />
        <p class="about__text" v-html="$t('home.about.text4')" />
        <p class="about__text" v-html="$t('home.about.text5')" />
        <!-- eslint-enable vue/no-v-html -->
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    age () {
      return this.$dateFns.differenceInYears(new Date(), new Date(1997, 7, 17))
    }
  }
})
</script>

<style lang="scss">
.about {
  &__profil-container {
    display: flex;
    justify-content: center;
  }

  &__profil {
    width: 240+12px;
    height: 240+12px;
    border: 6px solid var(--c-background-3);
    border-radius: 50%;
    transition: width var(--transition), height var(--transition);

    @media #{$medium-and-up} {
      width: 320+12px;
      height: 320+12px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
  }

  &__text strong {
    font-weight: $fw-bold;
  }
}
</style>
