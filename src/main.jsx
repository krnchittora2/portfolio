import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App.jsx';
import Psych from "./components/Psych.jsx"; 
import { ThemeProvider } from "./components/layout/ThemeContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/portfolio" element={<App />} />
          <Route path="*" element={<Psych />} />
          <Route path="/psych" element={<Psych />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
