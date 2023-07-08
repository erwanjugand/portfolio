<template>
  <TransitionGroup
    v-if="group"
    name="fade-height"
    :tag="tag"
    v-bind="$attrs"
    @enter="beforeEnterLeave"
    @after-enter="afterEnterLeave"
    @leave="beforeEnterLeave"
    @after-leave="afterEnterLeave"
  >
    <slot />
  </TransitionGroup>
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

<script setup lang="ts">
interface Props {
  group?: boolean
  tag?: keyof HTMLElementTagNameMap
}

withDefaults(defineProps<Props>(), {
  group: false,
  tag: 'div',
})

const beforeEnterLeave = (el: any) => {
  el.style.height = el.scrollHeight + 'px'
}

const afterEnterLeave = (el: any) => {
  el.style.removeProperty('height')
}
</script>

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
