import React from "react";
import "../CSS/project.css";
import Navbar from "../components/Navbar";
import { motion } from 'framer-motion';

function ProjectCyber() {
  return (
    <>
      <Navbar />
      <motion.div className="project-cyber"
        initial = {{opacity: 0, scale: 0.99}}
        animate = {{opacity: 1, scale : 1}}
        transition = {{
          duration: 1.2
        }}
      >
        <h2>Keylogger Software</h2>
        <img src={require("../assets/keylogger.png")} alt="" />
        <p>
          Keylogger software is a good beginner-level cyber security project. A
          keylogger is a software used to record every keystroke made by the
          user on their keyboard devices.
        </p>
        <p>
          Note: Keystrokes are interactions that we make with the keyboard
          buttons. Pressing a single key in a physical or a virtual keyboard is
          an example of a keystroke.
        </p>
        <p>
          The motive of this software is to monitor the user’s activity to spot
          any unusual or threatening activities on the devices. This project is
          used in industries to keep an eye on their employees to ensure that
          they abide by the company’s policies. If you’re looking forward to
          working in the internal security sector of a company, this project
          gives you the exposure that you need.
        </p>
        <p>
          You can extend the project to virtual keyboards, clipping loggers,
          screen loggers, and activity trackers. Since keyloggers are used at
          the ground level of complex security monitoring software, it can be a
          good start for a beginner.{" "}
        </p>
        <div>
          <strong>Link : </strong>

          <a href="https://www.malwarebytes.com/keylogger">
            What is a KeyLogger? | How to Detect Keyloggers
          </a>
        </div>

        <h2>Security Scanner</h2>
        <img src={require("../assets/security-scannar.png")} alt="" />
        <p>
          At some point in time, we all have used security scanners for our
          devices. Be it in a panicky situation where your devices act up or
          just to ensure that your networks are secure. You can develop a basic
          security scanner for devices or your network to detect high severity
          vulnerabilities with utmost confidence. The software can also provide
          numerical values to the risks found and present a few tips to secure
          the device or network. The scanner first identifies information about
          devices, open ports, software assets, and systems. It correlates the
          findings with databases that provide information about known
          vulnerabilities. The database is supplied by a security solution
          vendor. You can also use demo databases that are available in
          Open-source for your project. After the vulnerabilities are confirmed
          factors such as system exposure, level of skills needed for the
          exploitation of the vulnerability, business impacts, age, existing
          controls, etc are assessed. The system then reports the findings to
          the user via the interface. Based on the severity, the user can choose
          to act upon the issue. If there is a serious level of risk, the
          software takes immediate action to protect the user’s data.
        </p>
        <div>
          <strong>Link : </strong>
          <a href="https://cloud.google.com/security-command-center/docs/how-to-use-web-security-scanner">
            How to use web security scanner
          </a>
        </div>
        <h2>Credit card</h2>
        <img src={require("../assets/credit-card.png")} alt="" />
        <p>
          You can design a credit card encryption system to prevent unauthorized
          access and duplication by arbitrary sources. PCI (Peripheral Component
          Interconnect) Data Security Standards and cloud DLP (Data Loss
          Prevention). The encryption tool is designed to validate and restrict
          access to card tokenization services. A few examples of encryption
          algorithms are DES, AES, RSA, SHA256, ECC, etc. You would require a
          project code and a cloud service to create this cyber security
          project.{" "}
        </p>
        <p>
          This is one such project which helps you combine your cloud computing
          skills also in your cyber security journey. Access control management
          and cryptography are the key skills for this project.
        </p>
        <div>
          <strong>Link : </strong>
          <a href="https://www.investopedia.com/terms/c/credit-card-encryption.asp">
            Credit card Encryption
          </a>
        </div>
        <h2>User Authentication System</h2>
        <img src={require("../assets/authentivation.jpg")} alt="" />
        <p>
          This advanced-level cyber security project may sound simple, but it
          combines all the expertise which you have gained in the previous
          projects. In this project, you can develop a user authentication
          portal providing signup/register and log in/log out functions.
          Identity management, authentication, and authorization are a few key
          skills for this cyber security project. Here a database system also
          comes into the picture as it is a full-stack project. You can include
          features like multi-factor authentication, biometric authentication,
          facial recognition, etc also in your system. The tools which are
          needed for this project are text editors, Node, Object-Oriented
          Programming paradigms, SQLite, Yarn, and a good knowledge of model
          view controllers and frameworks
        </p>
        <p>
          The user authentication system is a widely used software across every
          industry. This advanced-level cyber security project adds weightage to
          your cyber security profile and intrigues potential recruiters.
        </p>
        <div>
          <strong>Link: </strong>
          <a href="https://www.makeuseof.com/what-is-user-authentication/">
            What is user authenticaion and How does it work
          </a>
        </div>
      </motion.div>
    </>
  );
}

export default ProjectCyber;
