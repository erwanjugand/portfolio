<template>
  <section class="container contact">
    <h2 v-text="$t('home.contact.title')" />

    <div class="envelope-container">
      <div class="envelope">
        <div class="envelope-top" />
        <div class="envelope-center" />
        <div class="paper elevation-3">
          <p class="paper-text" v-text="$t('home.contact.description')" />

          <div class="paper-action">
            <PButton :to="localePath('contact')">
              {{ $t('home.contact.action') }}
            </PButton>
          </div>
        </div>
        <div class="envelope-bottom">
          <div class="envelope-bottom-left" />
          <div class="envelope-bottom-left" />
          <div class="envelope-bottom-right" />
          <div class="envelope-bottom-center" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use 'sass:math' as *;

.envelope {
  position: relative;
  width: 40em;
  font-size: .75rem;
  border-radius: $br-large;
  overflow: hidden;

  &-container {
    height: 480px;
    margin-bottom: -80px;
    overflow: hidden;
  }

  &-top {
    $width: div(round(sqrt(div(40 * 40, 2)) * 100) * 1em, 100);
    width: $width;
    height: $width;
    margin-top: div(round(sqrt(div(40 * 40, 2)) * 100) * -1em, 2 * 100);
    background: var(--c-enveloppe-background-3);
    border-top-left-radius: $br-large;
    transform: rotateX(45deg) rotateZ(45deg);
    transform-origin: bottom left;
  }

  &-center {
    position: absolute;
    bottom: 0;
    width: 40em;
    height: 20em;
    background: var(--c-enveloppe-background-3);
    border-radius: 0 0 $br-large $br-large;
  }

  &-bottom {
    filter: drop-shadow(0 0 2px var(--c-enveloppe-shadow));

    &-left, &-right {
      position: absolute;
      bottom: 0;
      width: 30em;
      height: 20em;
      background: var(--c-enveloppe-background-1);
    }

    &-left {
      left: 0;
      clip-path: polygon(0% 0, 100% 100%, 0 100%);
    }

    &-right {
      right: 0;
      clip-path: polygon(100% 0, 100% 100%, 0 100%);
    }

    &-center {
      position: absolute;
      bottom: 0;
      left: calc(50% - 10em);
      width: 20em;
      height: 6.7em;
      background: var(--c-enveloppe-background-2);
      opacity: .5;
      clip-path: polygon(50% 0, 100% 100%, 0 100%);
    }
  }

  @media #{$medium-and-up} {
    font-size: 1rem;
  }
}

.paper {
  width: min(90vw, 70%);
  height: 20em;
  margin: auto;
  padding: 2em;
  border-radius: $br-regular;
  transform: translateY(-1em);
  transition: transform var(--transition);

  .envelope:hover & {
    transform: translateY(-3em);
  }

  &-text {
    margin-bottom: 2em;
    font-size: 1rem;
  }

  &-action {
    display: flex;
    justify-content: center;
    font-size: 1rem;
  }
}
</style>
