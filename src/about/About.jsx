// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <footer className="container">
      <span className="blur"></span>
      <span className="blur"></span>
      <div className="column">
        <div className="logo">
          <img src="./logoSamir" alt="Logo" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, obcaecati</p>
        <div className="socials">
          <a href="#"><i className="ri-linkedin-box-line"></i></a>
          <a href="#"><i className="ri-facebook-box-line"></i></a>
          <a href="#"><i className="ri-whatsapp-line"></i></a>
        </div>
      </div>
      <div className="column">
        <h4>Company</h4>
        <a href="#">Business</a>
        <a href="#">Partnership</a>
        <a href="#">Network</a>
      </div>
      <div className="column">
        <h4>About Us</h4>
        <a href="#">Blogs</a>
        <a href="#">LOL</a>
        <a href="#">LOL</a>
      </div>
      <div className="column">
        <h4>Contact</h4>
        <a href="#">Contact Us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
      </div>
    </footer>
  );
};

export default About;
