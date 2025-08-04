import React from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, FileDown, Send, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme, scrollToTop } from "./ThemeContext";

export default function PageActions() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <>
      {/* Fixed Action Buttons */}
      <div className="fixed top-36 right-5 z-50 flex flex-col items-center gap-4">
        <motion.button
          onClick={toggleTheme}
          className="bg-gray-700 hover:bg-gray-600 text-white dark:text-black p-2 rounded-full shadow-xl"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.95 }}
          title="Toggle Theme"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </motion.button>
        <motion.div
          whileHover={{ scale: 1.2, rotate: -10 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/psych"
            className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full shadow-xl block"
            title="Download Resume"
          >
            <FileDown size={18} />
          </Link>
        </motion.div>
        <motion.a
          href="#contact"
          className="bg-teal-700 hover:bg-gray-600 text-white p-2 rounded-full shadow-xl"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          title="Contact Me"
        >
          <Send size={18} />
        </motion.a>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-teal-600 text-white hover:bg-teal-700 shadow-lg transition-all duration-300"
        title="Back to Top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
