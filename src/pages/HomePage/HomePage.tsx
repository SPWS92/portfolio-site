import avatarImage from "../../assets/avatar.jpg"
import {Typewriter} from "../../components";

const HomePage = () => {
  return (
    <div className='App h-screen p-8'>
      <div className="flex justify-center md:justify-start">
        <img src={avatarImage} className="object-cover h-36 w-40 rounded-full" />
      </div>

      <div className='text-4xl md:text-5xl text-white'>
        <Typewriter />
      </div>
    </div>
  )
}

export default HomePage;