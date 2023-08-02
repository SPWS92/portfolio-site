import { NavLink } from 'react-router-dom'

const navigation = [
  { name: 'ABOUT', href: '/about-me' },
  { name: 'PORTFOLIO', href: '/portfolio' },
  { name: 'CONTACT', href: 'contact-me' },
]

const NavBar = () => (
  <div className='relative bg-gradient-to-r from-indigo-500 to-indigo-800 shadow-xl'>
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <div className='relative flex h-16 items-center justify-between'>
        <div className='flex flex-1 justify-center sm:justify-between w-full items-center'>
          <div className='hidden sm:ml-6 sm:block'>
            <div className='flex space-x-4 items-center justify-between w-full'>
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => `rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'bg-white/20 text-white' : 'text-gray-300 hover:bg-white/40 hover:text-white'}`}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className='flex space-x-2'>
            <a href='https://www.linkedin.com/in/sean-smith-433b50b2/'>
              <img src='/images/linkedin.png' className='h-6 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300' />
            </a>
            <a href='https://github.com/SPWS92'>
              <img src='/images/github.png' className='h-6 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300' />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NavBar;