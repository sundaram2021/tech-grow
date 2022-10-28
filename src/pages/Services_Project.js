import React from "react";
import { Link } from "react-router-dom";
import "../CSS/services-page.css";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function Services_Project() {
  return (
    <>
      <Navbar />
      <h1 className="project-header">Projects</h1>
      <motion.div
        className="project-services"
        initial={{ rotateX: 360 }}
        animate={{ rotateX: 0}}
        transition={{
          duration: 2.8,
        }}
      >
        <Link className="project-grid" to="/services/project/cloud-computing">
          <img
            className="grid-img"
            src={require("../assets/cloud-computing.jpg")}
            alt=""
          />
          <h3 className="project-grid-header">Cloud Computing projects</h3>
          <p className="project-grid-para">
            The practice of using a network remote servers hosted on internet to
            store, manage and process data
          </p>
        </Link>
        <Link className="project-grid" to="/services/project/cyber-security">
          <img
            className="grid-img"
            src={require("../assets/security.jpg")}
            alt=""
          />
          <h3 className="grid-header">cyber security projects</h3>
          <p className="grid-para">
            Cyber security is a protection of inernet connected system such as
            hardware,software and data from cyber threat
          </p>
        </Link>
        <Link className="project-grid" to="/services/project/iot">
          <img className="grid-img" src={require("../assets/iot.jpg")} alt="" />
          <h3 className="grid-header">IOT projects</h3>
          <p className="grid-para">
            Iot describes thhe network of physical object-things-thet are
            embedded with sensors,software and other technologies for the
            purpose of connecting and exchanging data
          </p>
        </Link>
      </motion.div>
    </>
  );
}

export default Services_Project;
