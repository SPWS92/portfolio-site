import { useLocation } from "react-router-dom";

import { NavBar } from "../../components"
import { useResponsiveScreenSize } from "../../hooks";
import BurgerMenu from "./partials/BurgerMenu"

const Navigation = () => {
  const smallBreakpoint = 640;
  const screenWidth = useResponsiveScreenSize();
  const { pathname } = useLocation();

  if (pathname === '/') {
    return null;
  }

  return screenWidth > smallBreakpoint ? (
    <NavBar />
  ) : (
    <BurgerMenu />
  );
}

export default Navigation;
