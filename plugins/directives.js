import Vue from 'vue'

// v-ripple

Vue.directive('ripple', {
  bind: (el) => { el.classList.add('ripple-container') },
  update: (el) => { el.classList.add('ripple-container') },

  inserted: (el, binding) => {
    // There must be no value
    if (binding.hasOwnProperty('value') && !binding.value) {
      return
    }

    el.addEventListener('mousedown', (event) => {
      el.classList.add('ripple-container')
      event.stopPropagation()
      const containerOffset = el.getBoundingClientRect()
      const topPosition = event.clientY - containerOffset.top
      const leftPosition = event.clientX - containerOffset.left
      el.style.position = 'relative'
      el.style.overflow = 'hidden'

      // Generate Ripple
      const ripple = document.createElement('div')
      Object.assign(ripple.style, {
        top: `${topPosition}px`,
        left: `${leftPosition}px`
      })

      ripple.classList.add('ripple')

      el.insertBefore(ripple, el.firstChild)

      // Animate Ripple
      const rippleWidth = Math.sqrt(containerOffset.width ** 2 + containerOffset.height ** 2)
      setTimeout(() => {
        ripple.style.width = `${rippleWidth * 2}px`
        ripple.style.height = `${rippleWidth * 2}px`
        ripple.style.top = `${topPosition - rippleWidth}px`
        ripple.style.left = `${leftPosition - rippleWidth}px`
      }, 0)

      setTimeout(() => {
        ripple.classList.add('ripple-finished')
      }, 500)

      const destroy = () => {
        const delay = ripple.classList.contains('ripple-finished') ? 0 : 200

        setTimeout(() => {
          ripple.style.opacity = '0'

          setTimeout(() => {
            el.removeEventListener('mouseup', destroy)
            el.removeEventListener('mouseleave', destroy)
            if (ripple.parentNode) {
              ripple.parentNode.removeChild(ripple)
            }
          }, 500)
        }, delay)
      }

      el.addEventListener('mouseup', () => {
        destroy()
        el.blur()
      })
      el.addEventListener('mouseleave', destroy)
    })
  }
})

// v-click-outside

function directive (e, el, binding) {
  if (!e || ('isTrusted' in e && !e.isTrusted) || ('pointerType' in e && !e.pointerType)) { return }
  !el.contains(e.target) && setTimeout(() => binding.value && binding.value(e), 0)
}

Vue.directive('click-outside', {

  inserted: (el, binding) => {
    const onClick = e => directive(e, el, binding)
    document.body.addEventListener('click', onClick, true)
    el._clickOutside = onClick
  },

  unbind: (el) => {
    if (!el._clickOutside) { return }
    document.body.removeEventListener('click', el._clickOutside, true)
    delete el._clickOutside
  }
})
