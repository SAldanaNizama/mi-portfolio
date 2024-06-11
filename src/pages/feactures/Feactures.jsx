// src/pages/Features.js
import React from 'react';


const Features = () => {
  return (
    <section className="container max-w-screen-xl mx-auto py-16">
      <h2 className="mb-4 text-3xl font-semibold text-center text-white">OUR FEATURES</h2>
      <div className="features grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {Array(4).fill().map((_, index) => (
          <div key={index} className="card bg-gray-800 p-4 border-2 border-transparent rounded-lg transition-all duration-300 hover:bg-gray-700 hover:border-white">
            <span className="inline-block bg-blue-900 p-2 mb-4 text-2xl text-white rounded-lg"><i className="ri-money-dollar-box-line"></i></span>
            <h4 className="mb-2 text-xl font-semibold text-white">My Projects</h4>
            <p className="mb-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptas laudantium est doloribus rerum, tempore reiciendis officia aliquid ea, possimus, exercitationem consequatur dolore optio assumenda vitae odit asperiores porro sint!</p>
            <a href="#" className="text-white transition-all duration-300 hover:text-blue-700">Join now <i className="ri-arrow-right-fill"></i></a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
