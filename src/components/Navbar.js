import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/navbar.css";
import { motion } from 'framer-motion';


export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  
  return (
    <>
      <motion.nav
        initial = {{opacity: 0, scale: 0.9}}
        animate = {{opacity : 1, scale: 1}}
        transition = {{
          duration : 1.6
        }}
      >
        <Link to="/" className="logo">
          <img src={require("../assets/logo-black.png")} alt='' />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "menu-list" : "menu-list close"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link  to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact us</Link>
          </li>
        </ul>
        <Link className="signup-btn" to='/signup'>Sign up</Link>
      </motion.nav>
    </>
  );
}

