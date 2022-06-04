<template>
  <section class="information">
    <h2 class="container" v-text="$t('home.moreInformation.title')" />
    <ul class="row container">
      <li class="xs12 l4 information-content">
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
      <li class="xs12 l4 information-content">
        <PHexagon turned>
          <PIcon name="mapLocationDot" />
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
      <li class="xs12 l4 information-content">
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
  background-color: var(--c-background-bg-alt);

  .row {
    row-gap: 32px;
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
    text-decoration: none;
    border-radius: $br-regular;
  }
}
</style>
