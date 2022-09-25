<template>
  <PSection banner>
    <div class="container row">
      <PH2 class="xs12">
        {{ $t('PMoreInformations.title') }}
      </PH2>

      <div class="information xs12 m6 l4">
        <PHexagon turned>
          <PIcon name="phone" class="information-icon" />
        </PHexagon>
        <a v-ripple href="tel:0618073023" class="information-link">
          <span v-text="$t('PMoreInformations.phone')" />
          <span v-text="'06 18 07 30 23'" />
        </a>
      </div>

      <div class="information xs12 m6 l4">
        <PHexagon turned>
          <PIcon name="mapLocationDot" class="information-icon" />
        </PHexagon>
        <a v-ripple target="_blank" rel="noopener" href="https://goo.gl/maps/x2VLbukCJ4L2" class="information-link">
          <span v-text="$t('PMoreInformations.address')" />
          <span v-text="'35000 Rennes, France'" />
        </a>
      </div>

      <div class="information xs12 s6 l4">
        <PHexagon turned>
          <PIcon name="envelope" class="information-icon" />
        </PHexagon>
        <a v-ripple href="mailto:erwan.jugand@gmail.com" class="information-link">
          <span v-text="$t('PMoreInformations.email')" />
          <span v-text="'erwan.jugand@gmail.com'" />
        </a>
      </div>
    </div>
  </PSection>
</template>

<style lang="scss">
.information {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-icon {
    height: 4em;
  }

  &-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
    padding: 8px 16px;
    border-radius: $br-regular;
    text-decoration: none;
    gap: 8px;
  }
}
</style>
