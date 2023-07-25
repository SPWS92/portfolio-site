interface ShowCaseItem {
    src: string;
}

const ShowCase = ({ showCaseItems }: { showCaseItems: ShowCaseItem[] }) => {
  return (
    <div className='flex flex-col items-center justify-center p-0 xl:p-8'>
      <div className='flex flex-col xl:flex-row w-full justify-center items-center lg:space-x-8'>
        {showCaseItems.map(({ src }) => (<img src={src} className='h-192 w-fit'/>))}
      </div>
    </div>
  )
};

export default ShowCase;