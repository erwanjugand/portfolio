
<template>
  <div class="pdf-container">
    <div class="pdf">
      <slot />
    </div>
    <div class="pdf-action">
      <PButton :disabled="loading" @click="download">
        <PIcon type="regular" name="download" />
        {{ $t('pages.pdf.download') }}
      </PButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const { d, locale } = useI18n()

const loading = ref(false)

const download = async () => {
  loading.value = true
  const options: object = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': runtimeConfig.public.rapidApiKey,
      'X-RapidAPI-Host': 'api2pdf-api2pdf-v1.p.rapidapi.com'
    },
    body: {
      url: runtimeConfig.public.siteUrl + route.path,
      fileName: `CV Erwan Jugand - ${locale.value} - ${d(new Date(), 'short')}.pdf`,
      options: {
        landscape: false
      }
    }
  }

  const request = await useFetch<{pdf: string}>('https://api2pdf-api2pdf-v1.p.rapidapi.com/chrome/url', options)
    .then(response => response)
    .catch(() => undefined)

  const pdfUrl = request?.data.value?.pdf
  if (pdfUrl) {
    window.open(pdfUrl, '_blank')
  }

  loading.value = false
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
  aspect-ratio: 210 / 297;

  @media #{$large-and-up} {
    width: 960px;
    border-radius: 4px;
  }

  @media print {
    border-radius: 0;
  }

  &-container {
    transition: padding var(--transition);

    @media #{$large-and-up} {
      padding: 8px 8px 72px;
    }

    @media print {
      padding: 0;
    }
  }

  &-action {
    display: flex;
    position: fixed;
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

    @media print {
      display: none;
    }
  }
}
</style>
