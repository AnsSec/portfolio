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
  A <span className="font-semibold">MERN developer</span> and <span className="font-semibold">cybersecurity enthusiast</span>. Currently freelancing as a blogger at DevGlimpse, I share tech insights. Certified in Web Development <span className="font-semibold">MERN STACK</span> and JavaScript, I hold a BTech in Information Technology. CTF player at <span className="font-semibold">TryHackMe</span>, actively seeking opportunities to contribute in the dynamic tech landscape.
</p>

<p>
  <span className="italic">When I'm not coding</span>, I enjoy playing video games and <span className="font-medium">learning new things</span>. Currently exploring <span className="font-medium">Cyber Security</span>.
</p>


    </motion.section>
  );
}
