import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import cipherGuard from "@/public/cipherGuard.png";
import portfolio from "@/public/portfolio.png";
import StudyNotion from "@/public/StudyNotion.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer Intern",
    location: "Remote",
    description:
      `I designed and developed Secure APIs in Express.js, incorporating rigorous input validation and robust
error handling to ensure reliability and security.`,
    icon: React.createElement(CgWorkAlt),
    date: "August 2023 - December 2023",
  },
  {
    title: "Associate Cyber Security Consultant",
    location: "Remote",
    description:
      `I worked as an Associate Cyber Security Consultant at Security Brigade Infosec`,
    icon: RReact.createElement(CgWorkAlt),
    date: "October 2024 - Present",
  },
  

] as const;

export const projectsData = [
  {
    title: "CipherGuard",
    description:
      "Cipher Guard is a cutting-edge security application designed for robust data protection. Built on Mern , this project offers a modern and efficient platform to secure digital credentials.",
    tags: ["React", "MongoDB", "Tailwind", "Express"],
    imageUrl: cipherGuard,
    liveUrl:"https://cipher-guard.netlify.app",
  },
  {
    title: "Personal Portfolio",
    description:
      "I Build this Personal Portfolio to showcase my skills and interests to the world.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind",],
    imageUrl: portfolio,
    liveUrl:"https://anssec.netlify.app",
  },
  {
    title: "StudyNotion",
    description:
      "StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content.",
    tags: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS"],
    imageUrl: StudyNotion,
    liveUrl:"https://steady-yeot-09103c.netlify.app",
  },
] as const;

export const skillsData = [
  "Javascript", "Python", "Bash", "HTML", "CSS", "Express.js", "Next.js", "React.js", "WordPress", "NoSQL", "SQL", "Linux", "Windows", "Penetration Testing", "VAPT", "Exploitation", "Privilege Escalation", "Vulnerability Scanning", "Tunneling", "Kali Linux", "Nmap", "OWASP Top 10", "Wireshark", "Burpsuite", "Metasploit", "Nikto", "Hashcat", "FFUF",
] as const;
