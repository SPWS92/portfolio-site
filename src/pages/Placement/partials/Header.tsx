interface HeaderProps {
  name?: string;
  findOutMore?: string;
}

const Header = ({ name, findOutMore }: HeaderProps) => {
  return (
    <div className='p-8 mt-16 pb-2 xl:px-96'>
      <p className='text-4xl border-l-4 border-indigo-500 pl-2 mb-8'>{name}</p>
      <p className='w-full lg:w-3/4 text-xl border-indigo-500 pl-2 mb-4'>"For 260 years, we have shown relentless curiosity to discover our clients’ challenges and to work together to identify the best solutions. We enable better safety, technical, operational and business performance in the Maritime sector, serving clients across the globe."</p>
      <a href={findOutMore} className='text-orange-700 hover:underline w-fit pl-2'>Find out more</a>
    </div>
  )};

export default Header;