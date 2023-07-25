import { aboutMeData } from '@data/aboutMeData';
import { useResponsiveScreenSize } from '@hooks/index';

const AboutMeTimeline = () => {
  const { width } = useResponsiveScreenSize();
  const shouldApplyStyling = i => i % 2 && width >= 640;
  
  return (
    <div>
      {aboutMeData.map(({ title, description, image }, i) => (
        <div className='mt-16'>
          <p className='text-2xl'>{title}</p>
          <div className={`flex flex-col ${shouldApplyStyling(i) ? 'xl:flex-row' : 'xl:flex-row-reverse'} mt-6`}>
            <img src={image} className={`w-full h-96 object-cover rounded-lg shadow-2xl mb-8 md:mb-0  ${shouldApplyStyling(i) ? 'md:mr-8' : ''}`}/>
            <p className={`text-xl whitespace-pre-line ${shouldApplyStyling(i) ? '' : 'md:mr-8'}`}>{description}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default AboutMeTimeline;