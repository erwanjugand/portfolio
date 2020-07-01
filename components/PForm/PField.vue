<style lang="scss" src="./PField.scss"></style>

<template>
  <div class="field">
    <input
      v-if="type === 'text' || type === 'email' || type === 'password'"
      :id="id"
      :class="classes"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @focus="hasFocused = true"
      @blur="hasFocused = false"
    >
    <textarea
      v-if="type === 'textarea'"
      :id="id"
      ref="textarea"
      :style="styles"
      :value="value"
      :class="classes"
      @input="$emit('input', $event.target.value); autoSize()"
      @focus="hasFocused = true"
      @blur="hasFocused = false"
    />
    <label v-if="label" :for="id">
      <span v-text="label" />
    </label>
    <transition name="field-message-error">
      <div v-if="errorMessages.length" class="field-message-error" v-text="errorMessages[0]" />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'
import uniqueId from '~/utils/uniqueId'

export default Vue.extend({
  props: {
    label: String,
    maxRows: Number,
    minRows: Number,
    required: Boolean,
    type: {
      type: String,
      default: 'text',
      validator (value) {
        return ['text', 'password', 'email', 'textarea'].includes(value)
      }
    },
    value: String
  },

  data () {
    return {
      emailError: false,
      errorMessages: [] as TranslateResult[],
      hasFocused: false,
      requiredError: false,
      selectedOnce: false
    }
  },

  computed: {
    classes (): object {
      return {
        'has-content': this.value,
        error: this.requiredError || this.emailError
      }
    },
    id (): string {
      return this.label ? uniqueId('field-') : ''
    },
    styles (): Partial<CSSStyleDeclaration> {
      return {
        maxHeight: this.maxRows ? `${this.maxRows * 20 + 28}px` : undefined,
        minHeight: this.minRows ? `${this.minRows * 20 + 28}px` : undefined
      }
    }
  },

  watch: {
    hasFocused () {
      this.updateStatus()
    },
    value () {
      if (this.selectedOnce) {
        this.updateStatus()
      }
    }
  },

  methods: {
    autoSize () {
      const textarea = this.$refs.textarea as HTMLTextAreaElement
      textarea.style.height = '0px'
      textarea.style.height = textarea.scrollHeight + 'px'
    },
    reset () {
      this.selectedOnce = false
    },
    updateStatus () {
      this.selectedOnce = true
      // Check the validation of the field
      this.requiredError = this.selectedOnce && !this.hasFocused && this.required && !this.value
      this.emailError = this.selectedOnce && !this.hasFocused && this.type === 'email' && !this.hasFocused && !RegExp(/([\w.-]+)@([\w.-]+)\.(\w+)/).test(this.value)
      const errorMessages: TranslateResult[] = []
      if (this.requiredError) {
        errorMessages.push(this.$t('form.required'))
      }
      if (this.emailError) {
        errorMessages.push(this.$t('form.invalidEmail'))
      }
      this.errorMessages = errorMessages
      // Return list of errors for PForm
      return !!errorMessages.length
    }
  }
})
</script>
