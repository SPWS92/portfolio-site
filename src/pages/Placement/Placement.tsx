import { useLocation } from "react-router-dom";

import portfolioData from '../../data/portfolio-data.json'
import { Header, SkillsSection } from "./partials";

const Placement = () => {
  const { state } = useLocation();
  const placement = portfolioData.find(({ id }) => id === state.id);
  return (
    <div className='flex-grow overflow-y-auto text-gray-800'>
      <Header name={placement?.company}/>
      <SkillsSection skills={placement?.skills} />
      <div>About the product</div>
      <div>My key roles & responsibilities</div>
    </div>
  )
}

export default Placement;