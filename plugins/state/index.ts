import { Context, Plugin } from '@nuxt/types'
import Vue from 'vue'
import skills from './skills'
import tools from './tools'
import experiences from './experiences'
import releases from './releases'
import { Experience, Release, Skill, Tool } from '~/models'

interface State {
  menuOpened: boolean
  skills: Skill[]
  tools: Tool[]
  experience: Experience[]
  releases: Release[]
}

const statePlugin: Plugin = function (_ctx: Context, inject: Function) {
  const state = Vue.observable({
    menuOpened: false,
    skills,
    tools,
    experiences,
    releases
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
