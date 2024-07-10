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
        <h2 className="mb-4 text-4xl font-bold text-white">Contact:</h2>
        <div className="socials flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/samir-aldana-nizama-579587260/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 border border-gray-300 p-2 text-xl rounded-full transition-all duration-300 hover:text-white hover:bg-blue-600 hover:border-blue-600"
          >
            <i className="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://wa.me/916436814"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 border border-gray-300 p-2 text-xl rounded-full transition-all duration-300 hover:text-white hover:bg-blue-600 hover:border-blue-600"
          >
            <i className="ri-whatsapp-line"></i>
          </a>
          <a
            href="mailto:samirnizama13@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 border border-gray-300 p-2 text-xl rounded-full transition-all duration-300 hover:text-white hover:bg-blue-600 hover:border-blue-600"
          >
            <i className="ri-mail-line"></i>
          </a>
        </div>
      </div>
      <div className="image relative">
        <img
          src="/imagenHeader.jpg"
          alt="Header Image"
          className="max-w-[600px] mx-auto"
        />
      </div>
    </header>
  );
};

export default Home;
