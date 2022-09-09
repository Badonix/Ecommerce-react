import { NavLink, Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useGlobalContext } from "../context";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
const StyledNavbar = () => {
  const { cartItems } = useGlobalContext();
  const [isOn, setIsOn] = useState(false);
  function changeNav() {
    setIsOn((prev) => !prev);
  }
  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/">
          <img src={logo} />
        </Link>
        <Link to="/">
          {" "}
          <h2>Title</h2>
        </Link>
      </div>
      <div className={isOn ? "right come-in" : "right"}>
        <CgClose onClick={changeNav} className="close-icon" />
        <NavLink
          onClick={changeNav}
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
          onClick={changeNav}
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
          onClick={changeNav}
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
          onClick={changeNav}
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
        <NavLink
          onClick={changeNav}
          className="nav-item cart-icon"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "rgb(183, 208, 255)" : "",
            };
          }}
          to="/Cart"
        >
          <FaShoppingCart />
          <p
            style={
              cartItems.length == 0
                ? { display: "none" }
                : { display: "inline" }
            }
          >
            {cartItems.length}
          </p>
        </NavLink>
      </div>
      <GiHamburgerMenu onClick={changeNav} className="hamburger-icon" />
    </nav>
  );
};
export default StyledNavbar;
