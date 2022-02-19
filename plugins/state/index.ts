import { Context, Plugin } from '@nuxt/types'
import Vue from 'vue'
import skills from './skills'
import { Skill } from '~/models'

interface State {
  skills: Skill[]
}

const statePlugin: Plugin = function (_ctx: Context, inject: Function) {
  const state = Vue.observable({
    skills
  })

  inject('state', state)
}

declare module 'vue/types/vue' {
  interface Vue {
    $state: State
  }
}

declare module '@nuxt/types' {
  interface Context {
    $state: State
  }
}

export default statePlugin
