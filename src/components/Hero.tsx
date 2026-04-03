"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-light)] to-[var(--secondary)] opacity-95" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Fabricante de Rótulos e<br />Etiquetas Adesivas
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow">
            Pequenas e grandes tiragens • Digital e Flexografia
          </p>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Etiquetas personalizadas para todos os segmentos. Qualidade profissional com entrega rápida em São José do Rio Preto e região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contato"
              className="bg-white text-[var(--primary)] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Solicitar Orçamento
            </a>
            <a
              href="#produtos"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Ver Produtos
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
