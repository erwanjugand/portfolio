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
    beforeEnterLeave (el) {
      el.style.height = el.scrollHeight + 'px'
    },

    afterEnterLeave (el) {
      el.style.height = 'inherit'
    }
  }
})
</script>
