<style lang="scss" src="./PButton.scss"></style>

<template>
  <component :is="type" v-ripple="!loading" :disabled="loading" :class="['button', {'button-outlined': outlined, 'button-loading': loading}]" v-on="$listeners">
    <span>
      <PIcon v-if="icon" :name="icon" />
      <slot />
    </span>
    <PCircularLoader v-if="loading" :size="32" />
  </component>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: null
    },
    loading: Boolean,
    outlined: Boolean,
    to: {
      type: [String, Object, Boolean],
      default: null
    }
  },

  computed: {
    type () {
      return this.to ? 'nuxt-link' : this.$attrs.href ? 'a' : 'button'
    }
  }
}
</script>
