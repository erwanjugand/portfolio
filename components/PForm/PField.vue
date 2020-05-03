<style lang="scss" src="./PField.scss"></style>

<template>
  <div class="field">
    <input
      v-if="type === 'text' || type === 'email' || type === 'password'"
      :id="id"
      :class="classes"
      :type="type"
      :value="value"
      :required="required"
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
      <div v-if="errorMessages.length" class="field-message-error">
        {{ errorMessages[0] }}
      </div>
    </transition>
  </div>
</template>

<script>
import uniqueId from '~/utils/uniqueId'

export default {
  props: {
    label: {
      type: String,
      default: null
    },
    maxRows: {
      type: Number,
      default: null
    },
    minRows: {
      type: Number,
      default: null
    },
    required: Boolean,
    type: {
      type: String,
      default: 'text',
      validator (value) {
        return ['text', 'password', 'email', 'textarea'].includes(value)
      }
    },
    value: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      errorMessages: [],
      emailError: false,
      hasFocused: false,
      requiredError: false,
      selectedOnce: false
    }
  },

  computed: {
    classes () {
      return {
        'has-content': this.value,
        'error': this.requiredError || this.emailError
      }
    },
    id () {
      return this.label ? uniqueId('field-') : null
    },
    styles () {
      return {
        minHeight: this.minRows ? `${this.minRows * 20 + 28}px` : null,
        maxHeight: this.maxRows ? `${this.maxRows * 20 + 28}px` : null
      }
    }
  },

  watch: {
    value () {
      this.updateStatus()
    },
    hasFocused () {
      this.updateStatus()
    }
  },

  methods: {
    updateStatus () {
      this.selectedOnce = true
      this.requiredError = this.selectedOnce && !this.hasFocused && this.required && !this.value
      this.emailError = this.selectedOnce && !this.hasFocused && this.type === 'email' && !this.hasFocused && !RegExp(/([\w.-]+)@([\w.-]+)\.(\w+)/).test(this.value)
      const errorMessages = []
      if (this.requiredError) {
        errorMessages.push(this.$t('form.required'))
      }
      if (this.emailError) {
        errorMessages.push(this.$t('form.invalidEmail'))
      }
      this.errorMessages = errorMessages
    },
    autoSize () {
      const textarea = this.$refs.textarea
      textarea.style.height = '0px'
      textarea.style.height = textarea.scrollHeight + 'px'
    }
  }
}
</script>
