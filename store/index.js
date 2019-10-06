export const state = () => ({
  drawerOpened: false,
  experiences: [],
  skills: [],
  works: [],
  worksFilters: []
})

export const mutations = {
  toggleDrawer (state) {
    state.drawerOpened = !state.drawerOpened
  },
  setExperiences (state, data) {
    state.experiences = data
  },
  setSkills (state, data) {
    state.skills = data
  },
  setWorks (state, data) {
    state.works = data
  },
  setWorksFilters (state, data) {
    state.worksFilters = data
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    try {
      const experiences = await this.$axios.get(`${process.env.API_URL}/experiences`)
      const skills = await this.$axios.get(`${process.env.API_URL}/skills`)
      const works = await this.$axios.get(`${process.env.API_URL}/works`)
      const worksFilters = await this.$axios.get(`${process.env.API_URL}/work_filters`)
      commit('setExperiences', experiences.data)
      commit('setSkills', skills.data)
      commit('setWorks', works.data)
      commit('setWorksFilters', worksFilters.data)
    } catch (e) {
      console.error('error', e)
    }
  }
}
