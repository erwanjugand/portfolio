<template>
  <div>
    <PHeader />
    <PDrawer />
    <div id="content">
      <nuxt />
      <PFooter />
    </div>
  </div>
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
