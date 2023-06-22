import { ReactNode } from 'react';

interface PageProps {
  pageName?: string;
  classes?: string;
  children: ReactNode;
}

const Page = ({ pageName, children, classes }: PageProps) => {
  return (
    <div className={'flex-grow overflow-y-auto p-8 md:px-24 md:py-20 text-gray-800 ' + classes}>
      {pageName && <p className='flex text-3xl justify-center'>{pageName}</p>}
      {children}
    </div>
  )
};

export default Page;