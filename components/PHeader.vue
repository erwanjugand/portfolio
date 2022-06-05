<template>
  <header class="header">
    <div class="container">
      <PLogo class="header-logo" />
      <component :is="titleTag" style="">Erwan Jugand</component>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  position: fixed;
  width: 100%;

  &-logo {
    width: 70px;
    fill: var(--c-primary);
  }
}
</style>

<script lang="ts">
import { defineComponent, ref, watch  } from 'vue'

export default defineComponent({
  setup() {
    const route = useRoute()
    let titleTag = ref()

    watch (
      () => route.name,
      value => { titleTag.value = value === 'index' ? 'h1' : 'p' },
      { immediate: true }
    )

    return {
      titleTag
    }
  },
})
</script>
