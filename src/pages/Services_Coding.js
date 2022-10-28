import React from "react";
import "../CSS/services-page.css";
import Navbar from "../components/Navbar";
import { motion } from 'framer-motion';

function Services_Coding() {
  return (
    <>
      <Navbar />
      <div className="coding-services"
      >
        <motion.div className="coding-grid"
          initial = {{x: -350, opacity: 0}}
          animate = {{x: 0, opacity: 1}}
          transition = {{
            duration: 1.6
          }}
        >
          <img
            src="https://i.pinimg.com/originals/d9/7a/d7/d97ad7d1f3f486dc9309a87b0209538a.jpg"
            alt=""
          />
          <p>
            Java is one of the most popular programming languages in use, so
            it’s no surprise it came in as the No. 1 skill tech companies were
            looking for. According to Oracle, 3 billion mobile phones run Java,
            along with 125 million TV devices and 89% of desktop computers in
            the U.S. Java is everywhere and the demand for strong developers is
            high. A Java developer makes a median salary of $85,000. There are
            many job postings for Java developers and Java engineers, but if you
            want to be a software developer or engineer of any kind, knowing
            this coding language is typically a core requirement.
          </p>
        </motion.div>
        <motion.div className="coding-grid"
          initial = {{x: 350, opacity: 0}}
          animate = {{x: 0, opacity: 1}}
          transition = {{
            duration: 1.7
          }}
        >
          <img
            src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png"
            alt=""
          />
          <p>
            Pronounced “sequel,” SQL stands for Structured Query Language, and
            it is a special-purpose programming language used for getting
            information from and updating databases. Since nearly all businesses
            rumotion.n a database system of some kind, SQL is a good skill to have on
            your resume. It’s also one of the easier tech skills to learn, with
            numerous tutorials and free resources online (we like this one that
            lets you learn the language while blowing up spaceships). If you
            become an expert, you could be a candidate for jobs like SQL
            Database Manager, SQL Developer and SQL Analyst—but a lot of general
            data analyst jobs will also require you to know SQL, as it’s widely
            used across database applications and web frameworks.
          </p>
        </motion.div>
        <motion.div className="coding-grid"
          initial = {{x: -350, opacity: 0}}
          animate = {{x: 0, opacity: 1}}
          transition = {{
            duration: 1.9
          }}
        >
          <img src="https://img.icons8.com/fluency/2x/javascript.png" alt="" />
          <p>
            Javascript is a scripting language, often used to make web pages
            interactive. It’s text-based, written in an HTML document and run
            through a web browser. There are plenty of jobs out there for
            JavaScript developers. Anyone looking for a job as a front end web
            developer (the person who does the coding for the part of the
            website you actually see, as opposed to the database or servers)
            will also need to know Javascript, in addition to HTML, CSS and
            other scripting languages.
          </p>
        </motion.div>
        <motion.div className="coding-grid"
          initial = {{x: 350, opacity: 0}}
          animate = {{x: 0, opacity: 1}}
          transition = {{
            duration: 2.1
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/74/74897.png"
            alt=""
          />
          <p>
            C++ is a general purpose programming language that can be used to
            create small programs or large applications. In 2013, C++ was
            CyberCoders’ most in-demand programming language skill, and though
            it’s dropped to No. 4 on the annual list, don’t count it out just
            yet. As an extension of C, one of the oldest coding languages, C++
            provides a foundation for many newer, more popular ones. There are
            plenty of C++ developer job postings, and it’s basically assumed
            that a candidate for nearly all software engineer or developer jobs
            will have some experience with the language. Side note: All major
            Adobe applications are developed in C++.
          </p>
        </motion.div>
        <motion.div className="coding-grid"
          intial = {{x: -350, opacity: 0}}
          animate = {{x: 0, opacity: 1}}
          transition = {{
            duration: 2.3
          }}
        >
          <img
            src="https://img.icons8.com/3d-fluency/2x/3d-fluency-python.png"
            alt=""
          />
          <p>
            Python is a general-purpose, high-level programming language with an
            emphasis on code readability. It’s one of the easier programming
            languages to learn, with its use of common words and expressions,
            more white space and fewer curly brackets. It is used by NASA and
            Reddit, and its web framework, Django, powers the Instagram and
            Pinterest web apps. There are many job postings looking for
            Python/Django developers. Companies seeking Full stack developers
            (developers comfortable working with both back-end and front-end
            technologies and numerous programming languages) often list Python
            as a required language for candidates to have in their arsenal.
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default Services_Coding;
