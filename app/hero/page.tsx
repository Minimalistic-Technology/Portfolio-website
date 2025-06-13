"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
  FaUsers,
  FaFigma,
  FaPercent,
  FaDownload,
  FaEye,
} from "react-icons/fa";
import {
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
} from "react-icons/si";
import ContactSection from "../components/ContactMe/page";
import Footer from "../components/Footer/page";
import dynamic from "next/dynamic";
const ProjectSection = dynamic(() => import("../components/Projects/page"), {
  ssr: false,
});

export default function Hero() {
  const services = Array(6).fill({
    title: "App Design",
    description:
      "Crafting intuitive user experiences with clean, modern interfaces tailored to your needs.",
    icon: <FaUsers className="text-orange-400 text-5xl mb-6 drop-shadow-lg" />,
  });

  const handleScroll = (id: any) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    {
      icon: <FaFigma size={48} className="drop-shadow-md" />,
      title: "Figma",
      tagline: "Pixel-perfect prototyping",
    },
    {
      icon: <SiAdobexd size={48} className="drop-shadow-md" />,
      title: "Adobe XD",
      tagline: "Wireframe wizardry",
    },
    {
      icon: <SiAdobephotoshop size={48} className="drop-shadow-md" />,
      title: "Adobe Photoshop",
      tagline: "Creative retouching",
    },
    {
      icon: <SiAdobeillustrator size={48} className="drop-shadow-md" />,
      title: "Adobe Illustrator",
      tagline: "Vector virtuoso",
    },
    {
      icon: <SiAdobepremierepro size={48} className="drop-shadow-md" />,
      title: "Adobe Premiere",
      tagline: "Cut & craft maestro",
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, ease: "easeOut", duration: 0.5 },
    }),
  };

  const socialIconHover = {
    whileHover: { scale: 1.2 },
    transition: { type: "spring", stiffness: 300 },
  };

  type SocialLink = {
    Icon: React.ElementType;
    url: string;
    label: string;
  };

  const socialLinks: SocialLink[] = [
    { Icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
    { Icon: FaLinkedinIn, url: "https://linkedin.com", label: "LinkedIn" },
    { Icon: FaDribbble, url: "https://dribbble.com", label: "Dribbble" },
    { Icon: FaBehance, url: "https://behance.net", label: "Behance" },
  ];

  const fadeInLeft = {
    hidden: { opacity: 0, x: -120 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 120 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans selection:bg-orange-500 selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-orange-700 px-5 py-2 flex justify-between items-center shadow-lg">
        <div className="text-orange-500 font-extrabold text-2xl flex items-center gap-3 cursor-pointer select-none">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="w-12 h-12 rounded-b-full rounded-t-md drop-shadow-lg"
          />
          <span className="hidden md:inline">Tushar Shukla</span>
        </div>
        <ul className="hidden md:flex gap-12 text-gray-300 font-semibold tracking-wide">
          {[
            { name: "Home", id: "home" },
            { name: "Services", id: "services" },
            { name: "About Me", id: "about" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Contact Me", id: "contact" },
          ].map(({ name, id }) => (
            <li key={id || name}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (id) handleScroll(id);
                }}
                className="relative group hover:text-orange-400 transition-colors"
              >
                {name}
                <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-orange-500 rounded transition-all"></span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:tusharjishukla@gmail.com"
          target="_top"
          className="bg-gradient-to-r from-orange-500 to-yellow-400 text-black px-8 py-3 rounded-full font-bold shadow-lg hover:brightness-110 transition-transform hover:scale-105 inline-block"
        >
          Hire Me
        </a>
      </nav>

      {/* Hero Section */}
      <div
        id="home"
        className="flex flex-col md:flex-row items-center justify-evenly px-8 md:px-20 pt-32 md:pt-40 gap-12"
      >
        {/* Left Text */}
        <div className="max-w-xl space-y-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-orange-400 text-lg tracking-wide uppercase font-semibold"
          >
            Hi, I am
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-5xl font-extrabold tracking-tight leading-tight drop-shadow-lg"
          >
            Tushar Shukla
          </motion.h1>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="text-6xl font-bold text-gradient bg-clip-text text-transparent bg-orange-500"
            style={{ textShadow: "0 0 8px rgb(251 146 60 / 0.5)" }}
          >
            Full Stack Developer
          </motion.h2>

          {/* Social Icons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex gap-6 text-gray-400 text-3xl mt-6"
          >
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, url, label }, idx) => (
                <motion.a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={socialIconHover.whileHover}
                  transition={socialIconHover.transition}
                  className="cursor-pointer drop-shadow-lg text-2xl text-black dark:text-white"
                  aria-label={label}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="flex gap-5 mt-10"
          >
            <button className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-black px-8 py-3 rounded-full font-bold shadow-lg hover:brightness-110  transition-transform hover:scale-105">
              <FaUsers /> Hire Me
            </button>

            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 border border-orange-500 text-orange-400 px-7 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-black hover:shadow-lg transition"
            >
              <FaDownload /> Download CV
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-orange-500 text-orange-400 px-7 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-black hover:shadow-lg transition"
            >
              <FaEye /> View CV
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={6}
            className="flex flex-wrap gap-8 mt-14"
          >
            {[
              { count: "5+", label: "Years Experience" },
              { count: "20+", label: "Projects Done" },
              { count: "80+", label: "Happy Clients" },
            ].map((item, i) => (
              <div
                key={i}
                className="w-28 h-28 bg-gradient-to-tr from-orange-700/30 to-transparent rounded-full flex flex-col items-center justify-center text-center shadow-md hover:shadow-orange-400 transition-shadow cursor-default"
              >
                <div className="text-orange-600 text-3xl font-extrabold drop-shadow-sm">
                  {item.count}
                </div>
                <div className="text-gray-300 text-xs mt-1 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="relative mt-6 md:mt-0"
        >
          <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-tr from-orange-600 to-transparent shadow-lg overflow-hidden border-4 border-orange-600">
            <Image
              src="/image.png"
              alt="Designer"
              width={450}
              height={450}
              className="object-cover grayscale hover:grayscale-0 transition duration-500 ease-in-out"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full border-20 border-orange-400 animate-[ping_4s_linear_infinite] opacity-30"
          />
        </motion.div>
      </div>

      {/* Services Section */}
      <section
        id="services"
        className="bg-black bg-opacity-90 text-white px-8 md:px-20 py-24"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-extrabold mb-3 tracking-wide drop-shadow-md">
            Services
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I provide user-focused design and development services tailored to
            your needs, blending creativity with technical excellence.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.07,
                boxShadow:
                  "0 20px 40px rgba(251, 146, 60, 0.4), 0 0 15px rgba(251, 146, 60, 0.3)",
                backdropFilter: "blur(12px)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-br from-[#111111] to-[#1c1c1c] rounded-3xl p-10 text-center flex flex-col items-center shadow-lg border border-orange-700/30 backdrop-blur-sm"
            >
              {service.icon}
              <h3 className="text-orange-400 font-semibold text-2xl mb-3 drop-shadow-sm">
                {service.title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed max-w-xs">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="bg-black bg-opacity-95 text-white px-8 md:px-20 py-24"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-md">
            About Me
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            UI/UX and Video Editing specialist crafting immersive and elegant
            digital experiences.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
          {/* Profile Image */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative w-[320px] h-[450px] rounded-3xl bg-gradient-to-tr from-orange-700/40 to-transparent border border-orange-600 backdrop-blur-md shadow-lg overflow-hidden"
          >
            <Image
              src="/image1.png"
              alt="Profile"
              fill
              className="object-cover grayscale hover:grayscale-0 transition duration-500 ease-in-out"
            />
          </motion.div>

          {/* Bio + CV Link */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-2xl space-y-6 text-gray-300 leading-7"
          >
            <p>
              I’m a software engineer crafting intuitive applications and
              engaging user interfaces that merge creativity with engineering
              precision.
            </p>
            <p>
              In this digital atelier, I blend design and development to build
              seamless, human-centered experiences.
            </p>

            <a
              href="/cv.pdf"
              download
              className="text-orange-400 underline hover:text-orange-300 transition duration-200 inline-block"
            >
              &#8681; Download CV
            </a>
          </motion.div>
        </div>

        {/* Skill Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-24 text-center max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {},
          }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              className="p-8 rounded-2xl shadow-lg border border-orange-600 backdrop-blur-md bg-gradient-to-tr from-orange-800/40 to-transparent flex flex-col items-center"
            >
              <div className="text-orange-400 text-3xl mb-4 drop-shadow-lg">
                {skill.icon}
              </div>
              <p className="text-orange-400 font-semibold text-lg">
                {skill.tagline}
              </p>
              <p className="text-gray-300 text-sm mt-1">{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="bg-black bg-opacity-90 py-24">
        <ProjectSection />
      </section>

      {/* Contact */}
      <section id="contact" className="bg-black bg-opacity-90 py-24">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
