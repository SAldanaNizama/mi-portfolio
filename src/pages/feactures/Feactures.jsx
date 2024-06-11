// src/pages/Features.js
import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="container">
      <h2 className="header">OUR FEATURES</h2>
      <div className="features">
        {/* Feature cards */}
        <div className="card">
          <span><i className="ri-money-dollar-box-line"></i></span>
          <h4>My Projects</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptas laudantium est doloribus rerum, tempore reiciendis officia aliquid ea, possimus, exercitationem consequatur dolore optio assumenda vitae odit asperiores porro sint!</p>
          <a href="#">Join now <i className="ri-arrow-right-fill"></i></a>
        </div>
        {/* Add more cards as needed */}
      </div>
    </section>
  );
};

export default Features;
