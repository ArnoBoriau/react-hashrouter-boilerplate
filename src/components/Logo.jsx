import { NavLink } from "react-router";

const Logo = () => {
  return (
    <>
      <NavLink to="/" className="logo__a">
        <div className="logo__div">
          <img src="./vite.svg" alt="Logo" />
          <h1 className="logo__title">Name</h1>
        </div>
      </NavLink>
    </>
  );
};

export default Logo;
