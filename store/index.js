export const state = () => ({
  darkMode: null,
  experiences: [],
  menuOpened: false,
  pages: [],
  release: [],
  skills: [],
  works: [],
  worksFilters: []
})

export const mutations = {
  setMenuOpening (state, data) {
    state.menuOpened = data
  },
  setDarkMode (state, data) {
    state.darkMode = data
  },
  setExperiences (state, data) {
    state.experiences = data
  },
  setPages (state, data) {
    state.pages = data
  },
  setReleases (state, data) {
    state.releases = data
  },
  setSkills (state, data) {
    state.skills = data
  },
  setWorks (state, data) {
    data.forEach((work) => {
      work.slug = slugify(work.title)
    })
    state.works = data
  },
  setWorksFilters (state, data) {
    state.worksFilters = data
    data.forEach((workFilter) => {
      workFilter.tag = slugify(workFilter.name)
    })
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    try {
      const experiences = await this.$axios.get(`${process.env.API_URL}/experiences`)
      const pages = await this.$axios.get(`${process.env.API_URL}/pages`)
      const releases = await this.$axios.get(process.env.GITHUB_RELEASES)
      const skills = await this.$axios.get(`${process.env.API_URL}/skills`)
      const works = await this.$axios.get(`${process.env.API_URL}/works`)
      const worksFilters = await this.$axios.get(`${process.env.API_URL}/work_filters`)
      commit('setExperiences', experiences.data)
      commit('setPages', pages.data)
      commit('setReleases', releases.data)
      commit('setSkills', skills.data)
      commit('setWorks', works.data)
      commit('setWorksFilters', worksFilters.data)
    } catch (e) {
      console.error('error', e)
    }
  }
}

function slugify (string) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}
