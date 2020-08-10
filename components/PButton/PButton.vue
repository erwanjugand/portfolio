<style lang="scss" src="./PButton.scss"></style>

<template>
  <component :is="type" v-ripple="!loading" :disabled="loading" :class="['button', {'button-outlined': outlined, 'button-loading': loading}]" v-on="$listeners">
    <PIcon v-if="icon" :name="icon" />
    <slot />
    <PCircularLoader v-if="loading" :size="32" />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    icon: String,
    loading: Boolean,
    outlined: Boolean,
    to: [String, Object, Boolean]
  },

  computed: {
    type (): 'nuxt-link' | 'a' | 'button' {
      return this.to ? 'nuxt-link' : this.$attrs.href ? 'a' : 'button'
    }
  }
})
</script>
