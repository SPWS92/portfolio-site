import { useEffect, useState } from "react";

import { NavBar } from "../../components"
import BurgerMenu from "./partials/BurgerMenu"

const Navigation = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const smallBreakpoint = 640;

  useEffect(() => {
    const handleWindowResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return screenWidth > smallBreakpoint ? (
    <NavBar />
  ) : (
    <BurgerMenu />
  );
}

export default Navigation;
