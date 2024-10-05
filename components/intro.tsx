"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/shahrier_hossain_casual_Image.jpg"
              alt="Shahrier Hossain"
              width="280"
              height="280"
              quality="100"
              priority={true}
              className="h-28 w-28 sm:h-36 sm:w-36  rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-1 right-1.5 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🚀
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Shahrier Hossain.</span>
        I am a <span className="font-bold">Software Engineer</span> with
        <span className="font-bold"> over 1.5 years of experience</span> in developing applications and websites.
        I am passionate about becoming a <span className="font-bold">Researcher</span>, with a deep interest in   {" "}
        <span className="font-bold">Neuro Data Science</span>, <span className="font-bold">Brain-Computer Interfaces</span>, and
        {" "}<span className="font-bold">Human Behavior & Psychology</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-4 py-2 flex items-center gap-2 rounded-md outline-none  hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-4 py-2 flex items-center gap-2 rounded-md outline-none  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10  dark:text-white/60 hover:dark:bg-white/5  hover:bg-gray-200"
          href="/Shahrier-Hossain-Education.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 hover:dark:bg-white/5  hover:bg-gray-200"
          href="https://www.linkedin.com/in/hossain-shahrier/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full  hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 hover:dark:bg-white/5 dark:text-white/60 hover:bg-gray-200"
          href="https://github.com/hossain-shahrier"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
