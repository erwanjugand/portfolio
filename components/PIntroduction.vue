<template>
  <section class="introduction">
    <div class="introduction-content">
      <VTypical class="introduction-title" wrapper="h1" :loop="Infinity" :steps="['Erwan Jugand', 4000, 'Developpeur Front-End', 4000]" />
      <PButton href="/cv" outlined>
        Afficher mon CV
      </PButton>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.introduction {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 64px;
  background: no-repeat center bottom/cover;
  background-image:
    image-set(
      url("/images/background-mobile-x1.webp") 1x,
      url("/images/background-mobile-x1.webp") 2x
    );

  @media #{$large-and-up} {
    background-image:
      image-set(
        url("/images/background-desktop-x1.webp") 1x,
        url("/images/background-desktop-x1.webp") 2x
      );
  }

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20vh;
  }

  &-title {
    font-size: 2em;

    @media #{$medium-and-up} {
      font-size: 3em;
    }

    @media #{$large-and-up} {
      font-size: 4em;
    }

    &::after {
      content: "|";
      animation: blink 1s infinite step-start;
      font-weight: $fw-light;
    }
  }
}

@keyframes blink {
  50% { opacity: 0; }
}
</style>
