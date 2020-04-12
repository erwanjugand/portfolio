<template>
  <main>
    <nuxt-link v-for="work in $store.state.works" :key="work.id" :to="localePath({ name: 'work-slug', params: { slug: work.slug } })">
      {{ work.title }}
    </nuxt-link>
  </main>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      fr: '/travaux',
      en: '/works'
    }
  }
}
// :to="localePath({ name: 'category-slug', params: { slug: category.slug } })">
</script>
