import Vue, { DirectiveOptions } from 'vue'

import ripple from './ripple'
import clickOutside from './clickOutside'

const directives: Record<string, DirectiveOptions> = {
  clickOutside,
  ripple
}
for (const name in directives) {
  Vue.directive(name, directives[name])
}
