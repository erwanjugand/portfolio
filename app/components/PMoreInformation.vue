<template>
  <PSection banner>
    <div class="container row">
      <PH2 class="xs12">
        {{ $t('PMoreInformation.title') }}
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
          :rel="information.externalLink ? 'noopener' : undefined"
          :target="information.externalLink ? '_blank' : undefined"
          class="information-link"
          :aria-label="`${$t(`PMoreInformation.${information.title}`)} : ${information.content}`"
        >
          <span v-text="$t(`PMoreInformation.${information.title}`)" />
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
    border-radius: var(--border-radius-regular);
    text-decoration: none;
    gap: 8px;
  }
}
</style>
