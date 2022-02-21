import { Experience, ExperienceContract } from '~/models'
import uniqueId from '~/utils/uniqueId'

const experienceDatas: Omit<Experience, 'id' | 'year'>[] = [
  {
    title: 'leadDevSteeple',
    description: '',
    contract: ExperienceContract.CDI,
    dateRealization: new Date(2021, 2)
  },
  {
    title: 'frontEndDevelopperSteeple',
    description: '',
    contract: ExperienceContract.CDI,
    dateRealization: new Date(2018, 8)
  },
  {
    title: 'webIntegratorSteeple',
    description: '',
    contract: ExperienceContract.APPRENTICESHIP,
    dateRealization: new Date(2017, 8)
  },
  {
    title: 'webIntegratorSteepleVinci',
    description: '',
    contract: ExperienceContract.INTERNSHIP,
    dateRealization: new Date(2017, 2)
  },
  {
    title: 'webIntegratorSteepleLPC',
    description: '',
    contract: ExperienceContract.INTERNSHIP,
    dateRealization: new Date(2017, 2)
  }
]

const experiences: Experience[] = experienceDatas.map(experience => ({
  ...{
    id: +uniqueId(),
    year: experience.dateRealization.getFullYear()
  },
  ...experience
}))

export default experiences
