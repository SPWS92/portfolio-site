import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();
  if (pathname === '/') {
    return null;
  }
  return (
    <div className='h-12 w-screen bg-gray-800 flex justify-center align-center'>
      <p className='flex align-center items-center text-gray-400'>
        © All rights reserved. Sean Smith 2023
      </p>
    </div>
  )
}

export default Footer;