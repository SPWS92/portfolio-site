import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  const isSmallScreen = window.innerWidth <= 640;
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .changeDelay(50)
          .typeString("<span>Hi, I'm <strong>Sean Smith</strong></span>")
          .pauseFor(500)
          .typeString(isSmallScreen ? "<br><br>" : "<br>")
          .typeString("<span>I'm a <strong>JavaScript Engineer</strong> working out of Huddersfield, UK</span>")
          .pauseFor(500)
          .typeString(isSmallScreen ? "<br><br>" : "<br>")
          .typeString("<span>I've been <strong>building Software</strong> since 2014</span>")
          .start();
      }}
    />
  )}

export default TypewriterComponent;