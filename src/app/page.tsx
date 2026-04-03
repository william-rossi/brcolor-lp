"use client";

import Hero from "@/components/Hero";
import ProductsCarousel from "@/components/ProductsCarousel";
import MaterialsSection from "@/components/MaterialsSection";
import Segments from "@/components/Segments";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      <ProductsCarousel />
      <MaterialsSection />
      <Segments />

      {/* Quem Somos - Seção Resumida */}
      <section id="quem-somos" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Quem Somos
          </h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            A BRColor Gráfica é uma empresa especializada na fabricação de rótulos e etiquetas adesivas, 
            com mais de 5 anos no mercado atuando em São José do Rio Preto e região com excelência e comprometimento.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Nossa missão é fornecer soluções personalizadas em etiquetas para empresas de todos os 
            segmentos, desde pequenos empreendedores até grandes indústrias.
          </p>
          <a 
            href="/quem-somos"
            className="inline-block gradient-primary text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg"
          >
            Conheça Nossa História
          </a>
        </div>
      </section>

      <Contact />

      {/* Info Bar */}
      <section className="gradient-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Telefone</h3>
              <a 
                href="tel:+5517991953385"
                className="text-white/90 hover:text-white hover:underline transition-all"
              >
                (17) 99195-3385
              </a>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Endereço</h3>
              <a 
                href="https://maps.google.com/?q=R.+da+Trindade,+520+-+Vila+Ideal,+São+José+do+Rio+Preto+-+SP,+15060-280"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white hover:underline transition-all block"
              >
                R. da Trindade, 520 - Vila Ideal
              </a>
              <p className="text-white/80 text-sm">São José do Rio Preto - SP, 15060-280</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Atendimento</h3>
              <p className="text-white/90">Segunda a Sexta</p>
              <p className="text-white/80 text-sm">07:30–12:00, 13:30–18:00</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Quem Somos</h3>
              <a 
                href="/quem-somos"
                className="text-white/90 hover:text-white hover:underline transition-all"
              >
                Conheça nossa história
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
