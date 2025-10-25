import { NavLink } from "react-router";
import Logo from "../Logo";
import Footersocials from "./Footersocials";

const Footer = () => {
  return (
    <>  
      <footer>
        <div className="container">
          <div className="footer__content">
            <Logo />
            <div className="links footer__links">
              <ul className="link__list footer__link__list">
                <li className="link__item footer__link__item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="link__item footer__link__item">
                  <NavLink to="/">Our Service</NavLink>
                </li>
                <li className="link__item footer__link__item">
                  <NavLink to="/">About Us</NavLink>
                </li>
                <li className="link__item footer__link__item">
                  <NavLink to="/">Contact Us</NavLink>
                </li>
              </ul>
            </div>
            <div className="link__list footer__link__list">
              <Footersocials />
            </div>
          </div>
        </div>
      </footer>
      <p className="copyright__p">Copyright, all right reserved</p>
    </>
  );
};

export default Footer;
