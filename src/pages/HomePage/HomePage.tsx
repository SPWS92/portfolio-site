import { NavLink } from "react-router-dom";

import { Page } from "../../layouts";

const HomePage = () => {
  return (
    <Page>
      <div className="h-screen bg-black relative bg-gradient-to-r from-zinc-800 to-zinc-700 overflow-hidden flex flex-col justify-center items-center">
        <img src="/images/nature.jpg" className="w-full h-full object-cover absolute mix-blend-overlay" />
        <div className="absolute flex flex-col text-opacity-50">
          <div className='px-4 text-3xl md:text-5xl text-white/70 mt-8 text-center border-t-2 border-b-2 p-6'>
            <p className="text-6xl mb-4">Sean <span className=" text-opacity-70">Smith</span></p>
            <p className="text-xl decoration-white/30">software engineer / front-end developer</p>
          </div>
          <div className="mt-4 flex justify-around">
            <NavLink to="/about-me" className="text-white border py-2 px-4 w-44  text-opacity-70 text-center hover:bg-white/20 hover:text-white/90">About</NavLink>
            <NavLink to="/portfolio" className="text-white border py-2 px-4 w-44 text-opacity-70 text-center hover:bg-white/20 hover:text-white/90">Portfolio</NavLink>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default HomePage;