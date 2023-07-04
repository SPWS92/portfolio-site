import { NavLink } from "react-router-dom";

const Header = ({ name, findOutMore }) => {
  return (
    <div className="h-screen bg-black relative bg-gradient-to-t to-slate-950 from-slate-500 overflow-hidden flex flex-col justify-between">
      <img src="/images/skyline1.jpg" className="w-full h-full object-cover absolute mix-blend-overlay" />
      <div className="relative p-8 flex flex-col md:flex-row min-h-56 lg:h-56 md:px-24 lg:px-48 flex items-center justify-center md:justify-start content-center">
        <p className="font-bold text-3xl  md:text-5xl text-white">{name}</p>
        <div className="pt-2 md:pl-8">
          <p className="text-center md:text-left text-lg lg:w-1/2  font-semibold lg:text-xl text-white">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper euismod purus, non tincidunt mauris condimentum non. Proin pellentesque elit at gravida dictum."}</p>
          <a href={findOutMore}><button className="mt-4 border rounded-full bg-white px-3 py-1 font-semibold hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Find out more</button></a>
        </div>
      </div>
      <div className="relative flex justify-center p-4">
        <span className="text-white animate-bounce flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </div>
    </div>
  )};

export default Header;