import portfolioData from '@data/portfolioData';
import { Page } from '@layouts/index';

import WorkDetails from './partials/WorkDetails';

const Portfolio = () => {
  const { industryProjects, personalProducts } = portfolioData.reduce((projects, curProject) => {
    projects[curProject.personalProject ? 'personalProducts' : 'industryProjects'].push(curProject);
    return projects
  }, { industryProjects: [], personalProducts: [] });
  
  console.log({ industryProjects, personalProducts });

  return (
    <Page>
      <div className='p-8 mt-16 xl:px-96 pb-16'>
        <p className='text-4xl border-l-4 border-indigo-500 pl-2 mb-8 font-medium'>Portfolio</p>
        <p className='w-full lg:w-3/4 text-xl border-indigo-500 pl-2'>For the entirety of my career I have worked in consulting. This has meant that over the years I have delivered various applications for multiple clients using different tech stacks. My focus has primarily been React and React Native, although I do have experience in AngularJS and Vue.js.</p>
        <p className='w-full lg:w-3/4 text-xl border-indigo-500 pl-2'>Please learn below about the applications I have delivered alongside phenomenal Scrum teams.</p>
      </div>
      <div className='my-8 flex flex-col items-center'>
        {industryProjects?.map((datum, i) => <WorkDetails role={datum} index={i} key={i} />)}
      </div>
      <div className='p-8 xl:px-96'>
        <p className='text-4xl border-l-4 border-indigo-500 pl-2 mb-8 font-medium'>Personal projects</p>
      </div>
      <div className='my-8 flex flex-col items-center'>
        {personalProducts?.map((datum, i) => <WorkDetails role={datum} index={i} key={i} />)}
      </div>
    </Page>)
}

export default Portfolio;