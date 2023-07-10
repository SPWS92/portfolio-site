import { useLocation } from "react-router-dom";

import portfolioData from '../../data/portfolio-data.json'
import { AboutTheProduct, Header, KeyFeatures,Role, SkillsSection } from "./partials";

const Placement = () => {
  const { state } = useLocation();
  const placement = portfolioData.find(({ id }) => id === state.id);
  return (
    <div className='flex-grow overflow-y-auto text-gray-800'>
      <Header name={placement?.client ?? placement?.company} findOutMore={placement?.companyLink} />
      <AboutTheProduct product={placement?.product} summary={placement?.productSummary} />
      <KeyFeatures features={placement?.keyFeatures}/>
      <Role description={placement?.myRole} />
      <SkillsSection skills={placement?.skills} />
    </div>
  )
}

export default Placement;