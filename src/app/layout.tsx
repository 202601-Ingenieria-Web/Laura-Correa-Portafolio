import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hoja de vida | Portafolio",
  description: "Hoja de vida personal desarrollada con Next.js, React, TypeScript y TailwindCSS.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
