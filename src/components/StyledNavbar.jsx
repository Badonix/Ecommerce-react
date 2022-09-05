import { NavLink } from "react-router-dom";
const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        className="nav-item"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "rgb(183, 208, 255)" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="nav-item"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "rgb(183, 208, 255)" : "",
          };
        }}
        to="/About"
      >
        About
      </NavLink>
      <NavLink
        className="nav-item"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "rgb(183, 208, 255)" : "",
          };
        }}
        to="/Products"
      >
        Products
      </NavLink>
      <NavLink
        className="nav-item"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "rgb(183, 208, 255)" : "",
          };
        }}
        to="/Login"
      >
        Login
      </NavLink>
    </nav>
  );
};
export default StyledNavbar;
