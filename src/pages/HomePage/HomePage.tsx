import { NavLink } from 'react-router-dom';
import { Footer } from '@components/index';
import { useResponsiveScreenSize } from '@hooks/index';
import { Page } from '@layouts/index';
import { AboutMe } from '@pages/index';

const HomePage = () => {
  const { height } = useResponsiveScreenSize()
  return (
    <Page>
      <div className={`${height <= 375 ? 'h-fit' : 'h-screen'} relative bg-gradient-to-r from-indigo-500 to-indigo-800 overflow-hidden flex flex-col font-entry`}>
        <div className='flex flex-col grow sm:justify-center md:mx-28 relative font-medium h-full p-8 xl:px-26 2xl:px-44  3xl:px-64'>
          <div className='flex flex-col lg:flex-row items-center'>
            <div className='flex flex-col text-opacity-50'>
              <div className='text-3xl md:text-5xl text-white/70 py-6'>
                <p className='text-2xl mb-4'>Welcome</p>
                <p className='text-6xl mb-4'>I'm Sean <span className=' text-opacity-70'>Smith</span></p>
                <p className='text-xl decoration-white/30'>I'm a Software Engineer with a wealth of experience in Front-end Development working out of Huddersfield, England.</p>
                <p className='text-xl decoration-white/30'>Although I focus primarily on React and React Native, I also have experience in AngularJS and Vue.js.</p>
              </div>
              <div className='mt-4 flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0'>
                <NavLink to='/about-me' className='rounded-full text-white border py-2 px-4 w-44 text-opacity-70 text-center hover:bg-white/20 hover:text-white/90 text-lg'>About me</NavLink>
                <NavLink to='/portfolio' className='rounded-full text-white border py-2 px-4 w-44 text-opacity-70 text-center hover:bg-white/20 hover:text-white/90 text-lg'>Portfolio</NavLink>
              </div>
            </div>
            <img src='/images/slanted_iphone.png' className='hidden lg:block mt-24 md:h-60vh lg:h-80vh' />
          </div>
        </div>
        <div className={`absolute flex bottom-0 w-full ${height > 499 ? 'justify-center' : 'justify-end'}`}>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='white' className='w-12 h-12 flex animate-bounce'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5' />
          </svg>
        </div>
      </div>
      <AboutMe />
      <Footer />
    </Page>
  )
}

export default HomePage;