import { FeatureCard } from '@components/index';
import { FeatureProps } from '@data/portfolioData';

interface AboutProductProps {
  product?: string;
  summary?: string;
  features?: FeatureProps[];
}

const AboutTheProduct = ({ product, summary, features }: AboutProductProps) => {
  if (!product || !summary) {
    return null;
  }

  return (
    <div className='py-24 flex flex-col p-8 xl:px-96 space-y-10'>
      <div>
        <p className='flex mb-8 text-3xl whitespace-pre-wrap font-semibold border-l-4 w-fit border-indigo-500 pl-2'>
        What is "{product}"?
        </p>
        <p className='flex text-xl leading-relaxed whitespace-pre-wrap'>{summary}</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {features?.map(feature => (
          <FeatureCard
            feature={feature}
            key={feature.id}>
            <div className='w-full flex justify-start'>
              <div className='rounded-full bg-gradient-to-r from-indigo-500 to-indigo-800 w-fit p-2 mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='white'
                  className='w-8 h-8'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z' />
                </svg>
              </div>
            </div>
          </FeatureCard>
        ))}
      </div>
    </div>
  )};

export default AboutTheProduct;