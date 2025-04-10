"use client"

import { useState } from "react";
import DouglasProfileFoto from "../assets/douglas.profile.jpeg";

export default function ConfigConta() {
  const [nome, setNome] = useState("douglas gonçalves");
  const [email, setEmail] = useState("teste@email.com");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="space-y-3 bg-white p-6 rounded-xl shadow w-full">
        <h2 className="text-xl font-semibold text-indigo-700 pb-10 text-center">Meu Perfil</h2>

        <div className="w-full flex flex-col items-center gap-6">
          <img
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover"
            src={DouglasProfileFoto.src}
            alt="foto de perfil"
          />

          <button className="text-sm px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
            Alterar Foto
          </button>

          <form className="w-full max-w-xs sm:w-65 md:w-75 lg:w-75 flex flex-col space-y-4">
            <div>
              <label className="block text-sm mb-1 text-indigo-700">Nome completo:</label>
              <input
                type="text"
                value={nome}
                className="w-full p-2 rounded bg-indigo-400 text-black"
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-indigo-700">Email:</label>
              <input
                type="text"
                value={email}
                className="w-full p-2 rounded bg-indigo-400 text-black"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-indigo-700">Senha:</label>
              <input
                type="text"
                value={senha}
                className="w-full p-2 rounded bg-indigo-400 text-black"
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-indigo-700">Confirma Nova Senha:</label>
              <input
                type="text"
                value={confirmaSenha}
                className="w-full p-2 rounded bg-indigo-400 text-black"
                onChange={(e) => setConfirmaSenha(e.target.value)}
              />
            </div>
          </form>

          <button className="text-sm px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
            Salvar alterações
          </button>
        </div>
      </div>
    </div>
  );
}
