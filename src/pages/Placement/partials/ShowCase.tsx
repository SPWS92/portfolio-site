interface ShowCaseItem {
  id: number;
  src: string;
  alt: string;
}

const ShowCase = ({ showCaseItems }: { showCaseItems?: ShowCaseItem[] }) => {
  if (!showCaseItems?.length) {
    return null;
  }

  return (
    <div className='flex flex-col items-center justify-center p-0 xl:p-8'>
      <div className='flex flex-col xl:flex-row w-full justify-center items-center lg:space-x-8'>
        {showCaseItems.map(({ id, src, alt }) =>
          <img
            key={id}
            src={src}
            alt={alt}
            className='xl:h-192 w-fit'/>
        )}
      </div>
    </div>
  )
};

export default ShowCase;