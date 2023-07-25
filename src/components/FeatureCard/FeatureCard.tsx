const FeatureCard = ({ children: icon, feature }) => {
  return (
    <div className='w-full h-full border rounded-lg p-8 shadow-xl'>
      {icon}
      <p className='text-xl font-bold'>{feature.heading}</p>
      {feature?.description ?? <p className='text-lg text-gray-700'>{feature.description}</p>}
    </div>
  )
}

export default FeatureCard;