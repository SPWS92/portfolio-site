import avatarImage from "../../assets/avatar.jpg"
import { Typewriter } from "../../components";
import { Page } from "../../layouts"

const HomePage = () => {
  return (
    <Page>
      <div className="h-screen bg-black relative bg-gradient-to-r from-slate-800 to-slate-700 overflow-hidden flex flex-col top-1/2">
        <img src="/images/skyline1.jpg" className="w-full h-full object-cover absolute mix-blend-overlay" />
        <div className="absolute flex flex-col top-1/4 md:left-1/4">
          <div className="flex justify-center md:justify-start w-screen">
            <img src={avatarImage} className="object-cover h-36 w-40 rounded-full" />
          </div>
          <div className='px-4 text-3xl md:text-5xl text-white mt-8'>
            <Typewriter />
          </div>
        </div>
      </div>
    </Page>
  )
}

export default HomePage;