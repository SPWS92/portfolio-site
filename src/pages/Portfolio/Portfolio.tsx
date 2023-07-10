import { NavLink } from 'react-router-dom';

import portfolioData from '../../data/portfolio-data.json'
import { Page } from '../../layouts';
import PortfolioHeader from './partials/PortfolioHeader';
import WorkDetails from './partials/WorkDetails';

// const Portfolio = () => {
//   return (
//     <Page>
//       <PortfolioHeader />
//       <div className="my-8 grid grid-cols-1 place-items-center gap-4">
//         {portfolioData.map((datum, i) => (
//           <div className="grid grid-cols-1 md:grid-cols-2 w-1/2 space-x-6">
//             <img src={datum?.clientImage} className="w-full h-64 object-cover rounded-md shadow-xl order-last" />
//             <div className='w-full'>
//               <p className='text-orange-700 font-bold text-xl'>{datum.client} / {datum.product}</p>
//               <p>{datum.description}</p>
//               <p className='text-orange-700'>Find out more</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Page>)
// }
const Portfolio = () => {
  return (
    <Page>
      <PortfolioHeader />
      <div className="my-8 flex flex-col items-center">
        {portfolioData.map((datum, i) => (
          <div className={`flex flex-col ${i % 2 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-24 mx-96 w-1/2`}>
            <img src={datum?.clientImage} className="w-1/2 h-56 object-cover mr-8 rounded-md shadow-xl" />
            <div className='p-4 w-1/2 flex flex-col space-y-3'>
              <p className='text-orange-700 font-bold text-xl'>{datum.client} / {datum.product}</p>
              <p>{datum.description}</p>
              <NavLink to='/placement' state={{ id: datum.id }} className='text-orange-700 hover:underline w-fit'>Find out more</NavLink>
            </div>
          </div>
        ))}
      </div>
    </Page>)
}

export default Portfolio;