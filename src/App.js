import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Projects from "./pages/features/Projects.jsx";
import Skills from "./pages/pricing/Skills.jsx";
import About from "./pages/about/About.jsx";
import CustomCursor from "./components/customCursor/CustomCursor.jsx";
import "./App.css";

const App = () => {
  return (
    <div className=" bg-black min-h-screen">
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
