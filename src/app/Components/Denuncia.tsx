"use client"

import { ShieldAlert } from 'lucide-react';

const CardDenuncia = () => (
    <div className="relative flex flex-col gap-4 rounded-xl bg-indigo-700 p-6 shadow-lg outline outline-black/5 
                dark:bg-indigo-500 dark:shadow-none dark:-outline-offset-1 dark:outline-white/5">
      
      <div className="flex items-center gap-x-4">
        <ShieldAlert className="h-8 w-8 text-sky-50" />
        <div>
          <div className="text-xl font-medium text-white">Denúncia Registrada</div>
          <p className="text-indigo-100 dark:text-gray-300">Uma nova denúncia foi cadastrada</p>
        </div>
  
        <select className="ml-auto bg-yellow-300 text-black font-semibold px-3 py-1 rounded-md text-sm cursor-pointer focus:outline-none">
          <option value="baixo">Grau: Baixo</option>
          <option value="medio">Grau: Médio</option>
          <option value="alto">Grau: Alto</option>
        </select>
      </div>
  
      <div className="flex flex-wrap gap-2">
        <span className="bg-white text-indigo-700 font-semibold px-3 py-1 rounded-md text-sm cursor-pointer hover:bg-indigo-100 transition">Editar</span>
        <span className="bg-white text-indigo-700 font-semibold px-3 py-1 rounded-md text-sm cursor-pointer hover:bg-indigo-100 transition">Visualizar</span>
        <span className="bg-white text-indigo-700 font-semibold px-3 py-1 rounded-md text-sm cursor-pointer hover:bg-indigo-100 transition">Resolvido</span>
      </div>
    </div>
  );
  

export default function Denuncia() {
  return (
    <div className="space-y-4">
        {[...Array(8)].map((_,index)=>(
            <CardDenuncia key={index} />
        ))}
      
      
    </div>
  );
}