import React from "react";
import "../CSS/services.css";
import { motion } from "framer-motion";

function learning() {
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
        src={require("../assets/learning.jpg")}
        alt=""
      />
      <h3 className="grid-header">E-learning Services</h3>
      <p className="grid-para">
        A learning system based on formalised teaching but with the help of
        electronic resources is known as E-learning.
      </p>
    </motion.div>
  );
}

export default learning;
