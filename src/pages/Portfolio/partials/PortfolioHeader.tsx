const PortfolioHeader = () => {
  return (
    <div className="h-48 bg-black relative bg-gradient-to-t to-slate-950 from-slate-500 overflow-hidden flex flex-col justify-between">
      <img src="/images/skyline1.jpg" className="w-full h-full object-cover absolute mix-blend-overlay" />
      <div className="relative p-8 flex flex-col md:flex-row min-h-56 lg:h-56 md:px-24 lg:px-48 flex items-center justify-center md:justify-start content-center">
        <p className="font-bold text-3xl  md:text-5xl text-white">Portfolio</p>
        <div className="pt-2 md:pl-8">
          <p className="text-center md:text-left text-lg lg:w-1/2  font-semibold lg:text-xl text-white">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper euismod purus, non tincidunt mauris condimentum non. Proin pellentesque elit at gravida dictum."}</p>
        </div>
      </div>
    </div>
  )
}

export default PortfolioHeader;