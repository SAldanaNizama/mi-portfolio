import React from "react";

const Beer = () => {
  return (
    <div className="bg-gray-800 text-white rounded-lg p-8 shadow-md text-center">
      <h2 className="text-3xl font-bold mb-4">Beer</h2>
      <p className="text-lg mb-4">Descripción breve del proyecto Beer.</p>
      <img
        src="https://via.placeholder.com/400x200"
        alt="Imagen del proyecto Beer"
        className="mx-auto mb-4 rounded-lg"
      />
      <ul className="text-left">
        <li className="mb-2">
          <span className="font-semibold">Tecnologías utilizadas:</span> HTML,
          CSS, JavaScript, Express, PostgreSQL
        </li>
        <li className="mb-2">
          <a
            href="https://github.com/tuusuario/beer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-200"
          >
            Enlace al repositorio en GitHub
          </a>
        </li>
        <li>
          <a
            href="https://beerapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-200"
          >
            Enlace al deploy en AWS
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Beer;
