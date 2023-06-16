import { Page } from '../../layouts';
import WorkDetails from './partials/WorkDetails';

const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida cursus metus ut feugiat. Vestibulum tincidunt eu metus id vehicula. Proin non vulputate ipsum, vel varius sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum sem vitae arcu mollis, vel pellentesque leo gravida. Suspendisse potenti. Duis a tincidunt odio. Etiam sed urna luctus, aliquet nunc eu, auctor velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris facilisis tincidunt massa, sit amet posuere sapien feugiat in. Nulla facilisi.
`

const workData = [
  {
    id: 1,
    company: 'BAE Systems Applied Intelligence - Lloyds Register',
    product: 'MAST',
    date: {
      start: '08/09/2014',
      end: '08/09/2020'
    },
    skills: [
      'JavaScript',
      'AngularJS',
      'Electron',
      'Webpack',
      'Jasmine',
      'Agile'
    ],
    description: loremIpsum
  },
  {
    id: 2,
    company: 'BAE Systems Applied Intelligence - Lloyds Register',
    product: 'Class Direct',
    date: {
      start: '08/09/2018',
      end: '08/09/2020'
    },
    skills: [
      'JavaScript',
      'AngularJS',
      'Electron',
      'Webpack',
      'Jasmine',
      'Agile'
    ],
    description: loremIpsum
  },
  {
    id: 3,
    company: 'BAE Systems Applied Intelligence',
    product: 'Squad Health Check',
    date: {
      start: '08/09/2017',
      end: '08/09/2020'
    },
    skills: [
      'JavaScript',
      'Vue.js',
      'VueX',
      'Webpack',
      'Agile'
    ],
    description: loremIpsum
  },
  {
    id: 4,
    company: 'AND Digital - Dynamo',
    product: 'Dynamo',
    date: {
      start: '08/09/2017',
      end: '08/09/2020'
    },
    skills: [
      'React Native',
      'JavaScript',
      'Jest',
      'Agile'
    ],
    description: loremIpsum
  },
  {
    id: 5,
    company: 'AND Digital - Sky',
    product: 'Sky - Customer Hub',
    date: {
      start: '08/09/2017',
      end: '08/09/2020'
    },
    skills: [
      'React',
      'JavaScript',
      'Jest',
      'Agile'
    ],
    description: loremIpsum
  },
  {
    id: 6,
    company: 'AND Digital - Sky',
    product: 'My Sky App',
    date: {
      start: '08/09/2017',
      end: '08/09/2020'
    },
    skills: [
      'React Native',
      'JavaScript',
      'Jest',
      'Agile'
    ],
    description: loremIpsum
  },
]

const Portfolio = () => {
  return (
    <Page pageName='Portfolio' >
      <ul role="list" className="divide-y divide-gray-300 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {workData.map(role => (
          <WorkDetails key={role.id} role={role} />
        ))}
      </ul>
    </Page>)
}

export default Portfolio;