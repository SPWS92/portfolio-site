import { Page } from '@layouts/index';

import { NameCard, Qualifications, Timeline } from './partials';

const AboutMe = () => {

  return <Page>
    <div className='font-medium mt-16 p-8 xl:px-44 3xl:px-96'>
      <p className='text-4xl border-l-4 border-indigo-500 pl-2 mb-16'>About me</p>
      <NameCard />
      <Timeline />
      <Qualifications />
    </div>
  </Page>
}

export default AboutMe;