const AboutTheProduct = ({ product, summary }) => {
  
  return (
    <div className="justify-center py-8 flex flex-col">
      <div className="flex justify-center mb-8 text-3xl whitespace-pre-wrap font-semibold">
        What is "{product}"?
      </div>
      <p className="md:w-2/3 p-8 flex justify-center self-center text-center text-xl leading-relaxed">{summary}</p>
    </div>
  )
}

export default AboutTheProduct;