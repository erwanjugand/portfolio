<template>
  <main>
    ChangeLog
    <div v-for="release of $store.state.releases" :key="release.id">
      {{ release.tag_name }}
      {{ release.name }}
      {{ release.published_at }}
      {{ release.body }}
    </div>
  </main>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      fr: '/journal-des-modifications',
      en: '/changelog'
    }
  }
}
</script>
