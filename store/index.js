export const state = () => ({
  experiences: [],
  menuOpened: false,
  pages: [],
  releases: [],
  skills: [],
  works: [],
  workFilters: []
})

export const mutations = {
  setMenuOpening (state, data) {
    state.menuOpened = data
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
    for (const work of data) {
      work.slug = slugify(work.title)
    }
    state.works = data
  },
  setWorkFilters (state, data) {
    state.workFilters = data
    for (const workFilter of data) {
      workFilter.tag = slugify(workFilter.name)
    }
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    try {
      const pages = await this.$axios.get(`${process.env.API_URL}/pages`)
      commit('setPages', pages.data)
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
