import { useState } from 'react';

const NavigationBar = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <a href="#" >Home</a>
      <a>About me</a>
      <a>My Experiences</a>
    </div>
  )
}

export default NavigationBar;
