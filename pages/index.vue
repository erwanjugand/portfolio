<template>
  <main>
    <logo />
    <h1 class="title">
      portfolio-v3
    </h1>
    skills
    <pre>{{ $store.state.skills }}</pre>
    pages
    <pre>{{ $store.state.pages }}</pre>
    experiences
    <pre>{{ $store.state.experiences }}</pre>
    works
    <pre>{{ $store.state.works }}</pre>
    works filters
    <pre>{{ $store.state.worksFilters }}</pre>
  </main>
</template>

<script>
export default {
  head () {
    return {
      meta: [
        { hid: 'description', name: 'description', content: this.$store.state.pages.find(p => p.name === 'index').metaDescription }
      ]
    }
  }
}
</script>
