import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaExternalLinkAlt } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { fadeRotateZoom } from "../utils/animations";
import { allProjects } from "../data/content";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const allSkills = ["All", ...new Set(allProjects.flatMap(p => p.skills))];
  const filteredProjects = filter === "All" ? allProjects : allProjects.filter(p => p.skills.includes(filter));

  return (
    <motion.section id="projects" className="max-w-[95vw] mx-auto px-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeRotateZoom}>
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-10">Projects</h2>

      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-6 transition duration-500"
        key={filter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {allSkills.map((skill, idx) => (
          <button
            key={idx}
            onClick={() => setFilter(skill)}
            className={`px-4 py-1 rounded-full border ${filter === skill ? "bg-teal-600 text-white border-teal-400" : "bg-gray-700 text-gray-300 border-gray-500 hover:bg-teal-700"}`}
          >
            {skill}
          </button>
        ))}
      </motion.div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1.3}
        centeredSlides
        loop
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="!px-8"
      >
        {filteredProjects.map((proj, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-3xl border-2 border-teal-500 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 space-y-4 w-[90%] mx-auto">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-teal-300">{proj.title}</h3>
                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-gray-400 hover:text-teal-400" />
                </a>
              </div>
              <p className="text-sm text-gray-400 italic">{proj.description}</p>
              <div className="flex gap-2 flex-wrap my-2">
                {proj.skills.map((skill, idx) => (
                  <span key={idx} className="bg-teal-600/20 text-teal-300 text-xs px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>{proj.date}</span>
                <span>{proj.platform}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
