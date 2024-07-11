import React from "react";

const Poleritas = () => {
  return (
    <div className="bg-gray-800 text-white rounded-lg p-8 shadow-md text-center">
      <h2 className="text-3xl font-bold mb-4">Poleritas</h2>
      <p className="text-lg mb-4">Descripción breve del proyecto Poleritas.</p>
      <img
        src="https://via.placeholder.com/400x200"
        alt="Imagen del proyecto Beer"
        className="mx-auto mb-4 rounded-lg"
      />
      <ul className="text-left">
        <li className="mb-2">
          <span className="font-semibold">Tecnologías utilizadas:</span> React,
          Node.js, Express, MongoDB
        </li>
        <li className="mb-2">
          <a
            href="https://github.com/tuusuario/poleritas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-200"
          >
            Enlace al repositorio en GitHub
          </a>
        </li>
        <li>
          <a
            href="https://poleritas.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-200"
          >
            Enlace al deploy en Heroku
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Poleritas;
