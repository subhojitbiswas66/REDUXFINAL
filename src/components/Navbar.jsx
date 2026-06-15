import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="navbar bg-base-200 shadow-lg px-8">
      
      {/* LEFT */}
      <div className="flex-1">
        <Link
          to="/"
          className="text-3xl font-bold text-primary"
        >
          MY SHOP
        </Link>
      </div>

      {/* CENTER */}
      <div className="hidden md:flex gap-6">
        <Link to="/" className="btn btn-ghost">
          Home
        </Link>

        <Link to="/products" className="btn btn-ghost">
          Products
        </Link>

        <Link to="/about" className="btn btn-ghost">
          About
        </Link>

        <Link to="/contact" className="btn btn-ghost">
          Contact
        </Link>
      </div>

      {/* RIGHT */}
      <div className="flex gap-4 items-center">

        <Link to="/cart" className="btn btn-ghost relative">
          🛒 Cart

          {cartItems.length > 0 && (
            <div className="badge badge-error absolute -top-2 -right-2">
              {cartItems.length}
            </div>
          )}
        </Link>

        <button className="btn btn-primary">
          Login
        </button>

        <button className="btn btn-secondary">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;