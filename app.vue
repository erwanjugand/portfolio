<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// TODO : remove hook to scroll top
const nuxtApp = useNuxtApp()
nuxtApp.hook('page:finish', () => {
  window.scrollTo({ top: 0 })
})

useColorMode()

const i18nHead = useLocaleHead({ addSeoAttributes: true })
useHead(() =>
  reactive({
    title: '',
    titleTemplate: title => 'Erwan Jugand' + (title && ` - ${title}`),
    htmlAttrs: {
      lang: i18nHead.value.htmlAttrs!.lang
    },
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ...(i18nHead.value.link || [])
    ],
    meta: [
      { name: 'viewport', content: 'width=320, initial-scale=1' },
      ...(i18nHead.value.meta || [])
    ]
  })
)
</script>
