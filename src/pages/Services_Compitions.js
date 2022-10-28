import React from "react";
import "../CSS/services-page.css";
import Navbar from "../components/Navbar";
import { motion } from 'framer-motion';

function Services_Compitions() {
  return (
    <>
      <Navbar />
      <div className="competition-services">
        <motion.div className="competition-grid"
          initial = {{opacity: 0, x: 250}}
          animate = {{opacity: 1, x: 0}}
          transition = {{
            duration : 1.8
          }}
        >
          <h1>Hash code</h1>
          <h3>What is Hashcode ?</h3>
          <p>
            Google’s team-based programming competition, Hash Code, allows you
            to share your skills and connect with other coders as you work
            together to solve a problem modeled off a real Google engineering
            challenge! In small teams of two to four, coders all over the world
            will tackle the first problem through Qualification Round. Though
            this round is hosted online, teams can come together virtually to
            compete side-by-side in locally coordinated Hash Code Hubs. The top
            teams from this round are invited to join us for the virtual World
            Finals.
          </p>
          <h3>How does it work?</h3>
          <p>
            This is our online platform where you’ll form your team, join a Hub,
            practice, and compete during the rounds. During the Qualification
            Round, you’ll watch our YouTube livestream to be introduced to the
            problem, and your team will have four hours to solve an optimization
            problem using the programming language and tools of your choice.
            Teams can also compete alongside other teams in your area by joining
            a virtual Hub. The top teams from the Qualification Round will be
            invited to the virtual World Finals, where they’ll work together to
            solve another challenge and compete for cash prizes.
          </p>
        </motion.div>
        <motion.div className="competition-grid"
          initial = {{opacity: 0, x: 250}}
          animate = {{opacity: 1, x: 0}}
          transition = {{
            duration : 1.8
          }}
        >
          <h1>Kick Start</h1>
          <h3>What is Kick Start ?</h3>
          <p>
            Kick Start offers coders around the world the chance to develop and
            hone their programming skills through online-hosted competition
            rounds. The three-hour rounds feature a variety of algorithmic
            challenges, all developed by Google engineers so that you get a
            taste of the technical skills needed for a career at Google (the top
            competitors from our Kick Start rounds may be invited to interview
            at Google!). Our rounds are held regularly throughout the year at
            different times so they are easily accessible to coders everywhere.
            Each Kick Start Round is open to all participants, no
            pre-qualification needed, so you can try your hand at one or give
            them all a shot. In addition to our online rounds, we are hosting
            several Coding Practice with Kick Start sessions throughout the
            competition season. If you are looking for some extra practice, try
            these low-pressure multi-day practice sessions to learn more about
            our problems and platform with dedicated Google engineering support
            to get you ready for the next upcoming Kick Start round.
          </p>
          <h3>How does it work?</h3>
          <p>
            Register for Kick Start once on our website and you’ll be set up to
            compete in any round you’d like! When each round is open, the
            three-hour countdown begins and you’ll compete on our website
            solving algorithmic and mathematical problems. Following the round,
            you can check out your rankings and the round analysis. If you were
            a top competitor, you may be contacted by Google for a chance to
            interview
          </p>
        </motion.div>
        <motion.div className="competition-grid"
          initial = {{opacity: 0, x: 250}}
          animate = {{opacity: 1, x: 0}}
          transition = {{
            duration : 1.8
          }}
        >
          <h1>Code Jam</h1>
          <h3>What is CodeJam ?</h3>
          <p>
            Google’s longest running global coding competition, Code Jam, calls
            on programmers around the world to solve challenging, algorithmic
            puzzles against the clock. Contestants advance through four
            online-hosted rounds to compete at the annual Code Jam World Finals
            that is held at a different international Google office each year.
            Each round brings new challenges, and in the end 25 contestants will
            have the ultimate chance to put their skills to the test, vying for
            cash prizes and the coveted championship title at the World Finals..
          </p>
          <h3>How does it work?</h3>
          <p>
            Register and compete in Code Jam’s Online Qualification Round. It
            lasts 27 hours, but you won't need that long to earn the round’s
            qualifying point minimum. Once you do, you’ll advance to Online
            Round 1. We offer three sub-rounds for Round 1, and you can compete
            in as many as it takes for you to finish in the top 1,500 of any of
            these rounds. The top 1,500 from each sub-round move on to compete
            for a spot in the top 1,000 contestants of Code Jam Online Round 2.
            These top 1,000 contestants advance to Online Round 3 and earn a
            limited edition Code Jam t-shirt. The top 25 contestants from Code
            Jam Online Round 3 will compete in the Virtual World Finals for the
            championship title and a cash prize of $15,000 USD.
          </p>
        </motion.div>
        <motion.div className="competition-grid"
          initial = {{opacity: 0, x: 250}}
          animate = {{opacity: 1, x: 0}}
          transition = {{
            duration : 1.8
          }}
        >
          <h1>GSOC</h1>
          <h3>What is GSOC ?</h3>
          <p>
            Google Summer of Code is a global, online program focused on
            bringing new contributors into open source software development.
            GSoC Contributors work with an open source organization on a 12+
            week programming project under the guidance of mentors.
          </p>
          <h3>How does it work?</h3>
          <p>
            <strong>Contributors</strong> Potential GSoC contributors contact
            the mentor organizations they want to work with and write a project
            proposal based on ideas the organization has suggested. Once
            accepted, GSoC contributors spend a few weeks becoming familiar with
            the community norms and codebase while determining expected
            milestones with their mentor for the summer. GSoC contributors then
            spend 12+ weeks coding on their projects.{" "}
            <strong>Organisations</strong> Open source projects apply to be
            mentor organizations. Once accepted, organizations discuss possible
            ideas with contributors and choose the proposals they wish to mentor
            for the summer. They provide mentors to help guide each contributor
            through the program.
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default Services_Compitions;
