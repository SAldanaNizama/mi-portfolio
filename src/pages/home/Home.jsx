import React from "react";
import "./home.css";
const Home = () => {
  return (
    <header className="relative py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-screen-xl mx-auto">
      <div className="content">
        <span className="blur"></span>
        <span className="blur"></span>
        <h4 className="mb-4 text-gray-300">
          FULL STACK || FRONT END || BACK END
        </h4>
        <h1 className="mb-4 text-4xl font-bold text-white">
          HI, I'm <span className="samir">SAMIR</span>, A Web Developer
        </h1>
        <p className="mb-8 text-gray-300">
          Hello! I'm Samir, a passionate web developer with expertise in
          JavaScript and React. I specialize in end-to-end project development
          and am committed to continuous learning. My goal is to become a senior
          developer while sharing my passion for programming with others.
        </p>
        <button className="px-6 py-3 text-white bg-blue-600 rounded-lg">
          Get started
        </button>
      </div>
      <div className="image relative">
        <img
          src="./imagenHeader.jpg"
          alt="Header Image"
          className="max-w-[600px] mx-auto"
        />
      </div>
    </header>
  );
};

export default Home;
