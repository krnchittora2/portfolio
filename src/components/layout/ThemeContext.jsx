import React, { createContext, useState, useContext, useEffect } from "react";

import Loader from "./Loader";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  // Loading Mask
  useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);
  if (loading) return <Loader />;

  //Toggle Dark Mode
  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

