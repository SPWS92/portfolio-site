import { qualifications } from '../../data/aboutMeData';
import { Page } from '../../layouts';
import AboutMeTimeline from './partials/AboutMeTimeline';

const AboutMe = () => {

  return <Page>
    <div className='font-medium mt-16 p-8 lg:px-24'>
      <p className="text-4xl border-l-4 border-indigo-500 pl-2 mb-16">About me</p>
      <div className='flex mb-16'>
        <img src='/images/avatar.jpg' className='rounded-full w-44 h-44 object-cover'/>
        <div className='flex flex-col justify-center ml-12'>
          <p className='text-4xl'>Sean Smith</p>
          <p className='text-xl'>JavaScript Engineer / Front-end Developer</p>
          <p className='text-md italic'>React, React Native, Angular & Vue.js</p>
        </div>
      </div>
      <AboutMeTimeline />
      <div className="flex justify-center mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center lg:w-1/2 gap-4 px-8">
          {qualifications.map(({ heading }) => (
            <div className="w-full h-full bg-gradient-to-r from-sky-100 to-indigo-50 p-8">
              <p className="text-xl font-bold">{heading}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Page>
}

export default AboutMe;