import { NavLink } from "react-router";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <div className="container">
        <nav>
          <Logo />
          <div className="links">
            <ul className="link__list">
              <li className="link__item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="link__item">
                <NavLink to="/">Our Service</NavLink>
              </li>
              <li className="link__item">
                <NavLink to="/">About Us</NavLink>
              </li>
            </ul>
            <div className="btn--nav">
              <NavLink to="/">Contact Us</NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
