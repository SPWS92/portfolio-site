import { ReactNode } from 'react';

interface PageProps {
  pageName?: string;
  children: ReactNode;
}

const Page = ({ pageName, children }: PageProps) => {
  return (
    <div className='flex-grow overflow-y-auto p-8 md:px-24 md:py-20 text-gray-800'>
      {pageName && <p className='flex text-3xl justify-center'>{pageName}</p>}
      {children}
    </div>
  )
};

export default Page;