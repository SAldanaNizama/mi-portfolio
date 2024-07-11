import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="container max-w-screen-xl mx-auto py-16">
      <h2 className="mb-4 text-3xl font-semibold text-center text-white">
        MY PROJECTS
      </h2>
      <div className="features grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 justify-center md:justify-start md:ml-20">
        <Link
          to="/poleritas"
          className="card bg-gray-800 p-6 border-2 border-transparent rounded-lg transition-all duration-300 hover:bg-gray-700 hover:border-white w-full md:w-auto md:max-w-sm h-auto text-white no-underline"
        >
          <span className="inline-block bg-blue-900 p-2 mb-4 text-2xl text-white rounded-lg">
            <i className="ri-rocket-line"></i>
          </span>
          <h4 className="mb-2 text-xl font-semibold text-white">Poleritas</h4>
          <p className="mb-4 text-white">
            I developed in team "Poleritas", an e-commerce platform specialized
            in selling t-shirts, as the final project of the Soy Henry bootcamp.
            Technologies used: Frontend: React, JavaScript, CSS Backend: Express
            Database: PostgreSQL Authentication: Auth0 Payments: Stripe Main
            Functions: Secure authentication integration through Auth0. Product
            and shopping cart management. Payment processing using Stripe.
          </p>
        </Link>

        <Link
          to="/beer"
          className="card bg-gray-800 p-6 border-2 border-transparent rounded-lg transition-all duration-300 hover:bg-gray-700 hover:border-white w-full md:w-auto md:max-w-sm h-auto text-white no-underline"
        >
          <span className="inline-block bg-blue-900 p-2 mb-4 text-2xl text-white rounded-lg">
            <i className="ri-rocket-line"></i>
          </span>
          <h4 className="mb-2 text-xl font-semibold text-white">
            Project Beer
          </h4>
          <p className="mb-4 text-white">
            Our craft beer recipe platform offers a wide range of products for
            those interested in the industry, from recipes, styles, supplies and
            machinery to a community where you can share with colleagues
            interested in craft beers like you. The website offers a user
            experience focused on being as simple and efficient as possible.
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
