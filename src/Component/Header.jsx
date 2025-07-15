
import "./Header.css";
import { Link } from "react-router-dom";
import { Cart_Context, useCartContext } from "../Context";
const Header = () => {
  const { Cart, setCart } = useCartContext();


  return (
    <header>
      <nav className="container">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/cart">
            <li>Cart ({Cart.length})</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
