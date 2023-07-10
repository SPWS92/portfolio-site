import { NavLink } from "react-router-dom";

import { useResponsiveScreenSize } from "../../../hooks";

const WorkDetails = ({ role }) => {

  const screenSize = useResponsiveScreenSize();

  return (
    <div className="flex flex-col space-y-1 justify-between pb-5 space-y-3 my-8 border-0 rounded-xl shadow-xl overflow-hidden">
      <div className="flex">
        <img className="h-20 w-20 rounded-br-xl" src={role.clientImage} />
        <div className="px-4 flex flex-col justify-center">
          <a href={role.clientLink} className='font-bold text-sky-500 text-lg hover:text-sky-400 hover:underline'>
            {role.client && `${role.client}: `}{role.product}
          </a>
          <p>
            <a href={role.companyLink} className='font-semibold hover:cursor-pointer text-sky-700 hover:text-sky-600 hover:underline'>
              {screenSize <= 640 ? role.companyShorthand : role.company}
            </a>
          </p>
        </div>
      </div>
      <p className="px-4 whitespace-pre-line">{role.description}</p>
      <p className="px-4"><span className='font-semibold italic'>{role.skills.map(skill => skill.name).join(', ')}</span></p>
      <NavLink to='/placement' state={{ id: role.id }} className='font-bold text-sky-500 hover:text-sky-400 hover:underline px-4'>
      Find out more
      </NavLink>
    </div>
  )};
  
export default WorkDetails;