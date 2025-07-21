import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function Psych() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-purple-900 to-gray-900 text-white text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
        className="bg-gray-800 p-10 rounded-3xl shadow-xl space-y-6 max-w-lg"
      >
        <div className="flex items-center justify-center text-red-400">
          <AlertCircle size={48} />
        </div>
        <h1 className="text-5xl font-extrabold text-teal-400">Psych!!</h1>
        <p className="text-gray-300 text-lg">
          You just fell into my trap! 😄
        </p>
        <motion.button
          onClick={() => navigate("/")}
          className="mt-6 inline-flex px-6 py-2 bg-teal-600 hover:bg-teal-700 rounded-full text-white items-center gap-2 transition"
        >
          <ArrowLeft size={18} /> Back to Home
        </motion.button>
      </motion.div>
    </main>
  );
}
