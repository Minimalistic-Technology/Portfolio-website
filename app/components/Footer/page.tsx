"use client";

import {
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  const handleScroll = (id: any) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-[#1a1a1a] text-white py-10 px-4 text-center">
      <div className="text-red-500 text-xl font-bold mb-6">LOGO</div>

      <nav className="flex justify-center gap-8 mb-6 text-gray-300 text-sm">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("home");
          }}
        >
          Home
        </a>
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("services");
          }}
        >
          Services
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("about");
          }}
        >
          About me
        </a>
        <a
          href="#portfolio"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("portfolio");
          }}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("contact");
          }}
        >
          Contact me
        </a>
      </nav>

      <div className="flex justify-center gap-4 mb-6">
        <a href="#">
          <FaInstagram className="text-xl" />
        </a>
        <a href="#">
          <FaLinkedinIn className="text-xl" />
        </a>
        <a href="#">
          <FaDribbble className="text-xl" />
        </a>
        <a href="#">
          <FaBehance className="text-xl" />
        </a>
      </div>

      <div className="flex justify-center flex-wrap gap-4 items-center mb-4 text-sm text-gray-300">
        <div className="flex items-center gap-2">
          <FaEnvelope />
          <span>Mahmood.fazile7005@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone />
          <span>+93 729 107 005</span>
        </div>
      </div>

      <div className="border-t border-gray-600 w-2/3 mx-auto my-4" />

      <p className="text-xs text-gray-500">
        Designed by @mahmood.fazile UI/UX designer
      </p>
    </footer>
  );
}
