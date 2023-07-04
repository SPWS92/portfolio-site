import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { Transition } from '@headlessui/react'

import { useResponsiveScreenSize } from "../../hooks";

const TypewriterComponent = () => {
  const [showCTA, setShowCTA] = useState(false);
  const screenSize = useResponsiveScreenSize();
  const isSmallScreen = screenSize <= 640;
  
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(50)
            .typeString("<span>Hi, I'm &nbsp<strong>Sean Smith</strong></span>")
            .pauseFor(500)
            .typeString(isSmallScreen ? "<br><br>" : "<br>")
            .typeString("<span>I'm a <strong>JavaScript Engineer</strong> working out of Huddersfield, UK</span>")
            .pauseFor(500)
            .typeString(isSmallScreen ? "<br><br>" : "<br>")
            .typeString("<span>I've been <strong>building Software</strong> since 2014</span>")
            .pauseFor(500)
            .callFunction(() => setShowCTA(true))
            .start();
        }}
      />
      <Transition
        show={showCTA}
        as={Fragment}
        enter="transition ease-out duration-1000"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
      >
        <NavLink to='/about-me'><button className="text-base bg-black mt-4 border rounded-full px-3 py-1 hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Find out more</button></NavLink>
      </Transition>
    </div>
  )}

export default TypewriterComponent;