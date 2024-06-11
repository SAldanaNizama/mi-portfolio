import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <Link to="/">
          <img src="./logoSamir.jpg" alt="Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li className="link"><Link to="/">Home</Link></li>
        <li className="link"><Link to="/features">Features</Link></li>
        <li className="link"><Link to="/pricing">Pricing</Link></li>
        <li className="link"><Link to="/about">About</Link></li>
      </ul>
      <button className="btn">Hire Me</button>
    </nav>
  );
};

export default Navbar;
