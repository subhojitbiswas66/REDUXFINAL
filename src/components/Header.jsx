
import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between px-2 py-1 lg:px-4 lg:py-2  bg-gray-800 text-white">
        <h1 className="flex-1 font-bold uppercase text-green-500 font-san text-xl sm:text-2xl lg:text-4xl">
          my <span>shop</span>
        </h1>
        <nav className="flex-1 hidden sm:block">
          <ul className="flex items-center gap-10 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? ` border-b-2 border-green-500 text-green-500`
                    : "text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? ` border-b-2 border-green-500 text-green-500`
                    : "text-white"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? ` border-b-2 border-green-500 text-green-500`
                    : "text-white"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4">
          <Button text="Login" variant="primary" />
          <Button text="Register" variant="secondary" />
        </div>
      </header>
    </>
  );
};

export default Header;
