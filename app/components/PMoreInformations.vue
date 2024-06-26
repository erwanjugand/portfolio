<template>
  <PSection banner>
    <div class="container row">
      <PH2 class="xs12">
        {{ $t('PMoreInformations.title') }}
      </PH2>

      <div
        v-for="information of informations"
        :key="information.title"
        class="information xs12 m6 l4 scroll-animation-fade"
      >
        <PHexagon turned>
          <PIcon type="light" :name="information.icon" class="information-icon" />
        </PHexagon>
        <a
          v-ripple
          :href="information.cta"
          :rel="information.rel"
          :target="information.target"
          class="information-link"
          :aria-label="`${$t(`PMoreInformations.${information.title}`)} : ${information.content}`"
        >
          <span v-text="$t(`PMoreInformations.${information.title}`)" />
          <span v-text="information.content" />
        </a>
      </div>
    </div>
  </PSection>
</template>

<script lang="ts" setup>
const { informations } = useStore()
</script>

<style lang="scss">
.information {
  --scroll-animation-y: 48px;

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
