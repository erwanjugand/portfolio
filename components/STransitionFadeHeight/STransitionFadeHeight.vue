<style lang="scss" src="./STransitionFadeHeight.scss"></style>

<template>
  <transition-group
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
  </transition-group>
  <transition
    v-else
    name="fade-height"
    @enter="beforeEnterLeave"
    @after-enter="afterEnterLeave"
    @leave="beforeEnterLeave"
    @after-leave="afterEnterLeave"
  >
    <slot />
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    group: Boolean,
    tag: {
      type: String,
      default: 'div'
    }
  },

  methods: {
    afterEnterLeave (el:HTMLElement) {
      el.style.height = 'inherit'
    },
    beforeEnterLeave (el:HTMLElement) {
      el.style.height = el.scrollHeight + 'px'
    }
  }
})
</script>
