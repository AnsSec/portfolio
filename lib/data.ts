import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaWordpress } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";
import cipherGuard from "@/public/cipherGuard.png";
import portfolio from "@/public/portfolio.png";
import StudyNotion from "@/public/StudyNotion.png"
import { FaBloggerB } from "react-icons/fa";

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
    title: "Wordpress Developer",
    location: "Remote",
    description:
      `During my internship as a WordPress, I gained valuable experience in site building, Ahrefs, web scraping, and
      WordPress development. Working remotely, I actively contributed to the team's objectives and enhanced my skills in web development.`,
    icon: React.createElement(FaWordpress),
    date: "March 2023 - August 2023",
  },
  {
    title: "Freelance Blogger",
    location: "Bilaspur, India",
    description:
      `Explore development insights and cybersecurity expertise on DevGlimpse. Discover the latest trends, coding tips, and security strategies at devglimpse.com.`,
    icon: React.createElement(FaBloggerB),
    date: "August 2023 - present",
  },
  {
    title: "Software Engineer",
    location: "Remote",
    description:
      `Spearheaded the implementation of advanced features using JavaScript and React.js, enhancing the overall user experience.
      Contributed to a 15% reduction in backend response time by fine-tuning Express.js and MongoDB.`,
    icon: React.createElement(CgWorkAlt),
    date: "August 2023 - present",
  },
{
    title: "CTF Player",
    location: "Remote",
    description:
      `I'm a TryHackMe CTF enthusiast, mastering cybersecurity challenges in penetration testing and exploit development. I thrive on uncovering vulnerabilities, contributing to a collaborative community, and constantly seeking new challenges.`,
    icon: React.createElement(SiTryhackme),
    date: "January 2024 - present",
  },
  

] as const;

export const projectsData = [
  {
    title: "CipherGuard",
    description:
      "Cipher Guard is a cutting-edge security application designed for robust data protection. Built on Mern , this project offers a modern and efficient platform to secure digital credentials.",
    tags: ["React", "MongoDB", "Tailwind", "Express"],
    imageUrl: cipherGuard,
    liveUrl:"https://cipherguard.devglimpse.com",
  },
  {
    title: "Personal Portfolio",
    description:
      "I Build this Personal Portfolio to showcase my skills and interests to the world.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind",],
    imageUrl: portfolio,
    liveUrl:"https://anshuldev.com",
  },
  {
    title: "StudyNotion",
    description:
      "StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content.",
    tags: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS"],
    imageUrl: StudyNotion,
    liveUrl:"https://studynotion.anshuldev.com",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "AWS",
  "Linux",
  "Tailwind",
  "MongoDB",
  "Zustand",
  "Express",
  "Framer Motion",
] as const;
