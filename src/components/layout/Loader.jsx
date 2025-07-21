// components/Loader.jsx
import React, { useEffect, useState } from "react";

const terminalLines = [
  "Initializing developer portfolio...",
  "Compiling components...",
  "Finalizing dark mode...",
  "Almost there..."
];

export default function Loader() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < terminalLines.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, terminalLines[lineIndex]]);
        setLineIndex((prev) => prev + 1);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [lineIndex]);

  return (
    <main className="min-h-screen bg-black text-green-400 font-mono flex flex-col justify-center items-center px-6 py-12">
      <div className="w-full max-w-2xl">
        {displayedLines.map((line, i) => (
          <div key={i} className="animate-fadeIn">{line}</div>
        ))}
        {lineIndex >= terminalLines.length ? (
          <div className="mt-2">Ready. <span className="animate-pulse">▌</span></div>
        ) : (
          <div className="mt-2"> <span className="animate-pulse">▌</span></div>
        )}
      </div>
    </main>
  );
}
