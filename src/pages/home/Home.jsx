// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <header className="container">
      <div className="content">
        <span className="blur"></span>
        <span className="blur"></span>
        <h4>CREATE YOUR SITE LINE A PRO</h4>
        <h1>HI, I'm <span>SAMIR</span>, A Web Developer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam distinctio, ad laboriosam repudiandae maxime beatae est, dignissimos deserunt dicta, quidem voluptate minus delectus expedita minima. Tempora porro sit eveniet voluptas.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis iusto, assumenda eum veritatis laboriosam cupiditate! Distinctio, maxime inventore architecto pariatur at impedit ipsum nesciunt minus nihil odio! Est, sit.
        </p>
        <button className="btn">Get started</button>
      </div>
      <div className="image">
        <img src="/imagen/imagenHeader.jpg" alt="Header" />
      </div>
    </header>
  );
};

export default Home;
