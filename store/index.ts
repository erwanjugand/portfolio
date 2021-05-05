import { getAccessorType, mutationTree } from 'typed-vuex'
import { Experience, Release, Skill, Work, WorkFilter } from 'models'
import { compareDesc, getYear } from 'date-fns'
import slugify from '~/utils/slug'

export const state = () => ({
  experiences: [] as Experience[],
  menuOpened: false,
  releases: [] as Release[],
  skills: [] as Skill[],
  works: [] as Work[],
  workFilters: [] as WorkFilter[]
})

export const mutations = mutationTree(state, {
  setExperiences (state, data: Experience[]) {
    for (const experience of data) {
      experience.dateRealization = new Date(experience.dateRealization)
      experience.year = getYear(new Date(experience.dateRealization))
    }
    state.experiences = data.sort((a, b) => compareDesc(a.dateRealization, b.dateRealization))
  },

  setMenuOpening (state, data: boolean) {
    state.menuOpened = data
  },

  setReleases (state, data: Release[]) {
    for (const release of data) {
      release.date = new Date(release.date)
    }
    state.releases = data.sort((a, b) => compareDesc(a.date, b.date))
  },

  setSkills (state, data: Skill[]) {
    state.skills = data
  },

  setWorks (state, data: Work[]) {
    for (const work of data) {
      work.dateRealization = new Date(work.dateRealization)
      work.slug = slugify(work.id + '-' + work.title)
    }
    state.works = data
  },

  setWorkFilters (state, data: WorkFilter[]) {
    state.workFilters = data
  }
})

export const accessorType = getAccessorType({
  state,
  mutations
})
