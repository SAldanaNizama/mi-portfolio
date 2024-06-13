import React from 'react';

const About = () => {
  return (
    <footer className="relative container max-w-screen-xl mx-auto py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="column">
        <div className="logo max-w-[100px] mb-4">
          <img src="./logoSamir.jpg" alt="Logo" />
        </div>
        <p className="mb-4 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, obcaecati</p>
        <div className="socials flex items-center gap-4">
          <a href="https://www.linkedin.com/in/samir-aldana-nizama-579587260/" target='_blank '  className="text-gray-300 border border-gray-300 p-2 text-xl rounded-full transition-all duration-300 hover:text-white hover:bg-blue-600 hover:border-blue-600"><i className="ri-linkedin-fill"></i></a>
          <a href="https://wa.me/916436814" target='_blank ' className="text-gray-300 border border-gray-300 p-2 text-xl rounded-full transition-all duration-300 hover:text-white hover:bg-blue-600 hover:border-blue-600"><i class="ri-whatsapp-line"></i></a>
          <a href="mailto:samirnizama13@gmail.com"  target='_blank ' className="text-gray-300 border border-gray-300 p-2 text-xl rounded-full transition-all duration-300 hover:text-white hover:bg-blue-600 hover:border-blue-600"><i class="ri-mail-line"></i></a>
        </div>
      </div>
      <div className="column col-span-3 md:col-span-2">
        <h4 className="mb-4 text-xl font-semibold text-white">Sitemap</h4>
        <ul className="text-gray-300">
          <li className="mb-2"><a href="#" className="transition-all duration-300 hover:text-white">Home</a></li>
          <li className="mb-2"><a href="#" className="transition-all duration-300 hover:text-white">Features</a></li>
          <li className="mb-2"><a href="#" className="transition-all duration-300 hover:text-white">Pricing</a></li>
          <li className="mb-2"><a href="#" className="transition-all duration-300 hover:text-white">About</a></li>
        </ul>
      </div>
      <div className="column col-span-3 md:col-span-1">
        <h4 className="mb-4 text-xl font-semibold text-white">Resources</h4>
        <ul className="text-gray-300">
          <li className="mb-2"><a href="#" className="transition-all duration-300 hover:text-white">Support</a></li>
          <li className="mb-2"><a href="#" className="transition-all duration-300 hover:text-white">Contact</a></li>
          <li className="mb-2"><a href="#" className="transition-all duration-300 hover:text-white">Terms of Service</a></li>
          <li className="mb-2"><a href="#" className="transition-all duration-300 hover:text-white">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default About;