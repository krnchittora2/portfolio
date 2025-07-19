import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeRotateZoom } from "../utils/animations";

const journeyData = [
  {
    title: "Senior Developer at XYZ Corp",
    period: "Jan 2022 - Present",
    items: [
      "Developed scalable microservices in Java and Spring Boot",
      "Led frontend architecture using React and TypeScript",
    ],
  },
  {
    title: "Software Engineer at ABC Ltd",
    period: "Jul 2019 - Dec 2021",
    items: [
      "Built internal tools using Python and Django",
      "Integrated third-party APIs and improved performance by 30%",
    ],
  },
];

export default function Experience() {
  const [activeEntry, setActiveEntry] = useState(0);

  return (
    <motion.section
      className="max-w-7xl mx-auto px-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeRotateZoom}
    >
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-10">Professional Journey</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Side: Companies */}
        <div className="space-y-6 md:col-span-1">
          {journeyData.map((entry, index) => (
            <motion.div
              key={index}
              className={`cursor-pointer relative group p-4 border-l-4 ${activeEntry === index
                ? "border-teal-400 bg-gray-800"
                : "border-gray-600 hover:border-teal-300 hover:bg-gray-700"
                } transition-all duration-300 rounded-l-xl`}
              onClick={() => setActiveEntry(index)}
              onMouseEnter={() => setActiveEntry(index)}
            >
              <div className="text-lg font-semibold">{entry.title}</div>
              <div className="text-xs text-gray-400">{entry.period}</div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Details */}
        <motion.div
          className="bg-gradient-to-br from-[#1f2937] to-[#111827] p-8 rounded-2xl shadow-lg border border-teal-700 backdrop-blur-md md:col-span-3 relative overflow-hidden"
          key={activeEntry}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-teal-700 rounded-bl-full opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-700 rounded-tr-full opacity-10"></div>

          <h3 className="text-2xl font-bold text-teal-300 border-b border-gray-600 pb-2 mb-4">
            {journeyData[activeEntry].title}
          </h3>
          <p className="text-sm text-gray-400 italic mb-6">
            {journeyData[activeEntry].period}
          </p>
          <ul className="space-y-4">
            {journeyData[activeEntry].items.map((item, i) => (
              <li
                key={i}
                className="relative pl-6 text-gray-300 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-teal-400 before:rounded-full"
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
