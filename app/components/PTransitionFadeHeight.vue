<script setup lang="ts">
const { tag = 'div' } = defineProps<{
  group?: boolean
  tag?: keyof HTMLElementTagNameMap
}>()

const beforeEnterLeave = (el: Element) => {
  if (!(el instanceof HTMLElement)) return
  el.style.height = el.scrollHeight + 'px'
}

const afterEnterLeave = (el: Element) => {
  if (!(el instanceof HTMLElement)) return
  el.style.removeProperty('height')
}
</script>

<template>
  <component v-if="group" :is="tag">
    <TransitionGroup
      name="fade-height"
      @enter="beforeEnterLeave"
      @after-enter="afterEnterLeave"
      @leave="beforeEnterLeave"
      @after-leave="afterEnterLeave"
    >
      <slot />
    </TransitionGroup>
  </component>
  <Transition
    v-else
    name="fade-height"
    @enter="beforeEnterLeave"
    @after-enter="afterEnterLeave"
    @leave="beforeEnterLeave"
    @after-leave="afterEnterLeave"
  >
    <slot />
  </Transition>
</template>

<style lang="scss">
.fade-height {
  &-enter-active,
  &-leave-active {
    overflow: hidden;
    transition:
      opacity var(--transition),
      height var(--transition);
  }

  &-enter-from,
  &-leave-to {
    height: 0;
    opacity: 0;
  }

  &-leave-to {
    height: 0 !important;
  }
}
</style>
