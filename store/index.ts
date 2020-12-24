import { getAccessorType } from 'typed-vuex'
import { ActionTree, MutationTree } from 'vuex'
import { Experience, Page, Release, Skill, Work, WorkFilter } from 'models'
import { parseISO, compareDesc, getYear } from 'date-fns'

export const state = () => ({
  experiences: [] as Experience[],
  menuOpened: false,
  pages: [] as Page[],
  releases: [] as Release[],
  skills: [] as Skill[],
  works: [] as Work[],
  workFilters: [] as WorkFilter[]
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setExperiences (state, data: Experience[]) {
    for (const experience of data) {
      experience.dateRealization = parseISO(experience.dateRealization.toString())
      experience.year = getYear(new Date(experience.dateRealization))
    }
    state.experiences = data.sort((a, b) => compareDesc(a.dateRealization, b.dateRealization))
  },
  setMenuOpening (state, data: boolean) {
    state.menuOpened = data
  },
  setPages (state, data: Page[]) {
    state.pages = data
  },
  setReleases (state, data: Release[]) {
    for (const release of data) {
      release.date = parseISO(release.date.toString())
    }
    state.releases = data.sort((a, b) => compareDesc(a.date, b.date))
  },
  setSkills (state, data: Skill[]) {
    state.skills = data
  },
  setWorks (state, data: Work[]) {
    for (const work of data) {
      work.slug = slugify(work.title)
    }
    state.works = data
  },
  setWorkFilters (state, data: WorkFilter[]) {
    state.workFilters = data
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit ({ commit }) {
    // Fetch pages data
    try {
      const pages = await this.$axios.get(`${process.env.API_URL}/pages`)
      commit('setPages', pages.data)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('error', e)
    }
  }
}

const slugify = (text: string) => {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return text.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w-]+/g, '') // Remove all non-word characters
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

export const accessorType = getAccessorType({
  state,
  mutations,
  actions
})
