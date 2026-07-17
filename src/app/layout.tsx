import type { Metadata, Viewport } from "next";
import { Jost, Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Matches infiniah.tech: Jost for display headings, Geist for body/UI.
// Both are variable fonts — no explicit weights needed.
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clínica Forza - Dr. Bruno Galdino",
  description:
    "Especializada em emagrecimento, estilo de vida, esporte e performance. Agende sua consulta com o Dr. Bruno Galdino, médico formado pela UFMG.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jost.variable} ${geist.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
