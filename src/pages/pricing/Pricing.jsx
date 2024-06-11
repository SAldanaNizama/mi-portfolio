// src/pages/Pricing.js
import React from 'react';


const Pricing = () => {
  return (
     <section className="container max-w-screen-xl mx-auto py-16">
      <h2 className="mb-4 text-3xl font-semibold text-center text-white">PROJECT PRICING PLANS</h2>
      <p className="max-w-xl mx-auto text-center text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque doloremque debitis maxime nobis cum! Facere architecto sapiente commodi deserunt, nostrum optio atque consectetur fuga natus sequi enim numquam harum repellat!</p>
      <div className="princing grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {[
          { plan: "Basic plan", price: "0$", features: ["Smart coding plan", "At home workouts"] },
          { plan: "Gold plan", price: "10$", features: ["Pro codes", "Smart coding plan", "At home workouts"] },
          { plan: "Diamond plan", price: "100$", features: ["Elite Code", "Diamond code", "Pro codes", "Smart coding plan", "At home workouts"] }
        ].map((card, index) => (
          <div key={index} className="card p-8 bg-gray-800 flex flex-col border-2 border-transparent rounded-lg transition-all duration-300 hover:bg-gray-700 hover:border-white">
            <div className="content flex-1 mb-8">
              <h4 className="mb-4 text-xl font-semibold text-white">{card.plan}</h4>
              <h3 className="pb-4 mb-8 text-2xl font-semibold text-white border-b-2 border-dashed border-white">{card.price}</h3>
              {card.features.map((feature, index) => (
                <p key={index} className="mb-4 text-white"><i className="ri-checkbox-circle-line text-gray-300 mr-2"></i>{feature}</p>
              ))}
            </div>
            <button className="px-6 py-3 text-white bg-transparent border-2 border-white rounded-lg transition-all duration-300 hover:bg-blue-600 hover:border-blue-600">Join Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
