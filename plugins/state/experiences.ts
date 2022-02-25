import { ExperienceContract, Experience } from '~/models'
import uniqueId from '~/utils/uniqueId'

const experienceDatas: Omit<Experience, 'id'>[] = [
  {
    enterprise: 'Steeple',
    jobs: [
      {
        key: 'steepleLeadDev',
        contract: ExperienceContract.CDI,
        startedAt: new Date(2021, 2),
        finishedAt: new Date()
      },
      {
        key: 'steepleFrontEndDev',
        contract: ExperienceContract.CDI,
        startedAt: new Date(2018, 8),
        finishedAt: new Date(2021, 1)
      },
      {
        key: 'steepleWebIntegrator',
        contract: ExperienceContract.APPRENTICESHIP,
        startedAt: new Date(2017, 8),
        finishedAt: new Date(2018, 7)
      }
    ]
  },
  {
    enterprise: 'VINCI Energies',
    jobs: [
      {
        key: 'vinciWebIntegrator',
        contract: ExperienceContract.INTERNSHIP,
        startedAt: new Date(2017, 2),
        finishedAt: new Date(2017, 6)
      }
    ]
  },
  {
    enterprise: 'Les Pingouins Connectés',
    jobs: [
      {
        key: 'lpcWebIntegrator',
        contract: ExperienceContract.INTERNSHIP,
        startedAt: new Date(2016, 3),
        finishedAt: new Date(2016, 4)
      }
    ]
  }
]

const experiences: Experience[] = experienceDatas.map(experience => ({
  ...{
    id: +uniqueId()
  },
  ...experience
}))

export default experiences
