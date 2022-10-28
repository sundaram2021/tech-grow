import React, { useState } from "react";
import "../CSS/contact.css";
import { database } from "../authentication/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore/lite";
import { motion } from "framer-motion";

function Contact() {
  const [isChecked, setIsChecked] = useState();

  const [data, setData] = useState("");
  const [service, setService] = useState({
    res: [],
  });
  const collectionRef = collection(database, "query");

  const handleChange = (e) => {
    const { value } = e.target;
    setIsChecked(!isChecked);
    // const getService = service.filter((s) => s !== isChecked);
    setService({
      res: [service, value],
    });
    // console.log(value);
  };

  const handleSubmit = () => {
    console.log(data, service);
    addDoc(collectionRef, {
      services: service.res,
      query: data,
    })
      .then(() => {
        alert("Query added");
      })
      .catch((err) => {
        alert(err.message);
      });

    setData("");
    setService("");
  };

  return (
    <div className="contact-page">
      <h1 className="contact-header">Contact us</h1>
      <motion.div
        className="contact-grid"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
        }}
      >
        <section>
          <p>Research Services</p>
          <input
            readOnly
            type="checkbox"
            name=""
            id=""
            value="Research services"
            onChange={handleChange}
          />
        </section>
        <section>
          <p>Project Consultancy</p>
          <input
            type="checkbox"
            name=""
            id=""
            value="Project Consultancy"
            onChange={handleChange}
          />
        </section>
        <section>
          <p>Internship Guidance</p>
          <input
            type="checkbox"
            name=""
            id=""
            value="Internship Guidance"
            onChange={handleChange}
          />
        </section>
        <section>
          <p>Copyright/Patent services</p>
          <input
            type="checkbox"
            name=""
            id=""
            value="Copyright/Patent services"
            onChange={handleChange}
          />
        </section>
        <section>
          <p>Web development services</p>
          <input
            type="checkbox"
            name=""
            id=""
            value="Web development services"
            onChange={handleChange}
          />
        </section>
        <section>
          <p>E-learning</p>
          <input
            type="checkbox"
            name=""
            id=""
            value="e-learning"
            onChange={handleChange}
          />
        </section>
        <section>
          <p>Coding Services</p>
          <input
            type="checkbox"
            name=""
            id=""
            value="coding services"
            onChange={handleChange}
          />
        </section>
        <section>
          <p>Competitive Guidance</p>
          <input
            type="checkbox"
            name=""
            id=""
            value="competitive guidance"
            onChange={handleChange}
          />
        </section>
        <textarea
          className="textarea"
          name="query"
          id=""
          cols="60"
          rows="10"
          placeholder="Enter the detailed query about the topic..."
          onChange={(e) => setData(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </motion.div>
    </div>
  );
}

export default Contact;
