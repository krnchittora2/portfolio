import React from "react";
import AnimatedBackground from "./components/layout/AnimatedBackground";
import { useTheme } from "./components/layout/ThemeContext";
import Navbar from "./components/layout/Navbar";
import PageActions from "./components/layout/PageActions";
import Footer from "./components/layout/Footer";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  const { darkMode } = useTheme();

  return (
    <main className={`${darkMode ? "bg-[#0e0e10] text-gray-200" : "bg-white text-gray-800"} min-h-screen px-6 py-12 font-sans overflow-x-hidden scroll-smooth`}>
      {/* Fixed Sections */}
      <AnimatedBackground />
      <Navbar />
      <PageActions />

      {/* Sections with manual spacing */}
      <div className="pt-24 space-y-24">  {/* Push content below fixed Navbar and add vertical spacing between sections */}
        <Landing />
        <Skills />
        <Experience />
        <Projects />
        <Journey />
        <Contact />
        <Footer />
      </div>

    </main>
  );
}

export default App;
