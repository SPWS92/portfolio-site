const Header = ({ name, findOutMore }) => {
  return (
    <div className="h-full md:h-1/2-screen bg-black relative bg-gradient-to-t to-slate-950 from-slate-500 overflow-hidden flex flex-col justify-between">
      <img src="/images/skyline1.jpg" className="w-full h-full object-cover absolute mix-blend-overlay" />
      <div className="relative p-8 flex grow flex-col md:flex-row min-h-56 lg:h-56 md:px-24 lg:px-48 flex items-center justify-center md:justify-start content-center">
        <p className="font-bold text-3xl  md:text-5xl text-white">{name}</p>
        <div className="pt-2 md:pl-8 flex flex-col">
          <p className="text-center md:text-left text-lg lg:w-1/2  font-semibold lg:text-xl text-white">"For 260 years, we have shown relentless curiosity to discover our clients’ challenges and to work together to identify the best solutions. We enable better safety, technical, operational and business performance in the Maritime sector, serving clients across the globe."</p>
          <a href={findOutMore} className="flex justify-center md:justify-start"><button className="mt-4 border rounded-full bg-white px-3 py-1 font-semibold hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Find out more</button></a>
        </div>
      </div>
      <div className="bg-white rounded-t-full w-screen h-8"></div>
    </div>
  )};

export default Header;