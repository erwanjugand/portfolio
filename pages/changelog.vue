<template>
  <main>
    <section class="container">
      <h1 :background="$t('releases.mainTitle')" v-text="$t('releases.mainTitle')" />
      <PTransitionFadeHeight group tag="ul">
        <li v-for="release of releasesFiltered" :key="`release-${release.id}`" class="release-wrapper">
          <PCard tag="article" class="release">
            <template #header>
              <h2>
                <PIcon :name="release.major ? 'boxFull' : 'pencilRuler'" />
                {{ release.name }}
              </h2>
              <PTime :date="release.date" />
            </template>
            <ul class="release-tags">
              <li v-for="tag of release.tags" :key="`${release.id}-${tag.id}`">
                <button
                  v-ripple
                  :class="['release-tag', 'elevation-2', { 'release-tag-darken': filterTag && tag.id !== filterTag }]"
                  :style="{ backgroundColor: tag.color }"
                  @click.prevent="filter(tag.id)"
                  v-text="$t(`releases.tags.${tag.name}`)"
                />
              </li>
            </ul>
            <p class="release-content" v-text="$t(`releases.items.${release.name}`)" />
          </PCard>
        </li>
      </PTransitionFadeHeight>
    </section>
    <PFooter />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import type { MetaInfo } from 'vue-meta'
import { Release } from 'models'

export default Vue.extend({
  data () {
    return {
      filterTag: null as number | null
    }
  },

  head (): MetaInfo {
    return {
      title: this.$t('releases.metaTitle').toString()
    }
  },

  nuxtI18n: {
    paths: {
      fr: '/journal-des-modifications',
      en: '/changelog'
    }
  },

  computed: {
    releasesFiltered (): Release[] {
      return this.$state.releases.flatMap(r => !this.filterTag || r.tags.some(t => t.id === this.filterTag) ? r : [])
    }
  },

  methods: {
    filter (id: number) {
      this.filterTag = this.filterTag === id ? null : id
    }
  }
})
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
    font-size: 14px;
    line-height: 1.2;
    color: $grey-0;
    border-radius: $br-regular;
    transition: opacity var(--transition);

    &-darken {
      opacity: .25;
    }
  }

  &-content {
    white-space: pre-line;
  }

  .release-content li::before {
    content: '-';
    padding: 0 8px;
  }
}
</style>
