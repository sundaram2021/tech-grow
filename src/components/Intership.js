import React from "react";
import "../CSS/services.css";
import { motion } from "framer-motion";

function Intership() {
  return (
    <motion.div
      className="grid-card"
      initial={{ rotate: 360, y: -200, x: -129 }}
      animate={{ rotate: 0, y: 0, x: 0 }}
      transition={{
        duration: 2.8,
      }}
    >
      <img
        className="grid-img"
        src={require("../assets/internship.png")}
        alt=""
      />
      <h3 className="grid-header">Internship Guidance</h3>
      <p className="grid-para">
        An Internship is a period of work experience offered by an organisation
        for a limited period of time
      </p>
    </motion.div>
  );
}

export default Intership;
