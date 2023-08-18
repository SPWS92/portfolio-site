import portfolioData, { ProjectProps } from '@data/portfolioData';
import { Page } from '@layouts/index';

import WorkDetails from './partials/WorkDetails';

interface GroupProjectsProps {
  industryProjects: ProjectProps[];
  personalProducts: ProjectProps[];
}

const groupProjects = (projects: ProjectProps[]) => projects.reduce((projects: GroupProjectsProps, curProject: ProjectProps) => {
  const group = curProject.personalProject ? 'personalProducts' : 'industryProjects';
  projects[group].push(curProject);

  return projects
}, { industryProjects: [], personalProducts: [] });

const Portfolio = () => {
  const { industryProjects, personalProducts } = groupProjects(portfolioData);

  return (
    <Page>
      <div className='p-8 mt-16 xl:px-96 pb-16'>
        <p className='text-4xl border-l-4 border-indigo-500 pl-2 mb-8 font-medium'>Portfolio</p>
        <p className='w-full lg:w-3/4 text-xl border-indigo-500 pl-2'>For the entirety of my career I have worked in consulting. This has meant that over the years I have delivered various applications for multiple clients using different tech stacks. My focus has primarily been React and React Native, although I do have experience in AngularJS and Vue.js.</p>
        <p className='w-full lg:w-3/4 text-xl border-indigo-500 pl-2'>Please learn below about the applications I have delivered alongside phenomenal Scrum teams.</p>
      </div>
      <div className='my-8 flex flex-col items-center'>
        {industryProjects?.map((project, i) =>
          <WorkDetails
            role={project}
            index={i}
            key={project.id} />)}
      </div>
      <div className='p-8 xl:px-96'>
        <p className='text-4xl border-l-4 border-indigo-500 pl-2 mb-8 font-medium'>Personal projects</p>
      </div>
      <div className='my-8 flex flex-col items-center'>
        {personalProducts?.map((project, i) =>
          <WorkDetails
            role={project}
            index={i}
            key={project.id} />
        )}
      </div>
    </Page>)
}

export default Portfolio;