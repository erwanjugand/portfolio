<script setup lang="ts">
import InformationFrame from '~/assets/images/information-frame.svg'
</script>

<template>
  <PSection id="more-information" banner>
    <div class="container">
      <PHeading>
        {{ $t('PMoreInformation.title') }}
      </PHeading>
      <ul class="informations">
        <li v-for="information of informations" :key="information.title" class="reveal">
          <a
            :href="information.cta"
            :target="information.externalLink ? '_blank' : undefined"
            class="information"
            :aria-label="
              $t('PMoreInformation.label', {
                title: $t(`PMoreInformation.${information.title}`),
                content: information.content,
              })
            "
          >
            <span class="information-hexagon">
              <InformationFrame class="information-frame" />
              <PIcon type="light" :name="information.icon" class="information-icon" />
            </span>
            <span class="information-text">
              <span class="information-title" v-text="$t(`PMoreInformation.${information.title}`)" />
              <span class="information-content" v-text="information.content" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  </PSection>
</template>

<style lang="scss">
.informations {
  display: grid;
  gap: var(--spacing-6);

  @media #{breakpoints.$large-and-up} {
    grid-template-columns: repeat(3, 1fr);
  }
}

.information {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  align-items: center;
  color: var(--c-ink);
  text-align: center;

  &-hexagon {
    display: grid;
    place-items: center;
    width: 96px;
  }

  &-frame,
  &-icon {
    grid-area: 1 / 1;
  }

  &-frame {
    width: 100%;
    color: var(--c-accent-ink);
  }

  &-icon {
    height: 2em;
    fill: var(--c-accent-ink);
  }

  &-text {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
  }

  &-title {
    font-size: 0.75em;
    font-weight: var(--font-weight-semibold);
    color: var(--c-ink-2);
    text-transform: uppercase;
  }

  &-content {
    font-size: 1.125em;
    font-weight: var(--font-weight-semibold);
    overflow-wrap: anywhere;
    background: linear-gradient(90deg, var(--c-g1), var(--c-g2)) 0 100% / 0 2px no-repeat;
    transition: background-size var(--transition);
  }

  &:hover &-content {
    background-size: 100% 2px;
  }
}
</style>
