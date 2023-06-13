const NavigationBar = () => {
  return (
    <div className="flex justify-end p-8 border-black border-b-2">
      <div className="grid grid-cols-4">
        <span>
          <a href="/" className="hover:border-black hover:border-b-2" >Home</a>
        </span>
        <span>
          <a href="/about-me" className="hover:border-black hover:border-b-2">About me</a>
        </span>
        <span>
          <a href="/portfolio" className="hover:border-black hover:border-b-2" >Portfolio</a>
        </span>
        <span>
          <a href="/contact-me" className="hover:border-black hover:border-b-2" >Contact me</a>
        </span>
      </div>
    </div>
  )
}

export default NavigationBar;
