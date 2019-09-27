<template>
  <main>
    <PHeader />
    <PDrawer />
    <div id="content">
      <nuxt />
      <PFooter />
    </div>
  </main>
</template>

<script>
import PDrawer from '~/components/PDrawer/PDrawer.vue'
import PFooter from '~/components/PFooter/PFooter.vue'
import PHeader from '~/components/PHeader/PHeader.vue'

export default {
  components: {
    PDrawer,
    PFooter,
    PHeader
  }
}
</script>
