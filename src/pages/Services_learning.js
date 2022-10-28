import React from "react";
import "../CSS/services-page.css";
import Navbar from "../components/Navbar";
import { motion } from 'framer-motion';

function Services_learning() {
  return (
    <>
      <Navbar />
      <div className="learning-services">
        <motion.div className="e-learning" 
          initial = {{opacity: 0, y: 100, scale: 0.98}}
          animate = {{opacity: 1, y : 0, scale: 1}}
          transition = {{
            duration: 1.7
          }}
        >
          <h1 className="learning-header">E-learning</h1>
          <p>
            A learning system based on formalised teaching but with the help of
            electronic resources is known as E-learning. While teaching can be
            based in or out of the classrooms, the use of computers and the
            Internet forms the major component of E-learning.
          </p>
          <h3>Top 10 Benefits of e-Learning</h3>
          <div>
            <ul>
              <li>E-learning Fully Adjusts to your Needs</li>
              <li>Reduced Cost</li>
              <li>Remote Approach To various classes</li>
              <li>Transfer credits & computing</li>
              <li>Instant Career Advancement</li>
              <li>Quick Delievery</li>
              <li>Scalability</li>
              <li>Consistency & Teacher Scarcity</li>
            </ul>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMILHW0TBZGAIMTmF3XH8vYfV73XUhtPtpqA&usqp=CAU"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div className="linked-learning" 
          initial = {{opacity: 0, y: 100, scale: 0.98}}
          animate = {{opacity: 1, y : 0, scale: 1}}
          transition = {{
            duration: 1.7
          }}
        >
          <div>
            <img
              src="https://miro.medium.com/max/1200/1*tmD_elC_QhRU0Cag2cKoKA.jpeg"
              alt=""
            />
            <p>
              LinkedIn Learning is an online educational platform that helps you
              discover and develop business, technology-related, and creative
              skills through expert-led course videos. With more than 5,000
              courses and personalized recommendations, you can discover,
              complete, and track courses related to your field and interests.
              You can also choose to add these courses and related skills to
              your LinkedIn profile once you've completed them.185 courses and
              13 learning paths offer free LinkedIn certificates, as well as 320
              free courses, for a total of 800+ hours of free online learning.
            </p>
          </div>
          <h3>How to Join Linkedln Learning?</h3>
          <ol>
            <li>
              Click activation link in. the learner activation. email you
              receive....
            </li>
            <li>
              Enter your email to receive a verification code. Enter the pin you
              receive via email in order to verify your account. Create a new
              password.
            </li>
            <li>
              When you sign back into LinkedIn Learning, enter your LinkedIn
              account credentials. If you did not connect.
            </li>
          </ol>
          <a href="https://learning.linkedin.com/content/dam/me/learning/en-us/pdfs/Connecting-your-LI-profile.pdf">
            Connecting You LinkedLn Profile
          </a>
          <a href="https://www.linkedin.com/learning/?u=109705204">
            Connecting Learning with Lynda Login
          </a>
          <h4>Highlighted topics of Linked Learning</h4>
          <h2>Business learning Topics</h2>
          <ul>
            <li>Business Analysis and strategy</li>
            <li>Career Development</li>
            <li>Social Media Marketing</li>
            <li>Digital Marketing</li>
          </ul>
          <h2>Creative Learning</h2>
          <ul>
            <li>Graphic Design</li>
            <li>Animation</li>
          </ul>
          <h2>Technology Topics</h2>
          <ul>
            <li>Cyber Security</li>
            <li>Data Analysis</li>
            <li>Programming</li>
            <li>Foreign Language</li>
            <li>Web Development</li>
            <li>Cloud Computing</li>
          </ul>
        </motion.div>
        <motion.div className="nptel" 
          initial = {{opacity: 0, y: 100, scale: 0.98}}
          animate = {{opacity: 1, y : 0, scale: 1}}
          transition = {{
            duration: 1.7
          }}
        >
          <img
            src="https://www.kindpng.com/picc/m/152-1520962_nptel-logo-hd-png-download.png"
            alt=""
          />
          <p>
            National Programme on Technology Enhanced Learning (NPTEL) is a
            project of MHRD initiated by seven Indian Institutes of Technology
            (Bombay, Delhi, Kanpur, Kharagpur, Madras, Guwahati and Roorkee)
            along with the Indian Institute of Science, Bangalore in 2003, to
            provide quality education to anyone interested in learning . All
            courses are completely free to enrol and learn from. The
            certification exam is optional and comes at a fee of Rs 1000/course
            exam. The certificates issued bear the stamp of CCE, IIT and hence
            are valuable additions when the student is applying for jobs. On
            successful completion of advanced NPTEL course by the faculties,
            AICTE approves as FDP so that they can get the points for the same.
          </p>
          <a href="https://swayam.gov.in/nc_details/NPTEL">
            Follow for NPTEL Swayam Login
          </a>
          <h4>Highlighted Topics are : </h4>
          <table>
            <tr>
              <th>Course Name</th>
              <th>Coordiinated By</th>
              <th>Faculty</th>
              <th>Duration</th>
            </tr>
            <tr>
              <td>Advanced Computer Architecture</td>
              <td>IIT Guwahati</td>
              <td>Prof.John Jose</td>
              <td>8 week</td>
            </tr>
            <tr>
              <td>The Joy Of Computing using Python</td>
              <td>IIT Ropar</td>
              <td>Prof.S.R.S Iyengar</td>
              <td>12 weeks</td>
            </tr>
            <tr>
              <td>Introduction to Machine Learning</td>
              <td>IIT Kharagpur</td>
              <td>Prof.Sudeshna Sarkar</td>
              <td>8 weeks</td>
            </tr>
            <tr>
              <td>Big Data Computing</td>
              <td>IIT Patna</td>
              <td>Prof.Rajiv Misra</td>
              <td>8 weeks</td>
            </tr>

            <tr>
              <td>Optical fiber sensors</td>
              <td>IIT Madras</td>
              <td>Prof.Balaji Srinivasan</td>
              <td>2 weeks</td>
            </tr>
            <tr>
              <td>Power Electrics</td>
              <td>IIT Delhi</td>
              <td>Prof.G.Bhuvaneswari</td>
              <td>3 weeks</td>
            </tr>
            <tr>
              <td>Signal and System</td>
              <td>IISER Bhopal</td>
              <td>Prof.Kushal K.Shahvia</td>
              <td>12 weeks</td>
            </tr>
            <tr>
              <td>Basics of Material Engineering</td>
              <td>IIT Madras</td>
              <td>Prof.Ratna Kumar Annabattula</td>
              <td>4 weeks</td>
            </tr>
            <tr>
              <td>Automation in manufacturing</td>
              <td>IIT Guwahati</td>
              <td>DragEvent.Shrikrishnan N Joshi</td>
              <td>4 weeks</td>
            </tr>
            <tr>
              <td>Advanced Concepts in Fluid Mechanics</td>
              <td>IIT Kharagpur</td>
              <td>Prof.Aditya Bandopadhyay and Prof.S.chakraborty</td>
              <td>12 weeks</td>
            </tr>
          </table>
          <h4>Specifications of NPTEL</h4>
          <ul>
            <li>
              NPTEL now offers close to 600+ courses for certification every
              semester in about 22 disciplines.{" "}
            </li>
            <li>
              YouTube channel for NPTEL – most subscribed educational channel,
              1.3 billion views and 40+ lakhs subscribers.
            </li>
            <li>
              More than 56000 hours of video content, transcribed and subtitled.
            </li>
            <li>
              Most accessed library of peer-reviewed educational content in the
              world
            </li>
            <li>
              Translation of more than 12000 hrs of English transcripts in
              regional Indian languages.
            </li>
          </ul>
        </motion.div>
        <motion.div className="udemy" 
          initial = {{opacity: 0, y: 100, scale: 0.98}}
          animate = {{opacity: 1, y : 0, scale: 1}}
          transition = {{
            duration: 1.7
          }}
        >
          <div>
            <img
              src="https://blog.udemy.com/wp-content/uploads/2021/07/udemy-blog-social-share.png"
              alt=""
            />
          </div>
          <p>
            Udemy is a platform that allows instructors to build online courses
            on their preferred topics. Using Udemy's course development tools,
            instructors can upload videos, source code for developers,
            PowerPoint presentations, PDFs, audio, ZIP files and any other
            content that learners might find helpful. A standard Udemy course is
            video-based. Additional teaching tools (like assignments, quizzes,
            and coding exercises, etc) can be added to create a rich learning
            experience for students. For courses regarding certification
            preparation, we also offer instructors the ability to create a
            Practice Test course. As of July 2022, the platform has more than 54
            million students, 204,000 courses, and 71,000 instructors teaching
            courses in over 75 languages. There have been over 741 million
            course enrollments.
          </p>
          <p>How to Join Udemy Learning.</p>
          <h5>
            <strong>Log In with email and password</strong>
          </h5>
          <ol>
            <li>On you Browser, Click Log in at the top right</li>
            <li>Enter the credentials</li>
            <li>
              <a href="https://www.udemy.com/join/login-popup/">
                Click Login-Udemy
              </a>
            </li>
          </ol>
          <h4>Highlighted Courses are : </h4>
          <table>
            <tr>
              <td>1</td>
              <td>
                <a href="https://www.udemy.com/topic/python/">Python</a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <a href="https://www.udemy.com/topic/web-development/">
                  Web Development
                </a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <a href="https://www.udemy.com/topic/excel/">Excel</a>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <a href="https://www.udemy.com/topic/javascript/">JavaScript</a>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <a href="https://www.udemy.com/topic/react/">React Js</a>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                <a href="https://www.udemy.com/topic/microsoft-certification/">
                  Microsoft Certification
                </a>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                <a href="https://www.udemy.com/topic/data-science/">
                  Data Science
                </a>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                <a href="https://www.udemy.com/topic/machine-learning/">
                  Machine Learning
                </a>
              </td>
            </tr>
          </table>
        </motion.div>
        <motion.div className="coursera" 
          initial = {{opacity: 0, y: 100, scale: 0.98}}
          animate = {{opacity: 1, y : 0, scale: 1}}
          transition = {{
            duration: 1.7
          }}
        >
          <div>
            <img
              src="https://about.coursera.org/static/whiteCoursera-23ec484f7091914430ce19b07d09aedf.svg"
              alt=""
            />
            <p>
              Coursera was founded by Daphne Koller and Andrew Ng in 2012 with a
              vision of providing life-transforming learning experiences to
              learners around the world. Today, Coursera is a global online
              learning platform that offers anyone, anywhere, access to online
              courses and degrees from leading universities and companies.
              Coursera works with 100+ non profit and community partners to
              provide free education to underserved communities around the
              world, including refugees, veterans, people who are impacted by
              the criminal justice system, and underserved high schoolers.
              Coursera courses are free to audit. Coursera Certificate does have
              value and is definitely worth the investment.
            </p>
          </div>
          <h4>How to join Coursera</h4>
          <ol>
            <li>
              Visit <a href="https://www.coursera.org/">coursera.org</a> and
              click Log in the top-right.
            </li>
            <li>
              Click Log in with your Organisation at the bottom of the window
              that appears
            </li>
            <li>
              Type in your company's URL and click Continue. This is usually
              whatever is after the @ sign in your email address.
            </li>
            <li>Type in your company email and password, then click Log In.</li>
            <li>
              Add an alternative email to keep all your Course Certificates in
              one accou
            </li>
            <li>
              Type a password in the “Create a Coursera account password” field
              and click Sign Up.
            </li>
          </ol>

          <h3>
            <strong>
              1.Programming for Everybody: Getting Started with Python
            </strong>
          </h3>
          <p>
            <strong>Offered by: </strong>The University of Michigan
          </p>
          <p>
            <strong>Number of Students Enrolled:</strong>Over 2.2 million
          </p>
          <p>
            Learn the basics of programming computers with Python. This course —
            the first in a Python Specialization — covers everything from how to
            install Python, write your first program, and understand the nuances
            of the language.
          </p>
          <h3>
            <strong>2.Technical Support Fundamentals</strong>
          </h3>
          <p>
            <strong>offered By: </strong>Google
          </p>
          <p>
            <strong>Number of students enrolled: </strong>Over 835,000
          </p>
          <p>
            Prepare for a role as an entry-level IT support specialist with this
            course — the first in Google's IT Support Professional Certificate.
            Introduce yourself to the world of IT and get tips on how to best
            prepare for a career in the industry.
          </p>
          <h3>
            <strong>
              3.Work Smarter, Not Harder: Time Management for Personal &
              Professional Productivity
            </strong>
          </h3>
          <p>
            <strong>Offered by: </strong> THe University of Claifornia, Irvine
          </p>
          <p>
            <strong>Number of Students enrolled: </strong> Over 396,000
          </p>
          <p>
            Part of UCI's Career Success Specialization, this course covers
            organizational tips to help students learn how to successfully plan
            their goals (leaving room for potential surprises or crises) and
            manage their time to reduce stress and overwork.{" "}
          </p>
          <h3>
            <strong>4.Neural Networks and Deep Learning</strong>
          </h3>
          <p>
            <strong>Offered by: </strong>DeepLearning.ai
          </p>
          <p>
            <strong>Number of Students enrolled: </strong>Over 988,000
          </p>
          <p>
            This course will help you develop a strong background in deep
            learning, so you can break into the world of AI. Learn about major
            technology trends as well as how to build, implement, and fully
            understand neural networks
          </p>
          <h3>
            <strong>5.Foundations: Data, Data Everywhere</strong>
          </h3>
          <p>
            <strong>Offered by: </strong>DeepLearning
          </p>
          <p>
            <strong>Number of Students enrolled: </strong>Over 899,000
          </p>
          <p>
            This course will help you develop a strong background in deep
            learning, so you can break into the world of AI. Learn about major
            technology trends as well as how to build, implement, and fully
            understand neural networks.
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default Services_learning;
