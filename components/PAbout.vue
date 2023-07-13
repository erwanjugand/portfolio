<template>
  <PSection id="about">
    <div class="container row">
      <PH2 class="xs12">
        {{ $t('PAbout.title') }}
      </PH2>
      <picture class="xs12 l4 about-profile-container">
        <source
          srcset="/images/erwan-jugand-x1.avif, /images/erwan-jugand-x2.avif 2x, /images/erwan-jugand-x3.avif 3x"
          type="image/avif"
        />
        <img
          width="312"
          height="312"
          class="about-profile"
          src="/images/erwan-jugand-x1.webp"
          srcset="/images/erwan-jugand-x2.webp 2x, /images/erwan-jugand-x3.webp 3x"
          alt="Erwan Jugand"
        />
      </picture>
      <div class="xs12 l8 about-content">
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
    border: 6px solid var(--c-background-3);
    border-radius: 50%;
    background-color: var(--c-background-1);
    object-fit: cover;
    box-shadow:
      inset 0 0 0 1px var(--c-border),
      0 2px 1px -1px rgba($grey-100, 0.2),
      0 1px 1px 0 rgba($grey-100, 0.14),
      0 1px 3px 0 rgba($grey-100, 0.12);
    aspect-ratio: 1/1;

    &-container {
      display: flex;
      justify-content: center;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
  }

  &-text {
    transition: font-size var(--transition);

    @media #{$large-and-up} {
      font-size: 1.125em;
    }

    strong {
      font-weight: $fw-bold;
    }
  }
}
</style>
