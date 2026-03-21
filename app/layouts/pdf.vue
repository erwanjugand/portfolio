<script setup lang="ts">
import { useI18n } from 'vue-i18n'

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

<template>
  <div class="pdf-container">
    <PHeader />
    <div class="pdf">
      <slot />
    </div>
    <div class="pdf-action">
      <PButton :disabled="isLoading" @click="download">
        <PIcon type="regular" name="download" />
        {{ $t('pages.pdf.download') }}
      </PButton>
    </div>
  </div>
</template>

<style lang="scss">
@page {
  size: a4 portrait;
  margin: 0;
}

.pdf {
  width: 100%;
  margin: auto;
  overflow: hidden;
  background-color: #fff;
  box-shadow:
    inset 0 1px 0 0 var(--c-border),
    0 3px 1px -2px rgb(0 0 0 / 20%),
    0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  transition: width var(--transition);

  @media #{breakpoints.$large-and-up} {
    width: 960px;
    border-radius: 4px;
  }

  @media print {
    aspect-ratio: 210 / 297;
    border-radius: 0;
  }

  &-container {
    padding-block: 64px;
    transition: padding var(--transition);

    @media #{breakpoints.$large-and-up} {
      padding: 72px 8px;
    }

    @media print {
      padding: 0;
    }
  }

  &-action {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 8px 16px calc(8px + var(--safe-area-bottom));
    background-color: var(--c-background-3);
    box-shadow:
      inset 0 1px 0 0 var(--c-border),
      0 3px 1px -2px rgb(0 0 0 / 20%),
      0 2px 2px 0 rgb(0 0 0 / 14%),
      0 1px 5px 0 rgb(0 0 0 / 12%);
    backdrop-filter: blur(20px);

    @media print {
      display: none;
    }

    .dark-mode &,
    .hacked-mode & {
      background-color: color-mix(in srgb, var(--c-gray-87) 80%, transparent);

      @media (prefers-contrast: more) {
        background-color: color-mix(in srgb, var(--c-gray-90) 90%, transparent);
      }
    }

    .light-mode & {
      background-color: rgb(255 255 255 / 80%);

      @media (prefers-contrast: more) {
        background-color: rgb(255 255 255 / 90%);
      }
    }
  }
}
</style>
