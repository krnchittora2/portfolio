import React from "react";
import { motion } from "framer-motion";
import { fadeRotateZoom, staggerContainer } from "../utils/animations";
import {
  FaReact,
  FaJava,
  FaPython,
  FaAws,
  FaGitlab,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiOracle,
  SiJavascript,
  SiDjango,
  SiMicrosoftsqlserver,
  SiOpenai,
  SiGooglecloud,
  SiApachekafka,
  SiApachetomcat,
  SiJirasoftware,
} from "react-icons/si";
import { Leaf, LeafyGreenIcon } from "lucide-react";

const skills = [
  { icon: <FaAws size={40} className="fill-current text-blue-500" />, title: "AWS EC2" },
  { icon: <SiGooglecloud size={40} className="fill-red-500" />, title: "Google Cloud" },
  { icon: <FaGitlab size={40} className="text-orange-700" />, title: "GitLab" },
  { icon: <SiOpenai size={40} className="text-grey-900" />, title: "ChatGPT" },
  { icon: <SiJirasoftware size={40} className="text-blue-600" />, title: "JIRA" },
  { icon: <SiApachekafka size={40} className="text-grey-900" />, title: "Kafka" },
  { icon: <Leaf size={40} className="fill-green-500" />, title: "Spring Boot" },
  { icon: <SiApachetomcat size={40} className="text-red-600" />, title: "Tomcat" },
  { icon: <FaReact size={40} className="text-blue-300" />, title: "React" },
  { icon: <SiDjango size={40} className="text-green-300" />, title: "Django" },
  { icon: <SiPostgresql size={40} className="text-blue-700" />, title: "PostgreSQL" },
  { icon: <SiOracle size={40} className="text-red-700" />, title: "Oracle DB" },
  { icon: <SiJavascript size={40} className="text-yellow-300" />, title: "JavaScript" },
  { icon: <SiMicrosoftsqlserver size={40} className="text-blue-500" />, title: "MS SQL" },
  { icon: <FaJava size={40} className="text-orange-400" />, title: "Java" },
  { icon: <FaPython size={40} className="text-yellow-400" />, title: "Python" },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="space-y-10 z-10 relative text-center"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2 className="text-3xl font-bold text-teal-300" variants={fadeRotateZoom}>
        Technical Skills
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
