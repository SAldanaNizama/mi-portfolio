import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Navbar from "./components/navbar/Navbar.jsx"
import Features from "./pages/features/Features.jsx"
import Pricing from './pages/pricing/Pricing.jsx';
import About from "./pages/about/About.jsx"
import Footer from './components/footer/Footer.jsx';
import "./App.css"

const App = () => {
  return (
    <div className=" bg-black min-h-screen">
     
      <Navbar/>
      <Routes>
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;