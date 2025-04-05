"use client";

import { useState } from "react";

export default function FormDenuncia() {
  const [form, setForm] = useState({
    nomeVitima: "",
    idade: "",
    bairro: "",
    tipo: "",
    nomeAgressor: "",
    sexoAgressor: "",
    data: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", form);
    alert("Denúncia registrada com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow w-full">
      <h2 className="text-xl font-semibold text-indigo-700">Nova Denúncia</h2>

      <div>
        <label className="block text-sm">Nome da vítima</label>
        <input
          type="text"
          name="nomeVitima"
          value={form.nomeVitima}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm">Idade</label>
          <input
            type="number"
            name="idade"
            value={form.idade}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm">Bairro</label>
          <input
            type="text"
            name="bairro"
            value={form.bairro}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm">Tipo de agressão</label>
        <select
          name="tipo"
          value={form.tipo}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Selecione...</option>
          <option value="física">Física</option>
          <option value="psicológica">Psicológica</option>
          <option value="financeira">Financeira</option>
          <option value="abandono">Abandono</option>
          <option value="negligência">Negligência</option>
        </select>
      </div>

      <div>
        <label className="block text-sm">Nome do agressor</label>
        <input
          type="text"
          name="nomeAgressor"
          value={form.nomeAgressor}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm">Sexo do agressor</label>
          <select
            name="sexoAgressor"
            value={form.sexoAgressor}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Selecione...</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div>
          <label className="block text-sm">Data da denúncia</label>
          <input
            type="date"
            name="data"
            value={form.data}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Registrar denúncia
      </button>
    </form>
  );
}
