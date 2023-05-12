// TODO : Replace when v-wave support Nuxt 3 (https://github.com/justintaddei/v-wave/issues/351)

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.use(VWave)
// })

import VWave from 'v-wave'

export default defineNuxtPlugin(nuxtApp => {
  const { vWave, vWaveTrigger } = VWave.createLocalWaveDirective({}, nuxtApp.vueApp)

  nuxtApp.vueApp.directive('ripple', {
    ...vWave,
    getSSRProps(_binding, _vnode) {
      return {}
    },
  })
  nuxtApp.vueApp.directive('ripple-trigger', {
    ...vWaveTrigger,
    getSSRProps(_binding, _vnode) {
      return {}
    },
  })
})
