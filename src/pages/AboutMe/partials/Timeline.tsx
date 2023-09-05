import { aboutMeData } from '@data/aboutMeData';
import { useResponsiveScreenSize } from '@hooks/index';

const AboutMeTimeline = () => {
  const { width } = useResponsiveScreenSize();
  const shouldApplyStyling = (i: number) => i % 2 && width >= 640;

  return (
    <div>
      {aboutMeData.map(({ period, description, image, alt }, i) => (
        <div
          key={`${i}-${period}`}
          className='mt-16'>
          <p className='text-2xl border-l-4 border-indigo-500 pl-2'>{period}</p>
          <div className={`flex flex-col ${shouldApplyStyling(i) ? 'xl:flex-row' : 'xl:flex-row-reverse'} mt-6`}>
            <img
              src={image}
              alt={alt}
              className={`w-full xl:w-1/3 h-96 object-cover rounded-lg shadow-2xl mb-8 md:mb-0  ${shouldApplyStyling(i) ? 'md:mr-8' : ''}`}/>
            <p className={`text-xl whitespace-pre-line ${shouldApplyStyling(i) ? '' : 'md:mr-8'}`}>{description}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default AboutMeTimeline;