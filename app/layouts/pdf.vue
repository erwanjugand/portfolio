<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { d, locale } = useI18n()
const isLoading = ref(false)

const download = async () => {
  isLoading.value = true

  const { data: pdfUrl } = await useFetch('/api/pdf', {
    query: {
      path: route.path,
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
  <div>
    <PHeader />
    <main class="pdf">
      <div class="pdf-toolbar">
        <h1 class="pdf-title" v-text="$t('layouts.pdf.title')" />
        <PButton :disabled="isLoading" @click="download">
          <PIcon type="regular" name="download" />
          {{ $t('layouts.pdf.download') }}
        </PButton>
      </div>
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
@page {
  size: a4;
  margin: 0;
}

.pdf {
  width: min(95% - var(--spacing-4) - env(safe-area-inset-left) - env(safe-area-inset-right), 800px);
  padding-block: var(--spacing-6) var(--spacing-16);
  margin-inline: auto;

  @media print {
    width: auto;
    padding: 0;
  }

  &-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-3);
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--spacing-4);

    @media print {
      display: none;
    }
  }

  &-title {
    font-size: 2.25em;
    font-weight: var(--font-weight-bold);

    @media #{breakpoints.$medium-and-up} {
      font-size: 3em;
    }
  }
}

@media screen and (prefers-reduced-motion: no-preference) {
  .pdf-toolbar {
    animation: reveal 0.9s var(--ease) 0.15s backwards;
  }
}
</style>
