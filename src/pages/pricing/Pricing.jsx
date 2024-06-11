// src/pages/Pricing.js
import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="container">
      <h2 className="header">PROJECT PRICING PLANS</h2>
      <p className="sub-header">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque doloremque debitis maxime nobis cum! Facere architecto sapiente commodi deserunt, nostrum optio atque consectetur fuga natus sequi enim numquam harum repellat!
      </p>
      <div className="pricing">
        {/* Pricing cards */}
        <div className="card">
          <div className="content">
            <h4>Basic plan</h4>
            <h3>$0</h3>
            <p><i className="ri-checkbox-circle-line"></i> Smart coding plan</p>
            <p><i className="ri-checkbox-circle-line"></i> At home workouts</p>
          </div>
          <button className="btn">Join Now</button>
        </div>
        {/* Add more cards as needed */}
      </div>
    </section>
  );
};

export default Pricing;
