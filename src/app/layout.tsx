// src/app/layout.tsx
import "./styles/globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import React from "react";

export const metadata = {
  title: "Vacinas no Brasil",
  description: "Informações atualizadas sobre vacinação no Brasil",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
