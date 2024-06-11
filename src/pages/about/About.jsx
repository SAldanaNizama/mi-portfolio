import React from 'react';

const About = () => {
  return (
     <footer className="relative container max-w-screen-xl mx-auto py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="column">
        <div className="logo max-w-[100px] mb-8">
          <img src="./logoSamir.jpg" alt="Logo" />
        </div>
        <p className="mb-8 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, obcaecati</p>
        <div className="socials flex items-center gap-4">
          <a href="#" className="text-gray-300 border border-gray-300 p-2 text-xl rounded-full transition-all duration-300 hover:text-white hover:bg-blue-600 hover:border-blue-600"><i className="ri-linkedin-fill"></i></a>
          <a href="#" className="text-gray-300 border border-gray-300 p-2 text-xl rounded-full transition-all duration-300 hover:text-white hover:bg-blue-600 hover:border-blue-600"><i className="ri-instagram-line"></i></a>
          <a href="#" className="text-gray-300 border border-gray-300 p-2 text-xl rounded-full transition-all duration-300 hover:text-white hover:bg-blue-600 hover:border-blue-600"><i className="ri-facebook-circle-line"></i></a>
        </div>
      </div>
      <div className="column">
        <h4 className="mb-8 text-xl font-semibold text-white">Sitemap</h4>
        <ul className="text-gray-300">
          <li className="mb-4"><a href="#" className="transition-all duration-300 hover:text-white">Home</a></li>
          <li className="mb-4"><a href="#" className="transition-all duration-300 hover:text-white">Features</a></li>
          <li className="mb-4"><a href="#" className="transition-all duration-300 hover:text-white">Pricing</a></li>
          <li className="mb-4"><a href="#" className="transition-all duration-300 hover:text-white">About</a></li>
        </ul>
      </div>
      <div className="column">
        <h4 className="mb-8 text-xl font-semibold text-white">Resources</h4>
        <ul className="text-gray-300">
          <li className="mb-4"><a href="#" className="transition-all duration-300 hover:text-white">Support</a></li>
          <li className="mb-4"><a href="#" className="transition-all duration-300 hover:text-white">Contact</a></li>
          <li className="mb-4"><a href="#" className="transition-all duration-300 hover:text-white">Terms of Service</a></li>
          <li className="mb-4"><a href="#" className="transition-all duration-300 hover:text-white">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="column">
        <h4 className="mb-8 text-xl font-semibold text-white">Subscribe</h4>
        <p className="mb-8 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, obcaecati</p>
        <form className="text-gray-300">
          <input type="email" placeholder="Your Email Address" className="mb-4 p-2 w-full bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-white" />
          <button className="px-6 py-3 text-white bg-blue-600 rounded-lg transition-all duration-300 hover:bg-blue-700">Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default About;
