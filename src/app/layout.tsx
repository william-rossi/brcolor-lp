import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRColor Gráfica - Rótulos e Etiquetas Adesivas em São José do Rio Preto",
  description: "Fabricante de rótulos e etiquetas adesivas em São José do Rio Preto. Pequenas e grandes tiragens, digital e flexografia. Etiquetas personalizadas, lacres de segurança, ribbons e mais!",
  keywords: ["rótulos", "etiquetas", "adesivas", "gráfica", "São José do Rio Preto", "flexografia", "digital", "lacres", "ribbons", "etiquetas personalizadas"],
  authors: [{ name: "BRColor Gráfica" }],
  creator: "BRColor Gráfica",
  publisher: "BRColor Gráfica",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "BRColor Gráfica - Rótulos e Etiquetas Adesivas",
    description: "Fabricante de rótulos e etiquetas adesivas. Pequenas e grandes tiragens, digital e flexografia.",
    url: "https://brcolorgrafica.com.br",
    siteName: "BRColor Gráfica",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BRColor Gráfica - Rótulos e Etiquetas Adesivas",
    description: "Fabricante de rótulos e etiquetas adesivas em São José do Rio Preto",
  },
  alternates: {
    canonical: "https://brcolorgrafica.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
