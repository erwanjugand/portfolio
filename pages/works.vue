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
  },

  async asyncData ({ store, $axios }) {
    const datas = {}
    const datasRequired = [
      { name: 'works', path: 'works' },
      { name: 'workFilters', path: 'work_filters' }
    ]

    for (const dataRequired of datasRequired) {
      let values = store.state[dataRequired.name]
      if (!values.length) {
        const { data } = await $axios.get(`${process.env.API_URL}/${dataRequired.path}`)
        values = data
        store.commit(`set${dataRequired.name[0].toUpperCase() + dataRequired.name.slice(1)}`, data)
      }
      datas[dataRequired.name] = values
    }

    return datas
  }
}
</script>
