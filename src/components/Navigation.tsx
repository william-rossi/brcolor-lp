"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logos/brcolor-logo-large.png"
            alt="BRColor Gráfica"
            width={150}
            height={50}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/#produtos" className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium">
            Produtos
          </a>
          <a href="/#materiais" className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium">
            Materiais
          </a>
          <a href="/#quem-somos" className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium">
            Quem somos
          </a>
          <a href="/#contato" className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium">
            Contato
          </a>
        </nav>

        {/* WhatsApp Button Desktop */}
        <a
          href="https://wa.me/5517991953385"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block gradient-primary text-white px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
        >
          WhatsApp
        </a>

        {/* Mobile: WhatsApp + Burger */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="https://wa.me/5517991953385"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-primary text-white px-4 py-2 rounded-full font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
          >
            WhatsApp
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            <a 
              href="/#produtos" 
              className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </a>
            <a 
              href="/#materiais" 
              className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Materiais
            </a>
            <a 
              href="/#quem-somos" 
              className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Quem Somos
            </a>
            <a 
              href="/#contato" 
              className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
