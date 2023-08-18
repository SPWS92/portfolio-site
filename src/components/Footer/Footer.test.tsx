import { render } from '@testing-library/react'

import { mockUseLocation } from '../../testing/setup-jest-tests.ts';
import Footer from './Footer.tsx';

describe('Components: Footer', () => {
  it('SHOULD match snapshot', () => {
    mockUseLocation.mockReturnValue({ pathname: 'footer' });
    const component = render(<Footer />);

    expect(component).toMatchSnapshot();
  });
})
