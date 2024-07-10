import React from "react";

const About = () => {
  return (
    <footer className="relative container max-w-screen-xl mx-auto py-8 px-4 md:px-8 flex flex-wrap justify-between items-start">
      <div className="w-full md:w-1/4 mb-8 md:mb-0">
        <div className="logo max-w-[100px] mb-4">
          <img src="./logoSamir.jpg" alt="Logo" className="w-full" />
        </div>
        <p className="mb-4 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
          obcaecati.
        </p>
        <div className="socials flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/samir-aldana-nizama-579587260/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 border border-gray-300 p-2 text-xl rounded-full transition-all duration-300 hover:text-white hover:bg-blue-600 hover:border-blue-600"
          >
            <i className="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://wa.me/916436814"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 border border-gray-300 p-2 text-xl rounded-full transition-all duration-300 hover:text-white hover:bg-blue-600 hover:border-blue-600"
          >
            <i className="ri-whatsapp-line"></i>
          </a>
          <a
            href="mailto:samirnizama13@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 border border-gray-300 p-2 text-xl rounded-full transition-all duration-300 hover:text-white hover:bg-blue-600 hover:border-blue-600"
          >
            <i className="ri-mail-line"></i>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/4 mb-8 md:mb-0">
        <ul className="text-gray-300">
          <li className="mb-2">
            <a
              href="#"
              className="transition-all duration-300 hover:text-white"
            >
              Support
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="transition-all duration-300 hover:text-white"
            >
              Contact
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="transition-all duration-300 hover:text-white"
            >
              Terms of Service
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="transition-all duration-300 hover:text-white"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 mb-8 md:mb-0">
        <ul className="text-gray-300">
          <li className="mb-2">
            <a
              href="#"
              className="transition-all duration-300 hover:text-white"
            >
              About Us
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="transition-all duration-300 hover:text-white"
            >
              Services
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="transition-all duration-300 hover:text-white"
            >
              Blog
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="transition-all duration-300 hover:text-white"
            >
              Careers
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/4">
        <ul className="text-gray-300">
          <li className="mb-2">
            <a
              href="#"
              className="transition-all duration-300 hover:text-white"
            >
              FAQ
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="transition-all duration-300 hover:text-white"
            >
              Help Center
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="transition-all duration-300 hover:text-white"
            >
              Sitemap
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="transition-all duration-300 hover:text-white"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default About;
