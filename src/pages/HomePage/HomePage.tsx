import Typewriter from "typewriter-effect";

const HomePage = () => {
  return (
    <div className='App text-5xl'>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(70)
            .typeString("Hi,")
            .pauseFor(600)
            .typeString(" I'm <strong>Sean Smith</strong>")
            .pauseFor(600)
            .typeString("<br>")
            .typeString("I'm a <strong>JavaScript Engineer</strong> working out of Huddersfield, UK")
            .pauseFor(600)
            .typeString("<br>")
            .typeString("I've been <strong>building Software</strong> since 2014")
            .start();
        }}
      />
    </div>
  )
}

export default HomePage;