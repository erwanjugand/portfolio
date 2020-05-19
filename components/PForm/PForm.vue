<style lang="scss" src="./PForm.scss"></style>

<template>
  <form @submit.prevent="trySubmit">
    <slot />
    <input v-if="secure" ref="fakeField" type="text" class="field-hidden" autocomplete="off">
  </form>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    data: {
      type: Object,
      default: null
    },
    secure: Boolean
  },

  methods: {
    trySubmit (event) {
      let submitable = true
      // Find PField component in slot
      const fields = this.$slots.default.filter(e => e.componentOptions && e.componentOptions.tag === 'PField')
      for (const field of fields) {
        const error = field.componentInstance.updateStatus()
        if (error) {
          submitable = false
        }
      }

      // If fack field is empty and form is submitable
      if ((!this.secure || this.$refs.fakeField.value === '') && submitable) {
        this.$emit('submit', this.data)
        // Change selectedOnce to false of PField component
        for (const field of fields) {
          field.componentInstance.reset()
        }
      }
    }
  }
}
</script>
