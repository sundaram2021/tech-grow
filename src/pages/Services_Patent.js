import React from "react";
import "../CSS/services-page.css";
import Navbar from "../components/Navbar";
import { motion } from 'framer-motion';

function Services_Patent() {
  return (
    <>
      <Navbar />
      <div className="patent-services"
        
      >
        <motion.h1
          initial = {{opacity : 0, scale : 0}}
          animate = {{opacity : 1, scale : 1}}
          transition = {{
            duration : 1.7
          }}
        >Our upcoming services related to patent</motion.h1>
        <motion.ul
          initial = {{ opacity : 0}}
          animate  = {{ opacity: 1 }}
          transition = {{
            duration : 2
          }}
        >
          <li style = {{textAlign : "center", listStyle : "none"}}>Patent Drafting </li>
          <li style = {{textAlign : "center", listStyle : "none"}}>Copyright drafting</li>
        </motion.ul>
      </div>
    </>
  );
}

export default Services_Patent;
