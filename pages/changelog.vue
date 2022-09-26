<template>
  <main>
    <PSection>
      <PH1>
        {{ $t('pages.changelog.title') }}
      </PH1>
      <PTransitionFadeHeight group tag="ul">
        <li v-for="release of releasesFiltered" :key="release.name" class="release-wrapper">
          <PCard tag="article" class="release">
            <template #header>
              <h2>
                <PIcon :name="release.major ? 'boxFull' : 'penRuler'" />
                {{ release.name }}
              </h2>
              <PTime :date="release.date" />
            </template>
            <ul class="release-tags">
              <li v-for="tag of release.tags" :key="tag.name">
                <button
                  v-ripple
                  :class="{ 'release-tag': true, 'release-tag-darken': filterTag && tag.name !== filterTag }"
                  :style="{ 'backgroundColor': tag.color }"
                  @click.prevent="filter(tag.name)"
                  v-text="$t(`pages.changelog.tags.${tag.name}`)"
                />
              </li>
            </ul>
            <p class="release-content" v-text="$t(`pages.changelog.items.${release.name}`)" />
          </PCard>
        </li>
      </PTransitionFadeHeight>
    </PSection>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useStore } from '~/store'

const { t } = useI18n()
useHead({
  title: t('pages.changelog.title')
})

const { releases } = useStore()
const filterTag = ref(null as string | null)
const releasesFiltered = computed(() => releases.filter(release => !filterTag.value || release.tags.some(tag => tag.name === filterTag.value))!)
const filter = (name: string) => { filterTag.value = (filterTag.value === name ? null : name) }
</script>

<style lang="scss">
.release {
  max-width: 640px;
  margin: 0 auto 16px;

  &-wrapper:last-child {
    margin-bottom: 48px;
  }

  &-tags {
    display: flex;

    li:not(:last-of-type) {
      margin-right: 16px;
    }
  }

  &-tag {
    margin-bottom: 16px;
    padding: 8px 16px;
    transition: opacity var(--transition);
    border-radius: $br-regular;
    color: $grey-0;
    font-size: 14px;
    line-height: 1.2;

    &-darken {
      opacity: 0.25;
    }
  }

  &-content {
    white-space: pre-line;
  }

  .release-content li::before {
    content: "-";
    padding: 0 8px;
  }
}
</style>
