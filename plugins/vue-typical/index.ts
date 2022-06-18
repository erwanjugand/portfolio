import VTypical from 'vue-typical';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VTypical', VTypical)
})
