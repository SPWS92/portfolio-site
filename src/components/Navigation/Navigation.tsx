import { useLocation } from 'react-router-dom';
import { useResponsiveScreenSize } from '@hooks/index';

import { BurgerMenu, NavBar } from './partials'

const Navigation = () => {
  const smallBreakpoint = 640;
  const { width } = useResponsiveScreenSize();
  const { pathname } = useLocation();

  if (pathname === '/') {
    return null;
  }

  return width > smallBreakpoint ? (
    <NavBar />
  ) : (
    <BurgerMenu />
  );
}

export default Navigation;
