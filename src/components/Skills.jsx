import React from "react";
import { motion } from "framer-motion";
import { fadeRotateZoom, staggerContainer } from "../utils/animations";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 size={40} className="text-orange-500" />, title: "HTML5" },
  { icon: <FaCss3Alt size={40} className="text-blue-500" />, title: "CSS3" },
  { icon: <SiTailwindcss size={40} className="text-cyan-400" />, title: "Tailwind" },
  { icon: <FaReact size={40} className="text-cyan-300" />, title: "React" },
  { icon: <FaNodeJs size={40} className="text-green-400" />, title: "Node.js" },
  { icon: <SiTypescript size={40} className="text-blue-400" />, title: "TypeScript" },
  { icon: <FaJava size={40} className="text-red-500" />, title: "Java" },
  { icon: <FaPython size={40} className="text-yellow-300" />, title: "Python" },
  { icon: <SiMongodb size={40} className="text-green-600" />, title: "MongoDB" },
  { icon: <SiPostgresql size={40} className="text-blue-500" />, title: "PostgreSQL" },
];

export default function Skills() {
  return (
    <motion.section
      className="space-y-10 z-10 relative text-center"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2 className="text-3xl font-bold text-teal-300" variants={fadeRotateZoom}>
        Proficiencies
      </motion.h2>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center"
        variants={fadeRotateZoom}
      >
        {skills.map(({ icon, title }, index) => (
          <motion.div
            key={index}
            className="w-28 h-28 hover:bg-gray-900 rounded-2xl shadow-lg flex flex-col items-center justify-center transition duration-200 hover:scale-105"
            whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
            title={title}
          >
            {icon}
            <p className="mt-2 text-sm text-center text-gray-300">{title}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
