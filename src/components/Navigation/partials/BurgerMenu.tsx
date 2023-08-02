import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  AtSymbolIcon,
  FolderIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

const solutions = [
  { name: 'About me', description: 'Read about me as a person and the journey I\'ve taken', href: '/about-me', icon: UserIcon },
  { name: 'Portfolio', description: 'Read about my experiences as a developer', href: '/portfolio', icon: FolderIcon },
  { name: 'Contact me', description: 'Ways to contact me', href: '/contact-me', icon: AtSymbolIcon },
]
const BurgerMenu = () => {
  return (
    <Popover className='relative bg-gradient-to-r from-indigo-500 to-indigo-800 pl-8 top-0'>
      <Popover.Button className='inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-10 h-12 stroke-white'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
        </svg>
      </Popover.Button>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-900'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'
      >
        <Popover.Panel className='absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 bg-white'>
          <div className='w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-indigo-400/10 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5'>
            <div className='p-4'>
              {solutions.map((item) => (
                <div key={item.name} className='group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50'>
                  <div className='mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                    <item.icon className='h-6 w-6 text-gray-600 group-hover:text-indigo-600' aria-hidden='true' />
                  </div>
                  <div>
                    <a href={item.href} className='font-semibold text-gray-900'>
                      {item.name}
                      <span className='absolute inset-0' />
                    </a>
                    <p className='mt-1 text-gray-600'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
export default BurgerMenu;