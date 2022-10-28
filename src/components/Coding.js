import React from "react";
import "../CSS/services.css";
import { motion } from "framer-motion";

function Coding() {
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
        src={require("../assets/healthcare.jpg")}
        alt=""
      />
      <h3 className="grid-header">Coding Services</h3>
      <p className="grid-para">
        Coding sometimes called computer programming ,is how we communicate with
        computers
      </p>
    </motion.div>
  );
}

export default Coding;
