"use client";

import { Shield } from 'lucide-react';
import { motion } from "framer-motion";


export default function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: -50 }} // Começa invisível e sobe
        animate={{ opacity: 1, y: 0 }} // Fica visível e desce suavemente
        transition={{ duration: 1.5, ease: "easeOut" }} // Suavização
        className="text-9xl font-extrabold text-white flex items-center gap-4"
      >
        <Shield className="h-24 w-24" /> SMVI
      </motion.h1>
    </div>
  );
}