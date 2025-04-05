
"use client"

import DouglasProfileFoto from "../assets/douglas.profile.jpeg"
import { useState } from "react";


export default function Config() {

    const [nome, setNome] = useState("Douglas Gonçalves");
    const [email, setEmail] = useState("teste@email.com");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");





    return (
        <div className="w-full h-[900px] p-6 bg-white rounded-xl shadow ">
            <h2 className="text-xl font-semibold text-indigo-700 pb-10"> Meu Perfil</h2>
            <div className="w-full flex ">
                <img className="gap-10 h-full w-3xs rounded-full pb-1.5 " src={DouglasProfileFoto.src} alt="foto de perfil" />
                <button className="text-sm px-4 mt-82 m-18 py-2 absolute bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
                Alterar Foto
                </button>
                <form className="flex-1 pl-10 space-y-4">
                    <div>
                        <label className="block border-0 text-sm mb-1 text-indigo-700"> Nome completo: </label>
                        <input
                        type="text"
                        value={nome}
                        className="w-82 p-2 rounded bg-indigo-400 text-black"
                        onChange={(e) => setNome(e.target.value)}
                        />

                    </div>
                    <div>
                        <label className="block text-sm mb-1 text-indigo-700"> Email: </label>
                        <input
                        type="text"
                        value={email}
                        className="w-82 p-2 rounded bg-indigo-400 text-black"
                        onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>
                    <div>
                        <label className="block text-sm mb-1 text-indigo-700"> Senha: </label>
                        <input
                        type="text"
                        value={senha}
                        className="w-82 p-2 rounded bg-indigo-400 text-black"
                        onChange={(e) => setSenha(e.target.value)}
                        />

                    </div>
                    <div>
                        <label className="block text-sm mb-1 text-indigo-700"> Confirma Nova Senha: </label>
                        <input
                        type="text"
                        value={confirmaSenha}
                        className="w-82 p-2 rounded bg-indigo-400 text-black"
                        onChange={(e) => setConfirmaSenha(e.target.value)}
                        />

                    </div>
                </form>
               
        


            </div>
        </div>
    )
};
