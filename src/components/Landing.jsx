import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { ReactTyped } from "react-typed";
import { fadeRotateZoom } from "../utils/animations";

export default function Landing() {
  return (
    <motion.section
      id="home"
      className="relative text-center space-y-6 z-10 max-w-3xl mx-auto pt-10"
      variants={fadeRotateZoom}
      initial="hidden"
      animate="show"
    >
      <motion.h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
        Karan Chittora
      </motion.h1>

      <ReactTyped
        className="text-xl text-gray-400"
        strings={["Full Stack Developer", "Software Consultant", "Backend Engineer", "AI Enthusiast"]}
        typeSpeed={60}
        backSpeed={40}
        loop
      />
      
      {/* Short description added here */}
      <p className="text-base sm:text-lg text-gray-500 px-4 leading-relaxed">
        👋 Hey there! I craft snappy backend services, full-stack apps, and clever AI-powered tools — all built to scale, run fast, and actually get things done.
      </p>

      <motion.div className="flex flex-wrap justify-center gap-4 pt-4">
        {[
          ['GitHub', Github, "https://github.com/krnchittora2"],
          ['LinkedIn', Linkedin, "https://linkedin.com/in/karanchittora"],
          ['Email', Mail, "mailto:krnchittora2@gmail.com"],
        ].map(([label, Icon, hrefPath], idx) => (
          <motion.a
            key={idx}
            href={hrefPath}
            target="_blank"
            className="group bg-black hover:bg-gray-800 text-white px-4 py-2 rounded flex items-center gap-2 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon size={18} className="group-hover:-translate-y-1 group-hover:scale-110 transition" />
            {label}
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="absolute -top-8 right-0 text-sm flex items-center gap-2 bg-blue-800/40 px-4 py-2 rounded-full text-blue-200 shadow-lg animate-pulse"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        title="Psych!!"
        transition={{ delay: 1, duration: 0.6 }}
      >
        <Sparkles className="w-4 h-4" />
        {/* Featured on DevSpot Weekly */}
      </motion.div>
    </motion.section>
  );
}
