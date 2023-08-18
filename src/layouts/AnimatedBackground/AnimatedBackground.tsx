import { ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
  backgroundColour?: string;
  shapeColour?: string;
}

const elements = [
  {
    animation: 'animate-motion',
    position: 'top-0',
    shape: 'border-l-[75px] border-l-transparent border-t-[100px] border-r-[75px] border-r-transparent'
  },
  {
    animation: 'animate-motion3',
    position: 'top-0 right-3/4',
    shape: 'border-l-[50px] border-l-transparent border-t-[75px] border-r-[50px] border-r-transparent'
  },
  {
    animation: 'animate-motion',
    position: 'top-0 right-1/2',
    shape: 'border-l-[100px] border-l-transparent border-t-[125px] border-r-[100px] border-r-transparent blur-sm'
  },
  {
    animation: 'animate-motion2',
    position: 'top-0 right-1/3',
    shape: 'border-l-[75px] border-l-transparent border-t-[100px] border-r-[75px] border-r-transparent'
  },
  {
    animation: 'animate-motion3',
    position: 'top-0 right-0',
    shape: 'border-l-[50px] border-l-transparent border-t-[75px] border-r-[50px] border-r-transparent'
  },
  {
    animation: 'animate-motion',
    position: 'bottom-1/2 right-1/3',
    shape: 'border-l-[75px] border-l-transparent border-t-[100px] border-r-[75px] border-r-transparent'
  },
  {
    animation: 'animate-motion4',
    position: 'bottom-1/2 left-0',
    shape: 'border-l-[100px] border-l-transparent border-t-[125px] border-r-[100px] border-r-transparent blur-sm'
  },
  {
    animation: 'animate-motion4',
    position: 'bottom-1/2 right-1/4',
    shape: 'border-l-[100px] border-l-transparent border-t-[125px] border-r-[100px] border-r-transparent blur-sm'
  },
  {
    animation: 'animate-motion3',
    position: 'bottom-1/2 right-1/2',
    shape: 'border-l-[100px] border-l-transparent border-t-[125px] border-r-[100px] border-r-transparent blur-sm'
  },
  {
    animation: 'animate-motion2',
    position: 'bottom-1/2 right-3/4',
    shape: 'border-l-[50px] border-l-transparent border-t-[75px] border-r-[50px] border-r-transparent blur-sm'
  },
  {
    animation: 'animate-motion2',
    position: 'bottom-1/2 right-0',
    shape: 'border-l-[50px] border-l-transparent border-t-[75px] border-r-[50px] border-r-transparent blur-sm'
  },
  {
    animation: 'animate-motion',
    position: 'top-3/4 left-1/3',
    shape: 'border-l-[100px] border-l-transparent border-t-[125px] border-r-[100px] border-r-transparent blur-sm'
  },
  {
    animation: 'animate-motion',
    position: 'bottom-0',
    shape: 'border-l-[50px] border-l-transparent border-t-[75px] border-r-[50px] border-r-transparent'
  },
  {
    animation: 'animate-motion',
    position: 'bottom-0 right-1/3',
    shape: 'border-l-[50px] border-l-transparent border-t-[75px] border-r-[50px] border-r-transparent blur-sm'
  },
  {
    animation: 'animate-motion',
    position: 'bottom-0 right-1/2',
    shape: 'border-l-[100px] border-l-transparent border-t-[125px] border-r-[100px] border-r-transparent'
  },
  {
    animation: 'animate-motion',
    position: 'bottom-0 right-3/4',
    shape: 'border-l-[75px] border-l-transparent border-t-[100px] border-r-[75px] border-r-transparent blur-sm'
  },
  {
    animation: 'animate-motion2',
    position: 'bottom-0 right-0',
    shape: 'border-l-[50px] border-l-transparent border-t-[75px] border-r-[50px] border-r-transparent blur-sm'
  },
];

const AnimatedBackground = ({ children, backgroundColour = 'bg-orange-100', shapeColour = 'border-t-orange-100' }: PageProps) => {
  return (
    <div className={`h-screen ${backgroundColour} relative overflow-hidden flex flex-col justify-center`}>
      {elements.map(({ animation, position, shape }, index) => (
        <div
          key={index}
          className={`absolute ${animation} ${position} ${shape} ${shapeColour} mix-blend-multiply opacity-70 hover:bg-blue-500`}></div>
      ))}
      {children}
    </div>
  )
};

export default AnimatedBackground;