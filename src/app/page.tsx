"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import ProductsCarousel from "@/components/ProductsCarousel";
import MaterialsSection from "@/components/MaterialsSection";
import Segments from "@/components/Segments";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logos/brcolor-logo-large.png"
              alt="BRColor Gráfica"
              width={150}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#produtos" className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium">
              Produtos
            </a>
            <a href="#materiais" className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium">
              Materiais
            </a>
            <a href="#contato" className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium">
              Contato
            </a>
          </nav>
          <a
            href="https://wa.me/5517991953385"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-primary text-white px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <Hero />
      <ProductsCarousel />
      <MaterialsSection />
      <Segments />
      <Contact />

      {/* Info Bar */}
      <section className="gradient-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Telefone</h3>
              <p className="text-white/90">(17) 99195-3385</p>
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
                href="https://maps.google.com/?q=Rua+Pará,+590+-+Vila+Ipiranga,+São+José+do+Rio+Preto+-+SP,+15055-050"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white hover:underline transition-all block"
              >
                Rua Pará, 590 - Vila Ipiranga
              </a>
              <p className="text-white/80 text-sm">São José do Rio Preto - SP</p>
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
