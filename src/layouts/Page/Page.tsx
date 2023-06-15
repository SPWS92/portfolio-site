import { ReactNode } from 'react';

const Page = ({ children }: {children: ReactNode}) => {
  return (
    <div className='flex-grow overflow-y-auto p-8 md:px-24 md:py-20'>
      {children}
    </div>
  )
};

export default Page;