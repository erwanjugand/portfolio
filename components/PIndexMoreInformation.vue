<template>
  <section class="container information">
    <h2 v-text="$t('home.moreInformation.title')" />
    <ul class="row">
      <li class="s12 l4 information-content">
        <PHexagon turned>
          <PIcon name="phone" />
        </PHexagon>
        <a
          v-ripple
          href="tel:0618073023"
          class="information-link"
        >
          <span v-text="$t('home.moreInformation.phoneTitle')" />
          <span v-text="'06 18 07 30 23'" />
        </a>
      </li>
      <li class="s12 l4 information-content">
        <PHexagon turned>
          <PIcon name="mapMarkedAlt" />
        </PHexagon>
        <a
          v-ripple
          target="_blank"
          rel="noopener"
          href="https://goo.gl/maps/x2VLbukCJ4L2"
          class="information-link"
        >
          <span v-text="$t('home.moreInformation.addressTitle')" />
          <span v-text="'35000 Rennes, France'" />
        </a>
      </li>
      <li class="s12 l4 information-content">
        <PHexagon turned>
          <PIcon name="envelope" />
        </PHexagon>
        <a
          v-ripple
          href="mailto:erwan.jugand@gmail.com"
          class="information-link"
        >
          <span v-text="$t('home.moreInformation.emailTitle')" />
          <span v-text="'erwan.jugand@gmail.com'" />
        </a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
.information {
  .row {
    row-gap: 32px;
    width: 100%;
  }

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      height: 4em;
    }
  }

  &-link {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    margin-top: 24px;
    padding: 8px 16px;
    border-radius: $br-regular;
  }
}
</style>
