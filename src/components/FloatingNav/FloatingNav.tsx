import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

import BurgerMenu from "./partials/DropdownMenu"

const Link = ({to, text} : { to: string, text: string }) => (
  <NavLink to={to} className={({isActive}) =>
    `${isActive ? "border-b-2 border-white" : ""} hover:border-white hover:border-b-2 text-white`
  }>{text}</NavLink>
);

const FloatingNav = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const smallBreakpoint = 640;

  useEffect(() => {
    const handleWindowResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return screenWidth > smallBreakpoint ? (
    <nav className="flex pl-4 pr-4 md:pl-8 md:pr-8 mb-8 drop-shadow-2xl justify-between items-center bg-gradient-to-r from-slate-950 to-slate-900 rounded-lg">
      <a href="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 stroke-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </a>

      <div className="text-xl pt-4 pb-4 md:pt-8 md:pb-8">
        <span className="pr-8">
          <Link to="/about-me" text="About me" />
        </span>
        <span className="pr-8">
          <Link to="/portfolio" text="Portfolio" />
        </span>
        <span>
          <Link to="/contact-me" text="Contact me" />
        </span>
      </div>
    </nav>
  ) : (
    <BurgerMenu />

  );
}

export default FloatingNav;
