import { NavLink } from 'react-router-dom';
import { ProjectProps } from '@data/portfolioData';

interface WorkDetailsProps {
  role: ProjectProps;
  index: number;
}

const WorkDetails = ({ role, index }: WorkDetailsProps) => (
  <NavLink to='/placement' state={{ id: role.id }} className={`flex flex-col ${index % 2 ? 'md:flex-row  border-r-4' : 'md:flex-row-reverse  border-l-4'} mb-24 xl:mx-96 xl:w-1/2 border-orange-700 group transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300` }>
    <img src={role?.clientImage} className={`mb-6 md:mb-0 mx-8 lg:w-1/2 h-56 object-cover ${index % 2 ? '' : 'mr-8'} rounded-md shadow-2xl`} />
    <div className='px-8 w-full lg:w-1/2 flex flex-col space-y-3'>
      <p className='text-orange-700 font-bold text-xl'>
        {(role.client || role.companyShorthand) && `${role.client || role.companyShorthand} / `}{role.product}
      </p>
      <p>{role.description}</p>
      <p className='text-orange-700 hover:underline group-hover:underline w-fit'>Find out more</p>
    </div>
  </NavLink>
);
  
export default WorkDetails;