import VWave from 'v-wave'

export default defineNuxtPlugin(nuxtApp => {
  const { vWave } = VWave.createLocalWaveDirective()

  nuxtApp.vueApp.directive('ripple', {
    ...vWave,
    getSSRProps() {
      return {}
    },
  })
})
