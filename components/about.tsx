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
  A dedicated <span className="font-semibold">Penetration Tester</span> and <span className="font-semibold">Certified Ethical Hacker (CEH)</span> with a strong foundation in <span className="font-semibold">Vulnerability Assessment and Penetration Testing (VAPT)</span>. I actively have sharpened my skills through Capture The Flag (CTF) challenges on <span className="font-semibold">Hack The Box</span> and <span className="font-semibold">TryHackMe</span>.

</p>
      
    </motion.section>
  );
}
