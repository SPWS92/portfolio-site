import { useLocation } from "react-router-dom";

import portfolioData from "../../data/portfolioData";
import { AboutTheProduct, Header, KeyFeatures,Role, SkillsSection } from "./partials";

const Placement = () => {
  const { state } = useLocation();
  const placement = portfolioData.find(({ id }) => id === state.id);
  return (
    <div className='flex-grow overflow-y-auto text-gray-800 font-medium'>
      <Header name={placement?.client ?? placement?.company} findOutMore={placement?.companyLink} />
      {placement?.product && placement.productSummary && <AboutTheProduct product={placement?.product} summary={placement?.productSummary} />}
      {placement?.keyFeatures && <KeyFeatures features={placement?.keyFeatures}/>}
      {placement?.myRole && <Role description={placement?.myRole} />}
      {placement?.skills && <SkillsSection skills={placement?.skills} />}
    </div>
  )
}

export default Placement;