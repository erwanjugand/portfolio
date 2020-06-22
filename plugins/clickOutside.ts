import { VNodeDirective, VNode, DirectiveOptions } from 'vue'

// Inspired by Vuetify ClickOutside Directive
// https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/directives/click-outside/index.ts

interface DirectiveBinding extends VNodeDirective {
  value?: (e: Event) => void
}

type DirectiveFunction = (
  el: HTMLElement & { _clickOutside?: EventListenerOrEventListenerObject },
  binding: DirectiveBinding,
  vnode: VNode,
  oldVnode: VNode
) => void

function directive (e: PointerEvent, el: HTMLElement, binding: DirectiveBinding): void {
  if (!e || ('isTrusted' in e && !e.isTrusted) || ('pointerType' in e && !e.pointerType)) { return }

  !el.contains(e.target as Node) && setTimeout(() => binding.value && binding.value(e), 0)
}

const inserted: DirectiveFunction = function (el, binding) {
  const onClick = (e: Event) => directive(e as PointerEvent, el, binding)
  const app = document.querySelector('#__nuxt') || document.body
  app.addEventListener('click', onClick, true)
  el._clickOutside = onClick
}

const unbind: DirectiveFunction = function (el) {
  if (!el._clickOutside) { return }

  const app = document.querySelector('#__nuxt') || document.body
  app.removeEventListener('click', el._clickOutside, true)
  delete el._clickOutside
}

export default {
  inserted,
  unbind
} as DirectiveOptions
