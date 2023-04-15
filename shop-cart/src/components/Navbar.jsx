import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="bg-gray-800 hover:bg-gray-900 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300">
      <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <h1 className="hover:scale-110 transition duration-300 ease-out text-white">E-Cart </h1>
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5  ">
          <NavLink to="/">
            <p className="hover:scale-110 transition duration-300 ease-in">Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl " />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
