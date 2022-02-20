import { Release, Tag } from '~/models'
import uniqueId from '~/utils/uniqueId'

const tagDatas: Omit<Tag, 'id'>[] = [
  {
    name: 'overhaul',
    color: '#44c0ff'
  },
  {
    name: 'feature',
    color: '#44c0ff'
  },
  {
    name: 'fix',
    color: '#44c0ff'
  },
  {
    name: 'dependencies',
    color: '#44c0ff'
  },
  {
    name: 'security',
    color: '#44c0ff'
  }
]

const tags: Tag[] = tagDatas.map(tag => ({
  ...{
    id: +uniqueId()
  },
  ...tag
}))

const releaseDatas: Omit<Release, 'id' | 'major'>[] = [
  {
    name: '3.0.0',
    date: new Date(2022, 11, 30),
    tags: [tags[0], tags[1]]
  },
  {
    name: '2.1.6',
    date: new Date(2022, 2, 4),
    tags: [tags[1], tags[3]]
  },
  {
    name: '2.1.5',
    date: new Date(2019, 11, 16),
    tags: [tags[3]]
  },
  {
    name: '2.1.4',
    date: new Date(2019, 9, 8),
    tags: [tags[3]]
  },
  {
    name: '2.1.3',
    date: new Date(2019, 3, 1),
    tags: [tags[4]]
  },
  {
    name: '2.1.2',
    date: new Date(2019, 9, 8),
    tags: [tags[1]]
  },
  {
    name: '2.1.1',
    date: new Date(2019, 1, 23),
    tags: [tags[2], tags[3], tags[4]]
  },
  {
    name: '2.1.0',
    date: new Date(2019, 1, 3),
    tags: [tags[1], tags[3]]
  },
  {
    name: '2.0.1',
    date: new Date(2018, 11, 19),
    tags: [tags[1], tags[3]]
  },
  {
    name: '2.0.0',
    date: new Date(2018, 10, 4),
    tags: [tags[0], tags[1], tags[3]]
  },
  {
    name: '1.2.3',
    date: new Date(2017, 8, 14),
    tags: [tags[2]]
  },

  {
    name: '1.2.2',
    date: new Date(2017, 5, 21),
    tags: [tags[3]]
  },
  {
    name: '1.2.1',
    date: new Date(2017, 5, 12),
    tags: [tags[1], tags[2]]
  },
  {
    name: '1.2.0',
    date: new Date(2017, 5, 27),
    tags: [tags[1], tags[4]]
  },
  {
    name: '1.1.2',
    date: new Date(2017, 2, 23),
    tags: [tags[1], tags[2]]
  },
  {
    name: '1.1.1',
    date: new Date(2017, 2, 22),
    tags: [tags[2]]
  },
  {
    name: '1.1.0',
    date: new Date(2017, 2, 15),
    tags: [tags[1]]
  },
  {
    name: '1.0.3',
    date: new Date(2017, 1, 3),
    tags: [tags[1]]
  },
  {
    name: '1.0.2',
    date: new Date(2017, 0, 12),
    tags: [tags[1], tags[2]]
  },
  {
    name: '1.0.1',
    date: new Date(2016, 11, 23),
    tags: [tags[1]]
  },
  {
    name: '1.0.0',
    date: new Date(2016, 11, 17),
    tags: [tags[0]]
  }
]

const releases: Release[] = releaseDatas.map(release => ({
  ...{
    id: +uniqueId(),
    major: release.tags.some(t => t.name === 'overhaul')
  },
  ...release
}))

export default releases
