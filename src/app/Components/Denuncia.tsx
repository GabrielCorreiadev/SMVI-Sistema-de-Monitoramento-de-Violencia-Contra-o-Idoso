"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { ShieldAlert } from "lucide-react";

type Denuncia = {
  id: number;
  nomeVitima: string;
  idade: number;
  bairro: string;
  tipo: string;
  nomeAgressor: string;
  sexoAgressor: string;
  data: string;
  grauDenuncia: string;
};

const CardDenuncia = ({ denuncia }: { denuncia: Denuncia }) => (
  <div className="relative flex flex-col gap-4 rounded-xl bg-indigo-700 p-6 shadow-lg outline outline-black/5 
              dark:bg-indigo-500 dark:shadow-none dark:-outline-offset-1 dark:outline-white/5">
    
    <div className="flex items-center gap-x-4">
      <ShieldAlert className="h-8 w-8 text-sky-50" />
      <div>
        <div className="text-xl font-medium text-white">{denuncia.nomeVitima}</div>
        <p className="text-indigo-100 dark:text-gray-300">
          {denuncia.tipo} no bairro {denuncia.bairro}
        </p>
      </div>

      {/* Texto fixo do grau */}
      <span className="ml-auto bg-yellow-300 text-black font-semibold px-3 py-1 rounded-md text-sm">
        Grau: {denuncia.grauDenuncia}
      </span>
    </div>

    <div className="flex flex-wrap gap-2">
      <span className="bg-white text-indigo-700 font-semibold px-3 py-1 rounded-md text-sm cursor-pointer hover:bg-indigo-100 transition">Editar</span>
      <span className="bg-white text-indigo-700 font-semibold px-3 py-1 rounded-md text-sm cursor-pointer hover:bg-indigo-100 transition">Visualizar</span>
      <span className="bg-white text-indigo-700 font-semibold px-3 py-1 rounded-md text-sm cursor-pointer hover:bg-indigo-100 transition">Resolvido</span>
    </div>
  </div>
);

export default function Denuncia() {
  const [denuncias, setDenuncias] = useState<Denuncia[]>([]);

  useEffect(() => {
    const fetchDenuncias = async () => {
      try {
        const res = await axios.get("http://localhost:3001/denuncias");
        setDenuncias(res.data);
      } catch (error) {
        console.error("Erro ao buscar denúncias:", error);
      }
    };

    fetchDenuncias();
  }, []);

  return (
    <div className="space-y-4">
      {denuncias.map((denuncia) => (
        <CardDenuncia key={denuncia.id} denuncia={denuncia} />
      ))}
    </div>
  );
}
