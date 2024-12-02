import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="bg-[#232536] text-white py-4">
      <div className="container  flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-white">{"{"}Finsweet</h2>
        </div>
        <nav className="flex gap-4">
          <NavLink to="/" className="hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="/service" className="hover:text-gray-300">
            Service
          </NavLink>
          <NavLink to="/company" className="hover:text-gray-300">
            Company
          </NavLink>
          <NavLink to="/career" className="hover:text-gray-300">
            Career
          </NavLink>
          <NavLink to="/blog" className="hover:text-gray-300">
            Blog
          </NavLink>
          <NavLink to="/contact_us" className="hover:text-gray-300">
            Contact us
          </NavLink>
          <NavLink to="/clone" className="hover:text-gray-300">
            Clone project
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
