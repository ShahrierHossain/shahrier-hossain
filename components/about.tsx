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
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My journey began as a Teaching Assistant, where I evaluated students across multiple grades, developing an ability to see problems from different perspectives. Even before graduating with a degree in <span className="font-medium">Computer Science and Engineering</span>, I embarked on my career as a Software Engineer. I initially joined a leading food delivery company <span className="font-medium">as a full-stack developer</span> and am currently working as a Software Engineer at a multinational company. <span className="italic">My favorite aspect of programming</span> is the problem-solving process, and I{" "}
        <span className="relative underline hover:text-red-500">
          love
          <span className="absolute left-0 top-0 hidden hover:block text-red-500 ">
            ❤️
          </span>
        </span>{" "}
        the feeling of arriving at a solution after tackling challenges. My core stack includes <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>, and I am also proficient in TypeScript and Prisma. I am always eager to learn new technologies.
      </p>

      <p>
        <span className="italic">I am constantly amazed</span> by the <span className="font-medium">human brain's capabilities</span> and how individuals can approach the same topic in uniquely different ways. Given the chance, I would love to work in <span className="italic">Neuro Data Science</span> to explore the fascinating source of data in the human mind. My passion for <span className="font-medium">learning new things</span> spans beyond tech; my interests in Art, Psychology, Interaction, and Technology inspire me to grow as both a creative engineer and a researcher.
      </p>
    </motion.section>
  );
}
