import React, { useState, useEffect } from "react";
import { Sun, Moon, FileDown, Send, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedBackground from "./components/layout/AnimatedBackground";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/layout/Footer";
import Loader from "./components/layout/Loader";

function App() {

  //Loading Mask
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loader />;

  //Dark Mode
  const toggleTheme = () => setDarkMode(!darkMode);

  //Back to Top
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main className={`${darkMode ? "bg-[#0e0e10] text-gray-200" : "bg-white text-black"} min-h-screen px-6 py-12 space-y-24 font-sans overflow-x-hidden scroll-smooth`}>
      <AnimatedBackground />

      {/* Page Actions */}
      <div className="fixed top-5 right-5 z-50 flex flex-col items-center gap-4">
        <motion.button onClick={toggleTheme} className="bg-gray-700 hover:bg-gray-600 text-white dark:text-black p-2 rounded-full shadow-xl" whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.95 }} title="Toggle Theme">
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </motion.button>
        <motion.a href="/portfolio/psych" /*download*/ className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full shadow-xl" whileHover={{ scale: 1.2, rotate: -10 }} whileTap={{ scale: 0.95 }} title="Download Resume">
          <FileDown size={18} />
        </motion.a>
        <motion.a href="#contact" className="bg-teal-700 hover:bg-gray-600 text-white p-2 rounded-full shadow-xl" whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.95 }} title="Contact Me">
          <Send size={18} />
        </motion.a>
      </div>

      {/* Sections */}
      <Landing />
      <Skills />
      <Experience />
      <Projects />
      <Journey />
      <Contact />
      <Footer />

      {/* Back to Top */}
      <button onClick={scrollToTop} className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-teal-600 text-white hover:bg-teal-700 shadow-lg transition-all duration-300" title="Back to Top">
        <ArrowUp size={20} />
      </button>
    </main>
  );
}

export default App;
