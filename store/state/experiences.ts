import { type Experience } from '../store'

const experiences: Experience[] = [
  {
    enterprise: 'Steeple',
    jobs: [
      {
        key: 'steepleLeadFrontEndDev',
        contract: 'cdi',
        startedAt: new Date(2021, 2),
      },
      {
        key: 'steepleFrontEndDev',
        contract: 'cdi',
        startedAt: new Date(2018, 8),
        finishedAt: new Date(2021, 1),
      },
      {
        key: 'steepleWebIntegrator',
        contract: 'apprenticeship',
        startedAt: new Date(2017, 8),
        finishedAt: new Date(2018, 7),
      },
    ],
  },
  {
    enterprise: 'VINCI Energies',
    jobs: [
      {
        key: 'vinciWebIntegrator',
        contract: 'internship',
        startedAt: new Date(2017, 2),
        finishedAt: new Date(2017, 6),
      },
    ],
  },
  {
    enterprise: 'Les Pingouins Connectés',
    jobs: [
      {
        key: 'lpcWebIntegrator',
        contract: 'internship',
        startedAt: new Date(2016, 3),
        finishedAt: new Date(2016, 4),
      },
    ],
  },
]

export default experiences
