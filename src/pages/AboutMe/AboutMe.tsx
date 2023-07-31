import { FeatureCard } from '@components/index';
import { qualifications } from '@data/aboutMeData';
import { Page } from '@layouts/index';

import AboutMeTimeline from './partials/AboutMeTimeline';

const AboutMe = () => {

  return <Page>
    <div className='font-medium mt-16 p-8 xl:px-44 3xl:px-96'>
      <p className='text-4xl border-l-4 border-indigo-500 pl-2 mb-16'>About me</p>
      <div className='flex mb-16'>
        <img src='/images/avatar.jpg' className='rounded-full w-44 h-44 object-cover'/>
        <div className='flex flex-col justify-center ml-12'>
          <p className='text-4xl'>Sean Smith</p>
          <p className='text-xl'>JavaScript Engineer / Front-end Developer</p>
          <p className='text-md italic'>React, React Native, Angular & Vue.js</p>
        </div>
      </div>
      <AboutMeTimeline />
      <div className='flex justify-center mt-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {qualifications.map((qualification) => (
            <FeatureCard key={qualification.id} feature={qualification}>
              <div className='w-full flex justify-start'>
                <div className='rounded-full bg-gradient-to-r from-indigo-500 to-indigo-800 w-fit p-2 mb-4'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='white' className='w-8 h-8'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' />
                  </svg>
                </div>
              </div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  </Page>
}

export default AboutMe;