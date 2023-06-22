const Header = ({ name }) => (
  <div className="p-8 flex flex-col md:flex-row min-h-56 lg:h-56 md:px-24 lg:px-48 flex items-center justify-center md:justify-start content-center bg-gradient-to-r from-red-700 to-red-600">
    <p className="font-bold text-3xl  md:text-5xl text-white">{name}</p>
    <div className="pt-2 md:pl-8">
      <p className="text-center md:text-left text-lg lg:w-1/2  font-semibold lg:text-xl text-white">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper euismod purus, non tincidunt mauris condimentum non. Proin pellentesque elit at gravida dictum."}</p>
      <button className="mt-4 border rounded-full bg-white px-3 py-1 hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Find out more</button>
    </div>
  </div>
);

export default Header;