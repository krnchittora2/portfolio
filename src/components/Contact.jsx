import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, FileDown, Send } from "lucide-react";
import { fadeRotateZoom } from "../utils/animations";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="max-w-5xl mx-auto px-4 py-16 space-y-16 border-t border-gray-700 relative overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeRotateZoom}
    >
      <svg className="absolute top-0 left-0 w-full text-teal-600 opacity-10" viewBox="0 0 1440 320">
        <path
          fill="currentColor"
          d="M0,96L30,101.3C60,107,120,117,180,122.7C240,128,300,128,360,122.7C420,117,480,107,540,122.7C600,139,660,181,720,186.7C780,192,840,160,900,138.7C960,117,1020,107,1080,117.3C1140,128,1200,160,1260,176C1320,192,1380,192,1410,192L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        />
      </svg>

      <motion.h2 className="text-4xl font-bold text-center text-teal-400 z-10 relative">Get In Touch</motion.h2>
      <p className="text-center text-gray-400 max-w-xl mx-auto z-10 relative">
        "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."  ~John F. Woods
      </p>

      <motion.div
        className="grid md:grid-cols-2 gap-12 items-start z-10 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Contact Info and Quick Links */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-gray-400">
            <Mail /> <span>krnchittora2@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <MapPin /> <span>Mumbai, Maharashtra, India</span>
          </div>

          <div className="mt-10 space-y-4">
            <h4 className="text-lg font-semibold text-teal-300">Quick Links</h4>
            <ul className="text-sm space-y-4 text-gray-300">
              <li>
                <Link to="/psych" className="hover:text-teal-400">
                  <FileDown size={14} className="inline mr-1" />
                  Download Resume
                </Link>
              </li>
              <li>
                <a href="mailto:krnchittora2@gmail.com" className="hover:text-teal-400">
                  <Mail size={14} className="inline mr-1" />
                  Send Email
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/karanchittora" target="_blank" className="hover:text-teal-400" rel="noopener noreferrer">
                  <Linkedin size={14} className="inline mr-1" />
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a href="https://github.com/krnchittora2" target="_blank" className="hover:text-teal-400" rel="noopener noreferrer">
                  <Github size={14} className="inline mr-1" />
                  GitHub Repo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <form action="https://formsubmit.co/krnchittora2@gmail.com" method="POST" className="space-y-4">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500" />
          <textarea name="message" rows="5" placeholder="Share your thoughts..." required className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500" />
          <button type="submit" className="flex items-center gap-2 px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded transition-all duration-300">
            <Send size={16} /> Send Message
          </button>
        </form>
      </motion.div>
    </motion.section>
  );
}
