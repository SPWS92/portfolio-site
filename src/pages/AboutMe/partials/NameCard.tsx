const NameCard = () => {
  return (
    <div className='flex flex-col md:flex-row mb-16'>
      <img
        src='/images/avatar.jpg'
        alt="avatar image"
        className='rounded-full w-44 h-44 object-cover'/>
      <div className='flex flex-col justify-center md:ml-12'>
        <p className='text-4xl'>Sean Smith</p>
        <p className='text-xl'>JavaScript Engineer / Front-end Developer</p>
        <p className='text-md italic'>React, React Native, Angular & Vue.js</p>
      </div>
    </div>
  )
};

export default NameCard;