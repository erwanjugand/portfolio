<template>
  <div class="pdf-container">
    <PHeader />
    <div class="pdf">
      <slot />
    </div>
    <div class="pdf-action">
      <PButton :disabled="isLoading" @click="download">
        <PIcon :style="IconStyle.regular" name="download" />
        {{ $t('pages.pdf.download') }}
      </PButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { IconStyle } from '~/composables/useIcon'

const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const { d, locale } = useI18n()
const isLoading = ref(false)

const download = async () => {
  isLoading.value = true

  const { data: pdfUrl } = await useFetch('/api/pdf', {
    query: {
      url: runtimeConfig.public.siteUrl + route.path,
      fileName: `Erwan Jugand - ${locale.value} - ${d(new Date(), 'short')}.pdf`,
    },
  })

  if (pdfUrl.value?.pdf) {
    window.open(pdfUrl.value.pdf, '_blank')
  }

  isLoading.value = false
}
</script>

<style lang="scss">
@page {
  size: a4 portrait;
  margin: 0;
}

.pdf {
  width: 100%;
  margin: auto;
  overflow: hidden;
  transition: width var(--transition);
  background-color: $grey-0;
  box-shadow:
    inset 0 1px 0 0 var(--c-border),
    0 3px 1px -2px rgba($grey-100, 0.2),
    0 2px 2px 0 rgba($grey-100, 0.14),
    0 1px 5px 0 rgba($grey-100, 0.12);

  @media #{$large-and-up} {
    width: 960px;
    border-radius: 4px;
  }

  @media print {
    aspect-ratio: 210 / 297;
    border-radius: 0;
  }

  &-container {
    padding: 64px 0;
    transition: padding var(--transition);

    @media #{$large-and-up} {
      padding: 72px 8px;
    }

    @media print {
      padding: 0;
    }
  }

  &-action {
    display: flex;
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    justify-content: center;
    width: 100%;
    padding: 8px 16px;
    background-color: var(--c-background-3);
    box-shadow:
      inset 0 1px 0 0 var(--c-border),
      0 3px 1px -2px rgba($grey-100, 0.2),
      0 2px 2px 0 rgba($grey-100, 0.14),
      0 1px 5px 0 rgba($grey-100, 0.12);
    backdrop-filter: blur(20px);

    @media print {
      display: none;
    }

    .dark-mode &,
    .hacked-mode & {
      background-color: rgba($grey-87, 80%);

      @media (prefers-contrast: more) {
        background-color: rgba($grey-90, 90%);
      }
    }

    .light-mode & {
      background-color: rgba($grey-0, 80%);

      @media (prefers-contrast: more) {
        background-color: rgba($grey-0, 90%);
      }
    }
  }
}
</style>
