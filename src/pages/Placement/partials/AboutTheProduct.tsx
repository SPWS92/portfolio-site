const AboutTheProduct = ({ product }) => {
  
  return (
    <div className="justify-center pt-24 flex flex-col">
      <div className="flex justify-center mb-16 text-3xl whitespace-pre-wrap font-semibold">
        What is "{product}"?
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 place-items-center lg:px-48">
      </div>
    </div>
  )
}

export default AboutTheProduct;