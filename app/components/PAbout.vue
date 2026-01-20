<template>
  <PSection id="about">
    <div class="container row">
      <PH2 class="xs12">
        {{ $t('PAbout.title') }}
      </PH2>
      <NuxtPicture
        class="xs12 l4 about-profile-container scroll-animation-fade"
        src="/images/erwan-jugand.jpg"
        legacy-format="webp"
        sizes="300px"
        densities="x1 x2 x3"
        :img-attrs="{ class: 'about-profile', width: 312, height: 312 }"
        :alt="$t('PAbout.profileAlt')"
      />
      <div class="xs12 l8 about-content scroll-animation-fade">
        <I18nT tag="p" class="about-text" keypath="PAbout.text1" scope="global">
          <template #name>
            <strong>Erwan Jugand</strong>
          </template>
          <template #job>
            <strong>{{ $t('PAbout.text1Job') }}</strong>
          </template>
        </I18nT>
        <I18nT tag="p" class="about-text" keypath="PAbout.text2" scope="global">
          <template #school>
            <strong>Digital Campus</strong>
          </template>
          <template #enterprise>
            <strong>Steeple</strong>
          </template>
        </I18nT>
        <p class="about-text" v-text="$t('PAbout.text3')" />
        <p class="about-text" v-text="$t('PAbout.text4')" />
      </div>
    </div>
  </PSection>
</template>

<style lang="scss">
.about {
  &-profile {
    flex: 0 1 312px;
    aspect-ratio: 1/1;
    object-fit: cover;
    background-color: var(--c-background-1);
    border: 6px solid var(--c-background-3);
    border-radius: 50%;
    box-shadow:
      inset 0 0 0 1px var(--c-border),
      0 2px 1px -1px rgba(variables.$grey-100, 0.2),
      0 1px 1px 0 rgba(variables.$grey-100, 0.14),
      0 1px 3px 0 rgba(variables.$grey-100, 0.12);

    &-container {
      display: flex;
      justify-content: center;

      --scroll-animation-y: 48px;

      @media #{variables.$large-and-up} {
        --scroll-animation-y: 0;
        --scroll-animation-x: -48px;
      }
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;

    --scroll-animation-y: 48px;

    @media #{variables.$large-and-up} {
      --scroll-animation-y: 0;
      --scroll-animation-x: -48px;
    }
  }

  &-text {
    transition: font-size var(--transition);

    @media #{variables.$large-and-up} {
      font-size: 1.125em;
    }

    strong {
      font-weight: var(--font-weight-bold);
    }
  }
}
</style>
