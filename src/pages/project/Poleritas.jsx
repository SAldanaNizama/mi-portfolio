import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaDatabase,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiPostgresql } from "react-icons/si";

// Team members list
const teamMembers = [
  {
    name: "Ignacio Araoz",
    linkedIn: "https://www.linkedin.com/in/ignacio-araoz-23710b28b/",
  },
  {
    name: "Mateo Giampietro",
    linkedIn: "https://www.linkedin.com/in/mateo-giampietro-414461292/",
  },
  {
    name: "David Morcillo Benavidez",
    linkedIn: "https://www.linkedin.com/in/david-morcillo-benavidez-aljo1996/",
  },
  {
    name: "Brayan Holguin",
    linkedIn: "https://www.linkedin.com/in/brayan-holguin/",
  },
  {
    name: "Samir Aldana",
    linkedIn: "https://www.linkedin.com/in/samirnizama/",
  },
];

// Team member card component
const TeamMemberCard = ({ name, linkedIn }) => {
  return (
    <div className="border border-blue-400 text-blue-400 p-4 rounded-lg shadow-md text-center m-2">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <a
        href={linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-200"
      >
        LinkedIn
      </a>
    </div>
  );
};

const Poleritas = () => {
  return (
    <div className="bg-transparent text-blue-400 rounded-lg p-8 shadow-md">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Poleritas</h2>
      </div>
      <div className="flex justify-between items-start">
        <div className="flex-1 border border-blue-400 text-blue-400 rounded-lg p-8 shadow-md transform transition-transform hover:scale-105 max-w-lg w-full mr-4">
          <p className="text-lg mb-4">
            I developed "Poleritas", an e-commerce platform specializing in the
            sale of t-shirts, as a final project for the Soy Henry bootcamp.
            Optimized frontend performance using React and CSS to improve load
            speed and user experience. Implemented secure authentication using
            Auth0, ensuring a protected and efficient user experience. Used
            agile Scrum methodologies to organize and manage project
            development, improving communication and collaboration within the
            team. Implemented an advanced product filtering system, enhancing
            users' ability to find t-shirts according to their preferences.
          </p>
        </div>
        <div className="flex-1 border border-blue-400 text-blue-400 rounded-lg p-8 shadow-md transform transition-transform hover:scale-105 max-w-lg w-full">
          <h2 className="text-2xl font-semibold mb-4">Teams:</h2>
          <div className="flex justify-center flex-wrap">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                linkedIn={member.linkedIn}
              />
            ))}
          </div>
        </div>
      </div>
      <br />
      <div className="text-left mb-4">
        <div className="flex justify-center mt-2">
          <FaReact className="text-6xl mx-2 transition-transform hover:scale-110" />
          <FaNodeJs className="text-6xl mx-2 transition-transform hover:scale-110" />
          <FaJsSquare className="text-6xl mx-2 transition-transform hover:scale-110" />
          <FaDatabase className="text-6xl mx-2 transition-transform hover:scale-110" />
          <FaCss3Alt className="text-6xl mx-2 transition-transform hover:scale-110" />
          <SiExpress className="text-6xl mx-2 transition-transform hover:scale-110" />
          <SiPostgresql className="text-6xl mx-2 transition-transform hover:scale-110" />
        </div>
      </div>
      <div>
        <br />
        <ul className="text-left flex justify-center space-x-8">
          <li>
            <a
              href="https://github.com/JIAraoz/e-commerce-Poleritas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-200"
            >
              <FaGithub className="text-5xl transition-transform hover:scale-110" />
            </a>
          </li>
          <li>
            <a
              href="https://e-commerce-front-grupo03.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-200"
            >
              <img
                src="/Poleritas.png"
                alt="Deploy on Render"
                className="h-12 transition-transform hover:scale-110"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Poleritas;
