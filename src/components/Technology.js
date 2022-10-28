import React from "react";
import "../CSS/services.css";
import { motion } from "framer-motion";

function Technology() {
  return (
    <motion.div
      className="grid-card"
      initial={{ rotate: 360, y: -200, x: -129 }}
      animate={{ rotate: 0, y: 0, x: 0 }}
      transition={{
        duration: 2.8,
      }}
    >
      <img className="grid-img" src={require("../assets/tech.jpg")} alt="" />
      <h3 className="grid-header">Web development Services</h3>
      <p className="grid-para">
        A web development is a work involved in developing a website for the
        internet or a intranet
      </p>
    </motion.div>
  );
}

export default Technology;
