<template>
  <main>
    <logo />
    <h1 class="title">
      portfolio-v3
    </h1>
    skills
    <pre>{{ $store.state.skills }}</pre>
    experiences
    <pre>{{ $store.state.experiences }}</pre>
    works
    <pre>{{ $store.state.works }}</pre>
    works filters
    <pre>{{ $store.state.worksFilters }}</pre>
  </main>
</template>
<script>

import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
