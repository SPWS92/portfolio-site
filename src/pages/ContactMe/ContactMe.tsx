import { Page } from '@layouts/index';

const ContactMe = () => (
  <Page>
    <div className='flex flex-col justify-center items-center mt-16 p-8'>
      <div>
        <p className='flex mb-8 text-3xl whitespace-pre-wrap font-semibold border-l-4 w-fit border-indigo-500 pl-2'>
            Get in touch
        </p>

        <div className='mb-4 space-y-6'>
          <p>Currently the best way to contact me is through LinkedIn.</p>
          <button className='border-2 border-indigo-500 rounded-full py-1 px-2 text-indigo-500 hover:border-indigo-800 hover:text-indigo-800 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer'>
            Sean Smith | LinkedIn
          </button>
        </div>
      </div>
    </div>
  </Page>
)

export default ContactMe;