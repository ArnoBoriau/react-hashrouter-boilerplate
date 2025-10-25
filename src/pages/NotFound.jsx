import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <div className="container">
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <h1 style={{ fontWeight: "bold" }}>404 - Page Not Found</h1>
        <p style={{ marginTop: ".5rem" }}>
          Sorry, the page you are looking for does not exist.
        </p>
        <NavLink className="btn" style={{ marginTop: "1.5rem" }} to="/">
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
