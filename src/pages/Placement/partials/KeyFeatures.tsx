interface FeatureProps {
  heading: string;
  description: string;
}

const KeyFeatures = ({ features }: { features: FeatureProps[]}) => {
  
  return (
    <div className="justify-center py-16 flex flex-col">
      <div className="flex justify-center mb-8 text-3xl whitespace-pre-wrap font-semibold">
        Three Key features
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center lg:w-1/2 gap-4 px-8">
          {features.map(feature => (
            <div className="w-full h-full bg-gradient-to-r from-sky-100 to-indigo-50 p-8 shadow-xl">
              <p className="text-xl font-bold">{feature.heading}</p>
              <p className="text-lg text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default KeyFeatures;