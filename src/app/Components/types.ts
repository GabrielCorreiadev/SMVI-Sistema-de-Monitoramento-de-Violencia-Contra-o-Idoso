// types.ts

import { StaticImageData } from "next/image";
import { ReactNode } from "react";

// Estado do sidebar (aberto ou fechado)
export type SidebarState = boolean;

// Imagem de perfil (formato usado pelo next/image)
export type ProfileImage = StaticImageData;

// Link da sidebar ou navegação geral
export type NavLink = {
  href: string;       // Ex: "/dashboard"
  label: string;      // Ex: "Dashboard"
  icon: ReactNode;   // Ícone (componente React como <Home />)
};

// Tipagem do formulário de denúncia
export interface FormDenunciaData {
  nomeVitima: string;
  idade: string;
  bairro: string;
  tipo: string;
  nomeAgressor: string;
  sexoAgressor: string;
  data: string;
  grauDenuncia: string;
}
