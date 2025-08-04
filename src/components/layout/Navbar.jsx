// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode } = useTheme();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItemClasses = "relative group transition duration-300";
  const navLinkBase = "px-2 py-1 text-sm font-medium tracking-wide";
  const hoverUnderline = `
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
    after:w-0 group-hover:after:w-full after:transition-all after:duration-300
    after:bg-teal-500
  `;

  const navLinks = (
    <>
      <a href="#home" className={`${navItemClasses} ${navLinkBase} ${hoverUnderline}`}>
        Home
      </a>
      <a href="#skills" className={`${navItemClasses} ${navLinkBase} ${hoverUnderline}`}>
        Skills
      </a>
      <a href="#experience" className={`${navItemClasses} ${navLinkBase} ${hoverUnderline}`}>
        Experience
      </a>
      <a href="#projects" className={`${navItemClasses} ${navLinkBase} ${hoverUnderline}`}>
        Projects
      </a>
      <a href="#journey" className={`${navItemClasses} ${navLinkBase} ${hoverUnderline}`}>
        Journey
      </a>
      <a href="#contact" className={`${navItemClasses} ${navLinkBase} ${hoverUnderline}`}>
        Contact
      </a>
    </>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between 
        backdrop-blur-md shadow-md
        ${darkMode ? "bg-black/40 text-white" : "bg-white/40 text-black"}
      `}
    >
      <div className="font-bold text-xl tracking-widest">Karan Chittora</div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex gap-8 items-center">{navLinks}</div>

      {/* Hamburger Icon */}
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="transition-transform hover:scale-110 focus:outline-none"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`absolute top-full left-0 w-full sm:hidden py-4 px-6 flex flex-col gap-3
              ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} shadow-lg z-40
            `}
          >
            {navLinks}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
