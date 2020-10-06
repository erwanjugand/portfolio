<template>
  <form @submit.prevent="trySubmit">
    <slot />
    <input v-if="secure" ref="fakeField" type="text" class="field-hidden" autocomplete="off">
  </form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    data: Object,
    secure: Boolean
  },

  methods: {
    trySubmit () {
      let submitable = true
      // Find PField component in slot
      const fields = this.$slots.default?.filter(e => e.componentOptions && e.componentOptions.tag === 'PField') || []
      for (const field of fields) {
        // @ts-ignore
        const error = field.componentInstance!.updateStatus()
        if (error) {
          submitable = false
        }
      }

      // If fake field is empty and form is submitable
      if ((!this.secure || (this.$refs.fakeField as HTMLInputElement).value === '') && submitable) {
        this.$emit('submit', this.data)
        // Change selectedOnce to false of PField component
        for (const field of fields) {
          // @ts-ignore
          field.componentInstance!.reset()
        }
      }
    }
  }
})
</script>

<style lang="scss">
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.field-hidden {
  width: 0;
  height: 0;
  border-style: none;
}
</style>
