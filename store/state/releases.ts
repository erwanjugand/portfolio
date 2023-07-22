import { type Tag, type Release } from '../store'

const tags: Tag[] = [
  {
    name: 'overhaul',
    color: '#0277BD',
  },
  {
    name: 'feature',
    color: '#2E7D32',
  },
  {
    name: 'fix',
    color: '#FF8F00',
  },
  {
    name: 'dependencies',
    color: '#EF6C00',
  },
  {
    name: 'security',
    color: '#BF360C',
  },
]

const releases: Release[] = [
  {
    name: '3.2.0',
    date: new Date(2023, 5, 6),
    major: false,
    tags: [tags[1], tags[3]],
  },
  {
    name: '3.1.2',
    date: new Date(2023, 3, 24),
    major: false,
    tags: [tags[1], tags[3]],
  },
  {
    name: '3.1.1',
    date: new Date(2023, 2, 18),
    major: false,
    tags: [tags[1], tags[3]],
  },
  {
    name: '3.1.0',
    date: new Date(2023, 2, 11),
    major: false,
    tags: [tags[4], tags[3]],
  },
  {
    name: '3.0.0',
    date: new Date(2022, 11, 30),
    major: true,
    tags: [tags[0], tags[1], tags[3]],
  },
  {
    name: '2.1.6',
    major: false,
    date: new Date(2022, 2, 4),
    tags: [tags[1], tags[3]],
  },
  {
    name: '2.1.5',
    major: false,
    date: new Date(2019, 11, 16),
    tags: [tags[3]],
  },
  {
    name: '2.1.4',
    major: false,
    date: new Date(2019, 9, 8),
    tags: [tags[3]],
  },
  {
    name: '2.1.3',
    major: false,
    date: new Date(2019, 3, 1),
    tags: [tags[4]],
  },
  {
    name: '2.1.2',
    major: false,
    date: new Date(2019, 9, 8),
    tags: [tags[1]],
  },
  {
    name: '2.1.1',
    major: false,
    date: new Date(2019, 1, 23),
    tags: [tags[2], tags[3], tags[4]],
  },
  {
    name: '2.1.0',
    major: false,
    date: new Date(2019, 1, 3),
    tags: [tags[1], tags[3]],
  },
  {
    name: '2.0.1',
    major: false,
    date: new Date(2018, 11, 19),
    tags: [tags[1], tags[3]],
  },
  {
    name: '2.0.0',
    major: true,
    date: new Date(2018, 10, 4),
    tags: [tags[0], tags[1], tags[3]],
  },
  {
    name: '1.2.3',
    major: false,
    date: new Date(2017, 8, 14),
    tags: [tags[2]],
  },

  {
    name: '1.2.2',
    major: false,
    date: new Date(2017, 5, 21),
    tags: [tags[3]],
  },
  {
    name: '1.2.1',
    major: false,
    date: new Date(2017, 5, 12),
    tags: [tags[1], tags[2]],
  },
  {
    name: '1.2.0',
    major: false,
    date: new Date(2017, 5, 27),
    tags: [tags[1], tags[4]],
  },
  {
    name: '1.1.2',
    major: false,
    date: new Date(2017, 2, 23),
    tags: [tags[1], tags[2]],
  },
  {
    name: '1.1.1',
    major: false,
    date: new Date(2017, 2, 22),
    tags: [tags[2]],
  },
  {
    name: '1.1.0',
    major: false,
    date: new Date(2017, 2, 15),
    tags: [tags[1]],
  },
  {
    name: '1.0.3',
    major: false,
    date: new Date(2017, 1, 3),
    tags: [tags[1]],
  },
  {
    name: '1.0.2',
    major: false,
    date: new Date(2017, 0, 12),
    tags: [tags[1], tags[2]],
  },
  {
    name: '1.0.1',
    major: false,
    date: new Date(2016, 11, 23),
    tags: [tags[1]],
  },
  {
    name: '1.0.0',
    major: true,
    date: new Date(2016, 11, 17),
    tags: [tags[0]],
  },
]

export default releases
