"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.11, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-gray-800 bg-opacity-80 backdrop-blur-lg p-10 rounded-xl shadow-2xl w-96 border border-blue-500/20"
      >
        {/* Efeito sutil de brilho na borda */}
        <div className="absolute inset-0 bg-blue-500 opacity-10 blur-xl rounded-xl pointer-events-none"></div>


        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Bem-vindo de volta
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 text-sm mb-1 ">E-mail</label>
            <input
              type="email"
               className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 bg-opacity-50 text-white outline-none hover:bg-gray-600 hover:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:bg-gray-700 transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-1">Senha</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg hover:bg-gray-600 hover:border-blue-500 bg-gray-700 bg-opacity-50 text-white outline-none border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 hover:bg-blue-700 transition-all rounded-lg text-white font-semibold shadow-lg active:scale-95 transform"
          >
            Entrar
          </button>
          <div className="flex items-center gap-3">
          <p className="text-sm text-white">Esqueceu a senha?</p>
          <p className="text-sm text-blue-500 cursor-pointer hover:underline">Clique aqui</p>
          </div>

        </form>
      </motion.div>
    </div>
    
  );
}
