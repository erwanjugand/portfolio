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
  tag?: string
}

withDefaults(defineProps<Props>(), {
  group: false,
  tag: 'div'
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
    transition: opacity 0.25s ease, height 0.25s ease;

    @media (prefers-reduced-motion: reduce) {
      transition: 0s;
    }
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
