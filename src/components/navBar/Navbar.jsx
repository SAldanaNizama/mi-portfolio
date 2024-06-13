import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="max-w-screen-xl mx-auto py-8 flex items-center justify-between gap-8">
      <div className="max-w-[100px]">
        <Link to="/">
          <img src="./logoSamir.jpg" alt="Logo" />
        </Link>
      </div>
      <ul className="flex items-center gap-12">
        <li><Link to="/" className="relative pb-3 text-white">Home</Link></li>
        <li><Link to="/features" className="relative pb-3 text-white">Features</Link></li>
        <li><Link to="/pricing" className="relative pb-3 text-white">Pricing</Link></li>
        <li><Link to="/about" className="relative pb-3 text-white">About</Link></li>
      </ul>
      <button className="px-6 py-3 text-white bg-blue-600 rounded-lg">Hire Me</button>
    </nav>
  );
};

export default Navbar;