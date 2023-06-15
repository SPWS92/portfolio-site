import { NavLink } from "react-router-dom";

const Link = ({ to, text } : { to: string, text: string }) => (
  <NavLink to={to} className={({ isActive }) =>
    `${isActive ? "border-b-2 border-white" : ""} hover:border-white hover:border-b-2 text-white`
  }>{text}</NavLink>
);

const NavigationBar = () => {
  return (
    <div
      className="flex justify-end p-8 border-black border-b-2 bg-black"
      style={{
        backgroundColor: 'black',
        boxShadow: '0 0 5px 10px black',
      }}>
      <div className="grid grid-cols-3 text-xl">
        {/* <span>
          <Link to="/" text="Home" />
        </span> */}
        <span>
          <Link to="/about-me" text="About me" />
        </span>
        <span>
          <Link to="/portfolio" text="Portfolio" />
        </span>
        <span>
          <Link to="/contact-me" text="Contact me" />
        </span>
      </div>
    </div>
  )
}

export default NavigationBar;
