import React from "react";
import { FaReact, FaJsSquare, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiGraphql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiApollographql } from "react-icons/si";

const World = () => {
  return (
    <div className="bg-transparent text-blue-400 rounded-lg p-8 shadow-md">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">World</h2>
      </div>
      <div className="border border-blue-400 text-blue-400 rounded-lg p-8 shadow-md transform transition-transform hover:scale-105 max-w-lg mx-auto mb-8">
        <p className="text-lg mb-4">
          This project is a web application that displays country information
          using a GraphQL API. The application includes the following features:
          <br />
          <br />
          <strong>Framework Used:</strong> React with Vite.
          <br />
          <strong>GraphQL Requests:</strong> Apollo Client for making requests
          to the country API.
          <br />
          <strong>Responsive Design:</strong> Tailwind CSS ensures the
          application adapts to various screen sizes.
          <br />
          <strong>Search Bar:</strong> Allows users to search for countries by
          name.
          <br />
          <strong>Detailed Information:</strong> Clicking on a country displays
          additional information such as the capital, language, currency, and
          states (if available).
          <br />
          <strong>Country Images:</strong> Utilizes the Unsplash API for country
          images and another public API for flags.
        </p>
      </div>
      <div className="text-left mt-8">
        <div className="flex justify-center">
          <FaReact className="text-6xl mx-2 transition-transform hover:scale-110" />
          <FaJsSquare className="text-6xl mx-2 transition-transform hover:scale-110" />
          <SiGraphql className="text-6xl mx-2 transition-transform hover:scale-110" />
          <SiTailwindcss className="text-6xl mx-2 transition-transform hover:scale-110" />
          <SiVite className="text-6xl mx-2 transition-transform hover:scale-110" />
          <SiApollographql className="text-6xl mx-2 transition-transform hover:scale-110" />
        </div>
      </div>
      <div className="mt-8">
        <ul className="text-center">
          <li className="inline-block mx-4">
            <a
              href="https://github.com/SAldanaNizama/mi-reto-tecnico-fractalUp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-200"
            >
              <FaGithub className="text-5xl transition-transform hover:scale-110" />
            </a>
          </li>
          <li className="inline-block mx-4">
            <a
              href="https://mi-reto-tecnico-fractal-up-9uum.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-200"
            >
              <img
                src="/logoplaneta.png"
                alt="Deployed Application"
                className="h-16 transition-transform hover:scale-110"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default World;
