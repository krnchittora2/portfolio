import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeRotateZoom } from "../utils/animations";
import { journeyTree } from "../data/content";

export default function Journey() {
  const [activeSchool, setActiveSchool] = useState(0);
  const [activeActivity, setActiveActivity] = useState(0);

  return (
    <motion.section id="journey" className="max-w-7xl mx-auto px-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeRotateZoom}>
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-10">My Journey</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Schools */}
        <div className="space-y-6 relative">
          {journeyTree.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center gap-4 cursor-pointer pl-2 pr-4 py-2 rounded-lg transition-all duration-300 ${
                index === activeSchool ? "bg-gray-800 border-l-4 border-teal-400" : "hover:bg-gray-700 border-l-4 border-transparent"
              }`}
              onClick={() => {
                setActiveSchool(index);
                setActiveActivity(0);
              }}
            >
              <div className="flex flex-col items-end w-20">
                <span className="text-sm font-semibold text-teal-400">{entry.year}</span>
                <span className="mt-1">{entry.icon}</span>
              </div>
              <div className="text-lg font-medium">{entry.school}</div>
            </motion.div>
          ))}
        </div>

        {/* Middle: Activities */}
        <div className="space-y-4">
          {journeyTree[activeSchool].activities.map((activity, index) => (
            <div
              key={index}
              className={`cursor-pointer px-4 py-3 border rounded-lg ${
                index === activeActivity ? "border-teal-400 bg-gray-800" : "border-gray-600 hover:border-teal-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveActivity(index)}
            >
              <div className="text-md font-medium">{activity.title}</div>
              <div className="flex flex-col items-end">
                <span className="text-sm font-semibold text-teal-400">{activity.jobTitle}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Activity Details */}
        <motion.div
          key={journeyTree[activeSchool].activities[activeActivity].title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-md border border-gray-700 space-y-3"
        >
          <h3 className="text-xl font-bold text-teal-300 flex items-center gap-2">
            🎯 {journeyTree[activeSchool].activities[activeActivity].title}
          </h3>
          <p className="text-gray-300 text-sm">{journeyTree[activeSchool].activities[activeActivity].description}</p>
          <div className="flex gap-2 flex-wrap">
            {journeyTree[activeSchool].activities[activeActivity].tags.map((tag, i) => (
              <span key={i} className="bg-teal-600/20 text-teal-300 text-xs px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
