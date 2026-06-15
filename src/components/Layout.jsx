import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="bg-slate-900 text-white px-10 py-4 shadow-lg">
        <div className="flex items-center justify-between">

          {/* LEFT - Logo */}
          <h1 className="text-3xl font-bold text-green-400">
            MY SHOP
          </h1>

          {/* CENTER - Navigation Links */}
          <div className="flex gap-10 text-lg font-medium">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-green-400" : "hover:text-green-400"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-green-400" : "hover:text-green-400"
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-green-400" : "hover:text-green-400"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-green-400" : "hover:text-green-400"
              }
            >
              Contact
            </NavLink>

          </div>

          {/* RIGHT - Auth Buttons */}
          <div className="flex gap-4">

            <button className="bg-blue-600 px-5 py-2 rounded-xl hover:bg-blue-700 transition duration-300 shadow-md">
              Login
            </button>

            <button className="bg-gray-600 px-5 py-2 rounded-xl hover:bg-gray-700 transition duration-300 shadow-md">
              Register
            </button>

          </div>

        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;