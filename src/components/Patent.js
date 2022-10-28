import React from "react";
import "../CSS/services.css";
import { motion } from 'framer-motion';

function Patent() {
  return (
    <motion.div
      className="grid-card"
      initial={{ rotate: 360, y: -200, x: -129 }}
      animate={{ rotate: 0, y: 0, x: 0 }}
      transition={{
        duration: 2.8,
      }}
    >
      <img className="grid-img" src={require("../assets/patent.png")} alt="" />
      <h3 className="grid-header">Copyright/Patent services</h3>
      <p className="grid-para">
        Patent is a exclusive right granted for an invention,which is a product
        or a process that provides a new way of doing something
      </p>
    </motion.div>
  );
}

export default Patent;
