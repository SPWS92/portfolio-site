import portfolioData from '../../data/portfolio-data.json'
import { Page } from '../../layouts';
import PortfolioHeader from './partials/PortfolioHeader';
import WorkDetails from './partials/WorkDetails';

const Portfolio = () => {
  return (
    <Page>
      <PortfolioHeader />
      <ul role="list" className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {portfolioData.map(role => (
          <WorkDetails key={role.id} role={role} />
        ))}
      </ul>
    </Page>)
}

export default Portfolio;