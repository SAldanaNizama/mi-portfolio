import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Navbar from "./components/navbar/Navbar.jsx"
import Features from './pages/feactures/Feactures.jsx';
import Pricing from './pages/pricing/Pricing.jsx';
import About from "./pages/about/About.jsx"
import "./App.css"

const App = () => {
  return (
    <div className=" bg-black min-h-screen">
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
      <Routes>
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;