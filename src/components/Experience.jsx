import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeRotateZoom } from "../utils/animations";
import { experience } from "../data/content";

export default function Experience() {
  const [activeEntry, setActiveEntry] = useState(0);

  return (
    <motion.section
      id="experience"
      className="max-w-7xl mx-auto px-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeRotateZoom}
    >
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-10">Professional Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-10 gap-10">
        {/* Left Side: Companies */}
        <div className="space-y-6 md:col-span-4">
          {experience.map((entry, index) => (
            <motion.div
              key={index}
              className={`cursor-pointer relative group p-4 border-l-4 ${activeEntry === index
                ? "border-teal-400 bg-gray-800"
                : "border-gray-600 hover:border-teal-300 hover:bg-gray-700"
                } transition-all duration-300 rounded-l-xl`}
              onClick={() => setActiveEntry(index)}
              // onMouseEnter={() => setActiveEntry(index)}
            >
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center col-span-2 text-lg font-semibold">{entry.title}</div>
                <div className="flex items-center col-span-1 text-sm font-semibold">{entry.company}</div>
              </div>
              <div className="text-xs text-gray-400">{entry.period}</div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Details */}
        <motion.div
          className="bg-gradient-to-br from-[#1f2937] to-[#111827] p-8 rounded-2xl shadow-lg border border-teal-700 backdrop-blur-md md:col-span-6 relative overflow-hidden"
          key={activeEntry}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-teal-700 rounded-bl-full opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-700 rounded-tr-full opacity-10"></div>

          <h3 className="text-xl font-bold text-teal-300 border-b border-gray-600 pb-2 mb-4">
            {experience[activeEntry].title} @ {experience[activeEntry].company}
          </h3>
          <p className="text-sm text-gray-400 italic mb-6">
            {experience[activeEntry].period}
          </p>
          <div className="flex gap-2 flex-wrap my-5">
            {experience[activeEntry].tags.map((skill, idx) => (
              <span key={idx} className="bg-teal-600/20 text-teal-300 text-xs px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
          <ul className="space-y-4">
            {experience[activeEntry].items.map((item, i) => (
              <li
                key={i}
                className="relative pl-6 text-gray-300 text-sm before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-teal-400 before:rounded-full"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
