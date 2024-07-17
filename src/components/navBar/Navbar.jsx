import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-screen-xl mx-auto py-8 flex items-center justify-between gap-8">
      <div className="max-w-[100px]">
        <Link to="/">
          <img src="./logoSamir.jpg" alt="Logo" />
        </Link>
      </div>
      <ul className="flex items-center gap-12">
        <li>
          <Link
            to="/"
            className="relative pb-3 text-white transition-transform duration-300 hover:scale-105 hover:text-gray-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="relative pb-3 text-white transition-transform duration-300 hover:scale-105 hover:text-gray-300"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className="relative pb-3 text-white transition-transform duration-300 hover:scale-105 hover:text-gray-300"
          >
            Skills
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
