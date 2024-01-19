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
      A <span className=" font-semibold">Full-Stack</span> developer and <span className=" font-semibold">cybersecurity enthusiast.</span> As a Software Engineer at Trunk Lord Technologies, I optimize user experiences through <span className=" font-semibold">JavaScript and React.js.</span> In my previous role as a <span className=" font-semibold">WordPress Developer,</span> I honed site-building and web development skills. Currently freelancing as a blogger at DevGlimpse, I share insights on various tech topics. I hold certifications in Web Development <span className=" font-semibold"> MERN STACK </span>and<span className=" font-semibold"> JavaScript.</span>  Educationally, I pursued a BTech in Information Technology. I am eager to connect and explore opportunities in the dynamic tech world!
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about and exploring{" "}
        <span className="font-medium">Cyber Security.</span>
      </p>
    </motion.section>
  );
}
