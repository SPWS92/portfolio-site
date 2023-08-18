import { render } from '@testing-library/react'

import FeatureCard from './FeatureCard.tsx';

const featureStub = {
  id: 1,
  heading: 'Mock Heading',
  description: 'This is a mock description'
};

describe('Components: FeatureCard', () => {
  it('SHOULD render as expected', () => {
    const component = render(
      <FeatureCard feature={featureStub}>
        <p>Mock child</p>
      </FeatureCard>
    );

    expect(component).toMatchSnapshot();
  });

  it('SHOULD no render description if description does not exist', () => {
    const component = render(
      <FeatureCard feature={{ id: 1, heading: 'Mock Heading' }}>
        <p>Mock child</p>
      </FeatureCard>
    );

    expect(component).toMatchSnapshot();
  });
})
