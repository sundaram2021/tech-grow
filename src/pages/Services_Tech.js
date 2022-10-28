import React from "react";
import "../CSS/services-page.css";
import Navbar from "../components/Navbar";
import { motion } from 'framer-motion';

function Services_Tech() {
  return (
    <>
      <Navbar />
      <div className="technology-services">
        <motion.div className="front-end"
          initial = {{opacity : 0, scale: 0, x: -200}}
          animate = {{opacity: 1, scale: 1, x: 0}}
          transition = {{
            duration: 1.8
          }}
        >
          <h2>Front End Webdevlopment</h2>
          <div>
            <img
              src="https://www.syncfusion.com/blogs/wp-content/uploads/2020/07/Top-6-Front-End-Web-Development-Tools-to-Increase-Your-Productivity-in-2020-1.jpg"
              alt=""
            />
            <p>
              Front end web development deals with all the website elements that
              users can see and interact with, such as the text on the page,
              drop-down menus, images, and forms. The job of a Front End Web
              Developer is to program the outward appearance of the website
              according to project specifications while making it responsive,
              easy to use, and error-free.
            </p>
          </div>
        </motion.div>
        <br />
        {/* <div> */}
        <motion.div className="html"
          initial = {{opacity : 0, scale: 0, x: 200}}
          animate = {{opacity: 1, scale: 1, x: 0}}
          transition = {{
            duration: 1.8
          }}
        >
          <h2>HTML</h2>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWODG3lJi7gEDbl2sPqr87wvt-hJRr__Hq1A&usqp=CAU"
              alt=""
            />
            <p>
              Hypertext Markup Language (HTML) is the standard markup language
              used to create documents that will be displayed on a web browser.
              HTML instructs the browser on how to display data on the page.
              These instructions often cover the layout of the page, fonts,
              colors, headings, title, tables, and graphics. HTML5 Boilerplate
              is the most popular HTML framework in use today.
            </p>
          </div>
          <h5>Why HTML is necessary?</h5>
          <p>
            The importance of HTML can not be overstated—it’s impossible to work
            in front end web development without using this essential language.
            HTML is the standard language used in the creation of websites and
            is supported by all modern Internet browsers including Chrome,
            Firefox, Edge, Safari, Samsung Internet, and Opera. HTML is so
            prevalent that it’s been used on at least 93% of all websites in the
            world. As the fundamental building block for all web pages, HTML
            should be the first language any potential Web Developer learns.
          </p>
        </motion.div>
        <br />
        <motion.div className="css"
          initial = {{opacity : 0, scale: 0, x: -200}}
          animate = {{opacity: 1, scale: 1, x: 0}}
          transition = {{
            duration: 1.8
          }}
        >
          <h2>CSS</h2>
          <div>
            <img src="https://img.icons8.com/color/344/css3.png" alt="" />
            <p>
              Cascading Style Sheets (CSS) is a language that’s used to style
              the text, color, buttons, and tables of a website plus structure
              how its pages are laid out. CSS allows for content and formatting
              to remain separate so webpages can adapt to different types of
              devices of various sizes. Some of the most frequently used CSS
              frameworks are Twitter Bootstrap, Tailwind CSS, Bulma, Foundation,
              Skeleton, UI Kit, Pure, Semantic UI, and Materialize.
            </p>
          </div>
          <h5>Why css is necessary?</h5>
          <p>
            CSS is necessary because, without it, webpages look awful. CSS
            easily adds style to boring webpages with just a few lines of code.
            And instead of coding each page of a website one by one, those few
            lines of code make it possible for styles to be applied consistently
            across an entire website, saving Web Developers an extraordinary
            amount of time. If a website were to use HTML alone without
            incorporating CSS, it would just be text on a plain white
            background, which isn’t very interesting to look at. HTML and CSS
            must be paired together to create visually appealing websites. HTML
            is used to specify what content should be on the page while CSS
            provides all the style, including font type, color, layout, and
            more. When building websites, it’s practically impossible to create
            an inviting, interesting website without CSS.
          </p>
        </motion.div>
        <br />
        <motion.div className="backend"
          initial = {{opacity : 0, scale: 0, x: 200}}
          animate = {{opacity: 1, scale: 1, x: 0}}
          transition = {{
            duration: 1.8
          }}
        >
          <h2>Backend Webdevlopment</h2>
          <div>
            <img
              src="https://cdn.vectorstock.com/i/preview-1x/14/53/kanban-concept-for-web-banner-website-page-vector-24451453.webp"
              alt=""
            />
            <p>
              Back end web development relates to elements on the server side of
              a website where data is stored and arranged. The role of a Back
              End Web Developer is to create, test, debug, and maintain all the
              technological components that support the front end of a website
              and allow it to operate.
            </p>
          </div>
        </motion.div>
        <br />
        <motion.div className="js"
          initial = {{opacity : 0, scale: 0, x: -200}}
          animate = {{opacity: 1, scale: 1, x: 0}}
          transition = {{
            duration: 1.8
          }}
        >
          <h2>JavaScript</h2>
          <div>
            <img
              src="https://img.icons8.com/fluency/2x/javascript.png"
              alt=""
            />
            <p>
              One of the three core programming languages for front end web
              development, JavaScript is also used on the back end. More
              specifically, Back End Developers use a JavaScript Runtime
              Environment (RTE) called Node.js to handle updates from the client
              side of the website and build expandable network applications
              capable of processing multiple user requests simultaneously.
              Node.js has become a popular tool for the back end because it’s
              fast, efficient, lightweight, and capable of managing heavy
              workloads. Some of the most popular JavaScript frameworks used on
              the server side include Express.js, Next.js, Mocha.js, Meteor.js,
              and Nest.js.
            </p>
          </div>
          <h5>Why JavaScript is necessary ? </h5>
          <p>
            As a Web Developer working on either the front or back end, there’s
            no way to get around JavaScript. More than 68% of professional Web
            Developers surveyed by Stack Overflow in 2021 report extensive use
            of JavaScript in the year prior. JavaScript has been the most widely
            used programming language in the world for many years and doesn’t
            show any signs of giving up its top position, which makes it a
            necessary skill to learn.
          </p>
        </motion.div>
        <br />
        <motion.div className="python"
          initial = {{opacity : 0, scale: 0, x: 200}}
          animate = {{opacity: 1, scale: 1, x: 0}}
          transition = {{
            duration: 1.8
          }}
        >
          <h2>Python</h2>
          <div>
            <img
              src="https://img.icons8.com/3d-fluency/2x/3d-fluency-python.png"
              alt=""
            />
            <p>
              Python is an extremely versatile object-oriented high-level
              programming language. Its simple syntax, libraries, frameworks,
              and adaptability makes Python a popular choice for back end
              programming where it’s used to build desktop, mobile, and gaming
              applications. Python is also frequently used in emerging fields
              like machine learning, AI, data analytics, and task automation.
              Python frameworks commonly used in back end web development
              include Django, Flask, Pyramid, CherryPy, Bottle, and Falcon, just
              to name a few.
            </p>
          </div>
          <h5>Why Python is necessary ?</h5>
          <p>
            Python is a necessary skill for Web Developers to have because it’s
            a popular general-purpose language that offers multiple
            functionalities; Python is not only an integral part of web
            development, it’s also widely used in data science, machine
            learning, artificial intelligence, commercial and enterprise
            applications, games, computer-aided design (CAD) applications, audio
            and video applications, and more. Thanks to its versatility, Python
            is used by a wide range of well-known companies like Google,
            Netflix, Youtube, Instagram, Yahoo, Reddit, and Spotify. The
            prevalence, popularity, and versatility make Python an essential
            language for Back End Web Developers to learn.
          </p>
        </motion.div>
        <br />
        <motion.div className="react"
          initial = {{opacity : 0, scale: 0, x: -200}}
          animate = {{opacity: 1, scale: 1, x: 0}}
          transition = {{
            duration: 1.8
          }}
        >
          <h2>React</h2>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLuowUjaOWu7gD__sbISQai7nzr6j8gL4x2Q&usqp=CAU"
              alt=""
            />
            <p>
              The React.js framework is an open-source JavaScript framework and
              library developed by Facebook. It’s used for building interactive
              user interfaces and web applications quickly and efficiently with
              significantly less code than you would with vanilla JavaScript. In
              React, you develop your applications by creating reusable
              components that you can think of as independent Lego blocks. These
              components are individual pieces of a final interface, which, when
              assembled, form the application’s entire user interface.
            </p>
          </div>
        </motion.div>
        <br />
        <motion.div className="next"
          initial = {{opacity : 0, scale: 0, x: 200}}
          animate = {{opacity: 1, scale: 1, x: 0}}
          transition = {{
            duration: 1.8
          }}
        >
          <h2>Next Js</h2>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8YPk4A5MH4t8fiaxLN6wmHL8JC8Cl9bKwlA&usqp=CAU"
              alt=""
            />
            <p>
              Next.js is an open-source web development framework created by
              Vercel enabling React-based web applications with server-side
              rendering and generating static websites. React documentation
              mentions Next.js among "Recommended Toolchains" advising it to
              developers as a solution when "Building a server-rendered website
              with Node.js". Where traditional React apps can only render their
              content in the client-side browser, Next.js extends this
              functionality to include applications rendered on the server-side.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Services_Tech;
