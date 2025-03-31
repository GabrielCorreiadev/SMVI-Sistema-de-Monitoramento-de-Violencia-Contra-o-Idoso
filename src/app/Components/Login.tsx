"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";
import Dashboard from "../Components/Dashboard";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validEmail = "teste@email.com";
  const validPassword = "123456";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (email === validEmail && password === validPassword) {
        setIsLoggedIn(true);
      } else {
        setError("E-mail ou senha incorretos!");
        setLoading(false);
      }
    }, 1200);
  };

  if (isLoggedIn) return <Dashboard />;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-gray-800 bg-opacity-80 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-full max-w-md border border-blue-500/20"
      >
        <div className="absolute inset-0 bg-blue-500 opacity-10 blur-2xl rounded-2xl pointer-events-none" />

        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Bem-vindo de volta 👋
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 text-sm mb-1">E-mail</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 bg-opacity-50 text-white outline-none hover:bg-gray-600 focus:ring-2 focus:ring-blue-500 transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">Senha</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 bg-opacity-50 text-white outline-none hover:bg-gray-600 focus:ring-2 focus:ring-blue-500 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center -mt-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-blue-600 hover:bg-blue-700 transition-all rounded-lg text-white font-semibold shadow-lg flex items-center justify-center gap-2 active:scale-95"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" /> Entrando...
              </>
            ) : (
              "Entrar"
            )}
          </button>

          <div className="text-center mt-2">
            <p className="text-sm text-gray-300">
              Esqueceu a senha?{" "}
              <span className="text-blue-400 hover:underline cursor-pointer">
                Clique aqui
              </span>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
