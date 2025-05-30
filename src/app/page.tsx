"use client";

import { Shield } from 'lucide-react';
import { motion } from "framer-motion";
import { useState, useEffect} from "react"
import Login from './Components/Login';

export default function Homepage() {

  const [showLogin, setShowLogin] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);   

      setTimeout(() => {
        setShowLogin(true);
      }, 1500); 
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if(showLogin){
    return <Login />;
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: -50 }} // Começa invisível e sobe
        animate={isExiting ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }} 
        transition={{ duration: 2.5, ease: "easeOut" }} 
        className="text-5xl sm:text-6xl md:text-9xl font-extrabold text-white flex items-center gap-4"
      >
        <Shield className="h-24 w-24 sm:h-28 sm:w-28 md:h-40 md:w-40" /> SMVI
      </motion.h1>
    </div>
  );
}