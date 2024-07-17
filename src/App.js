import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Navbar from "./components/navbar/Navbar";
import Projects from "./pages/projects/Projects.jsx";
import Skills from "./pages/pricing/Skills.jsx";
import CustomCursor from "./components/customCursor/CustomCursor.jsx";
import Poleritas from "./pages/project/Poleritas.jsx";
import World from "./pages/project/World.jsx";
import "./App.css";

const App = () => {
  return (
    <div className=" bg-black min-h-screen">
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/" element={<Home />} />
        <Route path="/poleritas" element={<Poleritas />} />
        <Route path="/world" element={<World />} />
      </Routes>
    </div>
  );
};

export default App;
