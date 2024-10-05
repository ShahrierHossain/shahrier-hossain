"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        My professional journey began as a Teaching Assistant, where I developed the ability to assess challenges from multiple perspectives while mentoring students across various academic levels. Even before completing my degree in
        <span className="font-medium"> Computer Science and Engineering</span>, I embarked on a career in software development. My initial role was as a <span className="font-medium"> full-stack developer</span> for a leading food delivery company, and I am currently working as a Software Engineer at a multinational organization.
        <span className="italic"> What I enjoy most about programming</span> is the problem-solving process, and I
        <span className="relative underline hover:text-red-500">love</span>
        the sense of accomplishment that comes with finding solutions to complex challenges. My core technical stack includes <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>, and I am also proficient in TypeScript and Prisma. I am continuously motivated to learn and adopt new technologies.
      </p>

      <p>
        <span className="italic">I am constantly fascinated</span> by the <span className="font-medium">human brain's capabilities</span> and the diverse ways in which people approach the same problem. Given the opportunity, I would love to pursue a career in {" "}
        <span className="italic">Neuro Data Science</span>, delving into the human mind as a vast source of data. My passion for <span className="font-medium">learning</span> extends beyond technology; I am inspired by Art, Psychology, Interaction, and Technology, all of which influence my growth as both an engineer and a researcher.
      </p>
    </motion.section>

  );
}
