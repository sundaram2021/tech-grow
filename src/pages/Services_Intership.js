import React from "react";
import "../CSS/services-page.css";
import Navbar from "../components/Navbar";
import { motion } from 'framer-motion';

function Services_Intership() {
  return (
    <>
      <Navbar />
      <div className="internship-services">
        <motion.div className="internship-grid"
          initial = {{opacity: 0, x: -250}}
          animate = {{opacity: 1, x: 0}}
          transition = {{
            duration : 1.8
          }}
        >
          <div>
            <img
              src="https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
              alt=""
            />
          </div>
          <p>
            Linkedln is one of the most professional platforms for networking.
            It is great for businesses and also has a lot of opportunities for
            students and freshers. Make sure to keep your Linkedln profile
            extremely professional. You can add your achievements, education,
            experiences, etc. here. Not only can you apply for internships and
            jobs, but you can also directly message the employers to up your
            chances and make an impression. Linkedln will also help in finding
            new opportunities and learning different skills. With LinkedIn
            Learning, you can acquire new skills that you can easily add to your
            profile. You can also apply directly through LinkedIn with their
            easy apply option but some companies will direct you to their
            companies landing pages.
          </p>
        </motion.div>
        <motion.div className="internship-grid"
          initial = {{opacity: 0, x: -250}}
          animate = {{opacity: 1, x: 0}}
          transition = {{
            duration : 1.8
          }}
        >
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/8/8b/Internshala_company_logo.png?20180309195846"
              alt=""
            />
          </div>
          <p>
            Internshala is one of the leading platforms in India for
            internships. It is solely based on helping out students to get an
            internship experience with reputed companies. The navigation of the
            website and the app is pretty easy too. All you have to do is make a
            profile on Internshala and make a resume on the platform itself. You
            can use the filters when searching for an internship to suit your
            requirements according to your industry and preference. Select the
            internship you want and answer some questions from the company you
            applied to. It is a great platform for students as well as fresh
            graduates. They also have a new feature for fresher job listings,
            which is great for students to start their careers. They also offer
            a variety of courses and events to learn and enhance new skills.
            Internshala makes sure that the companies are trustworthy and the
            students are safe within their platform.
          </p>
        </motion.div>
        <motion.div className="internship-grid"
          initial = {{opacity: 0, x: -250}}
          animate = {{opacity: 1, x: 0}}
          transition = {{
            duration : 1.8
          }}
        >
          <div>
            <img
              src="https://letsintern.in/wp-content/uploads/2022/10/Letsintern-1-4-150x150.png"
              alt=""
            />
          </div>
          <p>
            Let's Intern is one of the popular internship websites that you
            should use to get the best internships. You can find valuable
            internship opportunities from reputed companies on this platform.
            Some of the companies hiring under this platform are Myntra, The
            Indian Express, Big Basket, Comic-Con India, PVR cinemas, etc. It is
            easy to register on this platform for both students and employers.
            The employers have to follow the same procedure but in the employer
            column. The platform also provides tips and blogs on the whole
            process of acquiring an internship and helps in educating the
            students better. It is a great industry-student interactive platform
            and it exposes students to some of the best opportunities out there.
          </p>
        </motion.div>
        <motion.div className="internship-grid"
          initial = {{opacity: 0, x: -250}}
          animate = {{opacity: 1, x: 0}}
          transition = {{
            duration : 1.8
          }}
        >
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Glassdoor_logo.svg/330px-Glassdoor_logo.svg.png"
              alt=""
            />
          </div>
          <p>
            GlassDoor is preferred by both students and graduates to get
            internships from reputed companies. It is one of the best internship
            sites in India. Along with offering internships they also offer job
            opportunities. This is a well-known platform for employers and
            students to hire and find the best interns and internships,
            respectively. Glassdoor also guides you through the entire process
            of interview questions, reviews of the companies, and much more.
            Because of the reputation Glassdoor has acquired over the years, it
            is one of the leading platforms for finding internships and job
            opportunities.
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default Services_Intership;
