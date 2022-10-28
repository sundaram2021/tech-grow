import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Hero.css";
import { motion } from 'framer-motion';

function Hero() {
  return (
    <>
      <motion.div className='hero-header'
        initial = {{opacity : 0, x: 350, scale: 0.9, rotate: 360}}
        animate = {{opacity : 1, x: 0, scale: 1, rotate: 0}}
        transition = {{
          duration : 2
        }}
      >
        <p className="slogan">Let's Improve your skills with us</p>
        <p className="slogan-subheader">Find your favourite Domain and study anywhere, anytime with the best mentor</p>
        <Link to='/login' className="get-started-btn">Get Started</Link>
      </motion.div>
      <motion.div 
        className="btn-div"
        initial = {{opacity : 0, scaleX: 0.8, x: 200}}
        animate = {{opacity : 1, scaleX: 1, x: 0}}
        transition = {{
          duration : 2
        }}
      >
          <button>Research Service</button>
          <button>Project Consultation</button>
          
          <button>Web Developement service</button>
          
          <button>Coding service</button>
          
          <button>Internship Guidance</button>
          
          <button>Copy right/Patent service</button>
          <button>Competetive Guidance</button>
          <button className="project">E-learning services</button>
          
      </motion.div>
      <p className="hero-summary">We are here as a solution to help people in making Projects , getting Internships, in publishing their Research Paper
or Patents and Provide guidance to the students in their Career.</p>
    </>
  );
}

export default Hero;
