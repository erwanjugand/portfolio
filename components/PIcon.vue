<template>
  <svg class="icon" role="img" :viewBox="viewBox" aria-hidden="true">
    <path :d="icon.path" />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
import { icons } from '~/utils/icons'
import { Icon } from 'models'

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'light',
      validator (value) {
        return ['light', 'solid', 'brand', 'custom'].includes(value)
      }
    }
  },

  data () {
    return {
      icons
    }
  },

  computed: {
    icon (): Icon {
      return this.icons[this.type][this.name]
    },

    viewBox (): string {
      return `0 0 ${this.icon.width} ${this.icon.height}`
    }
  }
})
</script>
