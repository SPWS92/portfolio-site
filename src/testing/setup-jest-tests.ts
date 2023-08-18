// import { useLocation } from 'react-router-dom';

// jest.mock('react-router-dom');
// const mockUseLocation = useLocation as jest.Mock;

export const mockUseLocation = jest.fn().mockReturnValue({ pathname: 'default' });

jest.mock('react-router-dom', () => ({
  useLocation: mockUseLocation
}));