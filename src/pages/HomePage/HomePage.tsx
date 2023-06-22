import avatarImage from "../../assets/avatar.jpg"
import { Typewriter } from "../../components";
import { Page } from "../../layouts"

const HomePage = () => {
  return (
    <Page classes=' bg-homepage-background bg-cover'>
      <div className="flex justify-center md:justify-start">
        <img src={avatarImage} className="object-cover h-36 w-40 rounded-full" />
      </div>

      <div className='text-4xl md:text-5xl text-white mt-8'>
        <Typewriter />
      </div>
    </Page>
  )
}

export default HomePage;