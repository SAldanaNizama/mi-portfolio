/* eslint-disable jsx-a11y/img-redundant-alt */
// src/pages/Home.js
import React from 'react';
import "./home.css"
const Home = () => {
  return (
    <header className="relative py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-screen-xl mx-auto">
      <div className="content">
        <span className="blur"></span>
        <span className="blur"></span>
        <h4 className="mb-4 text-gray-300">CREATE YOUR SITE LIKE A PRO</h4>
        <h1 className="mb-4 text-4xl font-bold text-white">
          HI, I'm{' '}
          <span className="samir">
            SAMIR
          </span>
          , A Web Developer
        </h1>
        <p className="mb-8 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam distinctio, ad laboriosam repudiandae maxime beatae est, dignissimos deserunt dicta, quidem voluptate minus delectus expedita minima. Tempora porro sit eveniet voluptas.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis iusto, assumenda eum veritatis laboriosam cupiditate! Distinctio, maxime inventore architecto pariatur at impedit ipsum nesciunt minus nihil odio! Est, sit.
        </p>
        <button className="px-6 py-3 text-white bg-blue-600 rounded-lg">Get started</button>
      </div>
      <div className="image relative">
        <img src="./imagenHeader.jpg" alt="Header Image" className="max-w-[600px] mx-auto" />
      </div>
    </header>
  );
};

export default Home;