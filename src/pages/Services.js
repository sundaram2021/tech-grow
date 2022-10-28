import "../CSS/services.css";
import Research from "../components/Research";
import Project from "../components/Project";
import Patent from "../components/Patent";
import Technology from "../components/Technology";
import Learning from "../components/Learning";
import Intership from "../components/Intership";
import Coding from "../components/Coding";
import Competitive from "../components/Competitive";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from  'framer-motion';

function Services() {
  return (
    <>
      <Navbar />
      <h1 class="h1">Our Services</h1>
      <motion.div 
        className="services-grid"
        initial= {{opacity: 0, y: 200, x: -120, scale: 0.7}}
        animate= {{opacity: 1, y: 0, x: 0, scale: 1}}
        transition = {{
          duration: 2.2
        }}
      >
        <Link to="/services/research">
          <Research />
        </Link>
        <Link to="/services/project">
          <Project />
        </Link>
        <Link to="/services/patent">
          <Patent />
        </Link>
        <Link to="/services/tech">
          <Technology />
        </Link>
        <Link to="/services/learning">
          <Learning />
        </Link>
        <Link to="/services/internship">
          <Intership />
        </Link>
        <Link to="/services/coding">
          <Coding />
        </Link>
        <Link to="/services/comptitions">
          <Competitive />
        </Link>
      </motion.div>
    </>
  );
}

export default Services;
