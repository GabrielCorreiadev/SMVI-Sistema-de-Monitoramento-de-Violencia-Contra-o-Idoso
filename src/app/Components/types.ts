// types.ts

import { StaticImageData } from "next/image"; // Importando o tipo correto

// Tipo para a visibilidade do sidebar
export type SidebarState = boolean;

// Tipo para a imagem de perfil
export type ProfileImage = StaticImageData; // Atualizando para StaticImageData

// Tipo para um link de navegação
export type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode; // Pode ser qualquer componente de ícone
};
