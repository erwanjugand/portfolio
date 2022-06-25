import { defineStore } from "pinia"
import environements from "./state/environments"

export const useStore = defineStore({
  id: 'store',
  state: () => {
    return {
      environmentsList: environements,
    }
  },
  actions: {},
  getters: {
    environments: state => state.environmentsList
  },
})
