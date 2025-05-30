<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
useHead({
  title: t('pages.changelog.title'),
  meta: [{ name: 'description', content: t('pages.changelog.description') }],
})

defineI18nRoute({
  paths: {
    en: '/changelog',
    fr: '/journal-des-modifications',
  },
})

const route = useRoute()
const router = useRouter()

const getReleasesWithTagName = (tagName: string) =>
  releases.filter(release => release.tags.some(tag => tag.name === tagName))

const releasesFiltered = computed(() => {
  const query = route.query.filter?.toString()
  return query ? getReleasesWithTagName(query) : releases
})

const filter = (name: string) => {
  const queryValue = route.query.filter === name ? undefined : name
  router.replace({ query: { filter: queryValue } })
}
</script>

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
                <PIcon type="light" :name="release.major ? 'boxFull' : 'penRuler'" />
                {{ release.name }}
              </h2>
              <PTime :date="release.date" />
            </template>
            <ul class="release-tags">
              <li v-for="tag of release.tags" :key="tag.name">
                <button
                  v-ripple
                  :class="{
                    'release-tag': true,
                    'release-tag-darken': route.query.filter && route.query.filter !== tag.name,
                  }"
                  :style="{ backgroundColor: tag.color }"
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

<style lang="scss">
.release {
  max-width: 640px;
  margin: 0 32px 16px;

  &-wrapper:last-child {
    margin-bottom: 48px;
  }

  &-tags {
    display: flex;
    flex-wrap: wrap;

    li:not(:last-of-type) {
      margin-right: 16px;
    }
  }

  &-tag {
    margin-bottom: 16px;
    padding: 8px 16px;
    transition: opacity var(--transition);
    border-radius: var(--border-radius-regular);
    color: variables.$grey-0;
    font-size: 14px;
    line-height: 1.2;

    &-darken {
      opacity: 0.25;
    }
  }

  &-content {
    white-space: pre-line;
  }
}
</style>
