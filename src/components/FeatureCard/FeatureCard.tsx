import { ReactElement } from 'react';
import { FeatureProps } from '@data/portfolioData';

interface FeatureCardProps {
  children: ReactElement;
  feature: FeatureProps
}

const FeatureCard = ({ children: icon, feature }: FeatureCardProps) => {
  return (
    <div className='w-full h-full border rounded-lg p-8 shadow-xl'>
      {icon}
      <p className='text-xl font-bold'>{feature.heading}</p>
      {feature?.description ?? <p className='text-lg text-gray-700'>{feature.description}</p>}
    </div>
  )
}

export default FeatureCard;