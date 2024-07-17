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

// Lista de miembros del equipo
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

// Componente para una tarjeta de miembro del equipo
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
            Desarrollé en equipo "Poleritas", una plataforma de comercio
            electrónico especializada en la venta de camisetas, como proyecto
            final del bootcamp Soy Henry. Optimicé el rendimiento del frontend
            utilizando React y CSS para mejorar la velocidad de carga y la
            experiencia del usuario. Implementé autenticación segura mediante
            Auth0, asegurando una experiencia de usuario protegida y eficiente.
            Utilicé metodologías ágiles Scrum para organizar y gestionar el
            desarrollo del proyecto, mejorando la comunicación y la colaboración
            dentro del equipo. Implementé un sistema de filtrado avanzado para
            productos, mejorando la capacidad de los usuarios para encontrar
            camisetas según sus preferencias.
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
                src="/poleritas.png"
                alt="Deploy en Render"
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
