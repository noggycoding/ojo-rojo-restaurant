import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "Ojo Rojo Japanese Cuisine | Mexicali, B.C.",
  description: "Auténtica experiencia japonesa en Mexicali. Sushi, rollos, tiraditos y más. Ingredientes frescos y preparación tradicional.",
  keywords: "sushi, restaurante japonés, Mexicali, comida japonesa, rollos, tiraditos, ceviches",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
