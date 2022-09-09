import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Products">Products</Link>
      <Link to="/Cart">
        <FaShoppingBasket />
      </Link>
    </nav>
  );
};
export default Navbar;
