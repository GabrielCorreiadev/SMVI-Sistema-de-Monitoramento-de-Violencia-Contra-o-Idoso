
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title:  "Sistema de Monitoramento   ",
  description: "Monitoramento de Violência Contra o Idoso",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>SMVI - Monitoramento de Violência Contra o Idoso</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="shield-alert.png"/>
      </head>
      <body className="bg-gray-100 text-gray-900">
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
