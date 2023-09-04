import { Page } from '@layouts/index';

interface ContactButtonProps {
  text: string;
  url: string;
}

interface ContactSectionProps {
  title: string;
  cta: ContactButtonProps;
}

const ContactButton = ({ text, url }: ContactButtonProps) => (
  <a href={url}>
    <button className='border-2 border-indigo-500 rounded-full py-1 px-2 text-indigo-500 hover:bg-indigo-500 hover:text-white hover:font-semibold cursor-pointer w-28'>
      {text}
    </button>
  </a>
);

const ContactSection = ({ title, cta }: ContactSectionProps) => {
  return (
    <div className='md:w-96 p-8'>
      <p className='flex mb-8 text-3xl whitespace-pre-wrap font-semibold w-fit'>
        {title}
      </p>

      <div className='mb-4'>
        <p className='mb-6'>Currently the best way to contact me is through LinkedIn.</p>
        <ContactButton
          text={cta.text}
          url={cta.url} />
      </div>
    </div>
  )
}

const ContactMe = () => (
  <Page>
    <div className='flex flex-col md:flex-row justify-center items-center mt-16 p-8 md:divide-x-2'>
      {[
        { title: 'Get in touch', cta: { text: 'LinkedIn', url: 'https://www.linkedin.com/in/sean-smith-433b50b2/' }},
        // { title: 'Visit my GitHub', cta: { text: 'GitHub', url: 'https://www.linkedin.com/in/sean-smith-433b50b2/' }}
      ].map(({ title, cta }, index) =>
        <ContactSection
          key={`${title}-${index}`}
          title={title}
          cta={cta}
        />
      )}
    </div>
  </Page>
);

export default ContactMe;