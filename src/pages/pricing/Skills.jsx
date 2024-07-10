import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaGithub,
  FaDatabase,
  FaCss3Alt,
  FaStripe,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiRedux,
  SiExpress,
  SiAuth0,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-6xl text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-6xl text-green-400" /> },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-6xl text-yellow-400" />,
    },
    { name: "GitHub", icon: <FaGithub className="text-6xl text-gray-400" /> },
    { name: "SQL", icon: <FaDatabase className="text-6xl text-blue-600" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-6xl text-teal-400" />,
    },
    { name: "CSS", icon: <FaCss3Alt className="text-6xl text-blue-500" /> },
    { name: "Express", icon: <SiExpress className="text-6xl text-gray-500" /> },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-6xl text-blue-300" />,
    },
    { name: "Auth0", icon: <SiAuth0 className="text-6xl text-orange-500" /> },
    { name: "Stripe", icon: <FaStripe className="text-6xl text-blue-600" /> },
    { name: "Redux", icon: <SiRedux className="text-6xl text-purple-500" /> },
  ];

  return (
    <section className="container max-w-screen-xl mx-auto py-16">
      <h2 className="mb-4 text-3xl font-semibold text-center text-white">
        My Skills
      </h2>
      <p className="max-w-xl mx-auto text-center text-gray-300">
        These are some of the technologies and tools I use in my web development
        projects.
      </p>
      <div className="skills grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="card p-8 bg-gray-800 flex flex-col items-center border-2 border-transparent rounded-lg transition-all duration-300 hover:bg-gray-700 hover:border-white hover:shadow-lg hover:shadow-blue-500/50 group"
          >
            <div className="icon mb-4 transition-transform duration-300 group-hover:transform group-hover:scale-125 group-hover:-translate-y-2">
              {skill.icon}
            </div>
            <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
