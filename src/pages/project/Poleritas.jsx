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
    name: "Juan Pérez",
    linkedIn: "https://www.linkedin.com/in/juan-perez/",
  },
  {
    name: "María López",
    linkedIn: "https://www.linkedin.com/in/maria-lopez/",
  },
  {
    name: "Carlos García",
    linkedIn: "https://www.linkedin.com/in/carlos-garcia/",
  },
];

// Componente para una tarjeta de miembro del equipo
const TeamMemberCard = ({ name, linkedIn }) => {
  return (
    <div className="bg-gray-700 text-white p-4 rounded-lg shadow-md text-center m-2">
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
    <div className="bg-gray-800 text-white rounded-lg p-8 shadow-md">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Poleritas</h2>
      </div>
      <div className="flex justify-between items-start">
        <div className="bg-blue-200 text-black rounded-lg p-8 shadow-md transform transition-transform hover:scale-105 max-w-lg w-full mr-4">
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
        <div className="flex flex-col items-center">
          <img
            src="/poleritas.png"
            alt="Imagen del proyecto Poleritas"
            className="rounded-lg max-w-sm w-1/2 mb-5"
          />
        </div>
      </div>
      <div className="text-left mb-4">
        <span className="font-semibold">Tecnologías utilizadas:</span>
        <div className="flex justify-center mt-2">
          <FaReact className="text-4xl text-blue-400 mx-2 transition-transform hover:scale-110" />
          <FaNodeJs className="text-4xl text-green-400 mx-2 transition-transform hover:scale-110" />
          <FaJsSquare className="text-4xl text-yellow-400 mx-2 transition-transform hover:scale-110" />
          <FaDatabase className="text-4xl text-blue-600 mx-2 transition-transform hover:scale-110" />
          <FaCss3Alt className="text-4xl text-blue-500 mx-2 transition-transform hover:scale-110" />
          <SiExpress className="text-4xl text-gray-500 mx-2 transition-transform hover:scale-110" />
          <SiPostgresql className="text-4xl text-blue-300 mx-2 transition-transform hover:scale-110" />
        </div>
      </div>
      <div>
        <h2 className="font-semibold">Links:</h2>
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
                src="/render.png"
                alt="Deploy en Render"
                className="h-12 transition-transform hover:scale-110"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Equipo:</h2>
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
  );
};

export default Poleritas;
