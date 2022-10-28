import React from "react";
import "../CSS/services-page.css";
import Navbar from "../components/Navbar";
import { motion } from 'framer-motion';

function Services_research() {
  return (
    <>
      <Navbar />
      <div className="research-services">
        <motion.h1
          initial = {{opacity: 0, scale: 0}}
          animate = {{opacity: 1, scale: 1}}
          transition = {{
            duration : 1.5
          }}
        >Our Upcoming Research paper services</motion.h1>
        <ul>
          <motion.li
            initial = {{opacity : 0, scale: 0, x: 200}}
            animate = {{opacity: 1, scale: 1, x: 0}}
            transition = {{
              duration: 1.8
            }}
          >Paper Editing </motion.li>
          <motion.li
            initial = {{opacity : 0, scale: 0, x: -200}}
            animate = {{opacity: 1, scale: 1, x: 0}}
            transition = {{
              duration: 1.8
            }}
          >Quality Check </motion.li>
          <motion.li
            initial = {{opacity : 0, scale: 0, x: 200}}
            animate = {{opacity: 1, scale: 1, x: 0}}
            transition = {{
              duration: 2.1
            }}
          >Grammar Check</motion.li>
        </ul>
      </div>
    </>
  );
}

export default Services_research;
