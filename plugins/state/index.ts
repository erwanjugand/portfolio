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
  experiences: Experience[]
  releases: Release[]
  setMenuState(value: boolean): void

}

const statePlugin: Plugin = function (_ctx: Context, inject: Function) {
  const state = Vue.observable({
    menuOpened: false,
    skills,
    tools,
    experiences,
    releases,
    setMenuState (value: boolean) {
      this.menuOpened = value
    }
  }
  )

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
