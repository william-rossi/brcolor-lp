"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Rótulos e Etiquetas Personalizadas",
    description: "Etiquetas sob medida para sua marca, com design exclusivo e acabamento profissional.",
    image: "/images/products/etiqueta-1.png",
    features: ["Personalização completa", "Vários tamanhos", "Alta definição"],
  },
  {
    id: 2,
    title: "Etiquetas Brancas",
    description: "Etiquetas brancas de alta qualidade para impressão térmica e transferência.",
    image: "/images/products/etiqueta-2.png",
    features: ["Adesivo permanente", "Resistente à umidade", "Compatível com várias impressoras"],
  },
  {
    id: 3,
    title: "Etiquetas para Delivery",
    description: "Etiquetas específicas para embalagens de delivery, resistentes e práticas.",
    image: "/images/products/etiqueta-3.png",
    features: ["Resistente à gordura", "Adesivo forte", "Impressão rápida"],
  },
  {
    id: 4,
    title: "Etiquetas Lacre",
    description: "Lacres invioláveis para garantir a segurança de seus produtos e embalagens.",
    image: "/images/products/etiqueta-1.png",
    features: ["Violeta inviolável", "Númeração sequencial", "Rasga fácil"],
  },
  {
    id: 5,
    title: "Ribbons",
    description: "Suprimentos de qualidade para impressão térmica de transferência.",
    image: "/images/products/etiqueta-2.png",
    features: ["Cera, Resina e Misto", "Alta durabilidade", "Várias larguras"],
  },
  {
    id: 6,
    title: "Impressão em Blister Alumínio",
    description: "Embalagens blister em alumínio para medicamentos e produtos farmacêuticos.",
    image: "/images/products/etiqueta-3.png",
    features: ["Proteção contra umidade", "Selagem térmica", "Conformidade ANVISA"],
  },
  {
    id: 7,
    title: "Etiquetas para Joias",
    description: "Etiquetas delicadas e elegantes para identificação de joias e bijuterias.",
    image: "/images/products/etiqueta-1.png",
    features: ["Tamanho reduzido", "Adesivo seguro", "Acabamento premium"],
  },
  {
    id: 8,
    title: "Etiquetas para E-commerce",
    description: "Soluções completas para lojas virtuais e marketplaces.",
    image: "/images/products/etiqueta-2.png",
    features: ["Impressão de código de barras", "Resistente à fricção", "Etiqueta de envio"],
  },
];

export default function ProductsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Nossos Produtos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em etiquetas e rótulos para sua empresa
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {products.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-56 md:h-80 bg-gray-50">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-10 flex flex-col justify-center bg-white">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                            <span className="w-1.5 h-1.5 bg-[var(--secondary)] rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 hover:border-gray-300 rounded-full flex items-center justify-center transition-colors"
            aria-label="Produto anterior"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 hover:border-gray-300 rounded-full flex items-center justify-center transition-colors"
            aria-label="Próximo produto"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center gap-1.5 mt-4">
            {products.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentSlide ? "bg-[var(--primary)] w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
