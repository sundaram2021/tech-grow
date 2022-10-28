import React from "react";
import "../CSS/services.css";
import { motion } from "framer-motion";

function Competitive() {
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
        src={require("../assets/comptition.jpg")}
        alt=""
      />
      <h3 className="grid-header">Competetive Guidance</h3>
      <p className="grid-para">
        Competitive guidance is a metal sport which enables you to code a given
        problem under provided constraint
      </p>
    </motion.div>
  );
}

export default Competitive;
