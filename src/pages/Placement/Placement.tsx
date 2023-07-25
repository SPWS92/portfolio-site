import { useLocation } from 'react-router-dom';
import portfolioData from '@data/portfolioData';

import { AboutTheProduct, Header, Role, ShowCase } from './partials';

const Placement = () => {
  const { state } = useLocation();
  const placement = portfolioData.find(({ id }) => id === state.id);
  return (
    <div className='flex-grow overflow-y-auto text-gray-800 font-medium'>
      <Header name={placement?.client ?? placement?.company} findOutMore={placement?.companyLink} />
      {placement?.product && placement.productSummary && <AboutTheProduct product={placement?.product} summary={placement?.productSummary} features={placement?.keyFeatures} />}
      {placement?.showCaseItems && <ShowCase showCaseItems={placement?.showCaseItems} product={placement?.product} />}
      {placement?.myRole && <Role description={placement?.myRole} skills={placement?.skills} />}
    </div>
  )
}

export default Placement;