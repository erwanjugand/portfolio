<template>
  <main>
    <logo />
    <h1 class="title">
      portfolio-v3
    </h1>
    skills
    <pre>{{ skills }}</pre>
    experiences
    <pre>{{ experiences }}</pre>
    works
    <pre>{{ works }}</pre>
    works filters
    <pre>{{ workFilters }}</pre>
  </main>
</template>

<script>
export default {
  async asyncData ({ store, $axios }) {
    // Fetch datas if necessary
    const datas = {}
    const datasRequired = [
      { name: 'experiences', path: 'experiences' },
      { name: 'skills', path: 'skills' },
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
