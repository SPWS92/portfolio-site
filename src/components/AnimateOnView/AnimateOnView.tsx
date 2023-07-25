import { useInView } from 'react-intersection-observer';
import { Transition } from '@headlessui/react';

const AnimateOnView = ({ children }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true
  });

  return (
    <div ref={ref} className='h-screen'>
      <Transition
        show={inView}
        enter='transition-opacity ease-linear delay-100 duration-1000'
        enterFrom='opacity-0 translate-y-48'
        enterTo='opacity-100 translate-y-0'
        leave='transition-opacity duration-150'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        {children}
      </Transition>
    </div>
  )};

export default AnimateOnView;