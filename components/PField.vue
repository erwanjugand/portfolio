<template>
  <div class="field">
    <input
      v-if="isInput"
      :id="id"
      :class="['field-input', classes]"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @focus="hasFocused = true"
      @blur="hasFocused = false"
    >
    <textarea
      v-else
      :id="id"
      ref="textarea"
      :style="styles"
      :value="value"
      :class="['field-textarea', classes]"
      @input="$emit('input', $event.target.value); autoSize()"
      @focus="hasFocused = true"
      @blur="hasFocused = false"
    />
    <label v-if="label" class="label" :for="id">
      <span class="label-text" v-text="label" />
    </label>
    <transition name="field-message-error">
      <div v-if="errorMessages.length" class="field-message-error" v-text="errorMessages[0]" />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { TranslateResult } from 'vue-i18n'
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
      id: uniqueId('field-'),
      requiredError: false,
      selectedOnce: false
    }
  },

  computed: {
    isInput (): boolean {
      return ['text', 'email', 'password'].includes(this.type)
    },

    classes (): object {
      return {
        'has-content': this.value,
        error: this.requiredError || this.emailError
      }
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
      this.emailError = this.selectedOnce && !this.hasFocused && this.type === 'email' && !this.hasFocused && !/([\w.-]+)@([\w.-]+)\.(\w+)/.test(this.value)
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

<style lang="scss">
.field {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 500px;
  max-width: 100%;
  margin-bottom: 2em;

  // Input / Textarea

  &-input, &-textarea {
    padding: .875em 1em;
    font-size: var(--fs-regular);
    font-weight: 300;
    line-height: 1.25;
    color: var(--c-text);
    background-color: transparent;
    border-style: none;
    border-radius: .5em;
    outline: none;
    box-shadow: inset 0 0 0 .0625em var(--c-text-secondary-3);
    resize: none;
    transition: box-shadow var(--transition);

    &:hover {
      box-shadow: inset 0 0 0 .0625em var(--c-text-secondary-2);

      &.has-content:not(:focus):not(.error) + label {
        color: var(--c-text-secondary-2);
      }
    }

    &:focus {
      box-shadow: inset 0 0 0 .125em var(--c-secondary);

      + label {
        color: var(--c-secondary);
      }
    }

    &:focus, &.has-content {
      + label {
        padding: 0 .5rem;
        font-size: var(--fs-small);
        transform: translateY(-1.3125rem);

        &::before {
          transform: scaleX(1) translateY(.375rem);
        }
      }
    }

    &:-webkit-autofill {
      animation-name: autofill;
      animation-fill-mode: both;
    }

    &.error {
      box-shadow: inset 0 0 0 .125em var(--c-error);

      &.has-content + label {
        color: var(--c-error);
      }
    }
  }

  // Label

  .label {
    position: absolute;
    top: .875rem;
    left: 1em;
    color: var(--c-text-secondary-3);
    transition: var(--transition);

    &-text {
      position: relative;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: 100%;
      height: .25rem;
      background-color: var(--c-background-1);
      transform: scaleX(0) translateY(-.9375rem);
      transition: var(--transition);
    }
  }

  // Message

  &-message-error {
    height: 1.25em;
    margin: .25em 0 -1.5em;
    padding: 0 1em;
    font-size: var(--fs-small);
    color: var(--c-error);
    transition: var(--transition);

    &-enter, &-leave-to {
      opacity: 0;
      transform: translateY(-25%);
    }
  }
}

@keyframes autofill {
  to {
    color: inherit;
    background-color: transparent;
  }
}
</style>
