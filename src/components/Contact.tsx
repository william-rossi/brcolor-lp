"use client";

import { useState } from "react";

const productTypes = [
  { value: "rotulos-personalizados", label: "Rótulos Personalizados" },
  { value: "etiquetas-brancas", label: "Etiquetas Brancas" },
  { value: "etiquetas-delivery", label: "Etiquetas para Delivery" },
  { value: "lacres-seguranca", label: "Lacres de Segurança" },
  { value: "ribbons", label: "Ribbons" },
  { value: "outros", label: "Outros (especificar na descrição)" },
];

const materialTypes = [
  { value: "metalizado", label: "Metalizado" },
  { value: "transparente", label: "Transparente" },
  { value: "fosco", label: "Fosco" },
  { value: "brilho", label: "Brilho" },
  { value: "nao-sei", label: "Não sei qual escolher" },
  { value: "outro", label: "Outro (especificar na descrição)" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    productType: "",
    material: "",
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const productLabel = productTypes.find(p => p.value === formData.productType)?.label || formData.productType;
    const materialLabel = materialTypes.find(m => m.value === formData.material)?.label || formData.material || "Não informado";
    
    const message = encodeURIComponent(
      `*Novo Orçamento - BR Color*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Produto:* ${productLabel}\n` +
      `*Material:* ${materialLabel}` +
      (formData.description ? `\n\n${formData.description}` : "")
    );
    
    window.open(`https://wa.me/5517991953385?text=${message}`, "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Solicite um Orçamento
          </h2>
          <p className="text-xl text-gray-600">
            Escolha a forma mais conveniente para você
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Opção 1: WhatsApp Direto */}
          <div className="lg:col-span-2 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5L2 22l5-1.35A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.22-.53-4.5-1.44l-.32-.23-3.08.83.83-3.08-.23-.32A7.93 7.93 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.54-6.24c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.96-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.38-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43l-.48-.01c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.19 3.7.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.28z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">Fale Conosco</h3>
                <p className="text-xs md:text-sm text-green-600 font-medium">Estamos prontos para atender!</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 flex-1">
              Clique abaixo e fale direto conosco pelo WhatsApp. 
              É a forma mais rápida de tirar suas dúvidas e fazer seu pedido.
            </p>

            <div className="space-y-3">
              <a
                href="https://wa.me/5517991953385"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white px-4 md:px-6 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-colors shadow-lg shadow-green-500/25 flex items-center justify-center whitespace-nowrap"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          {/* Divisor */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-px h-full bg-gray-200 relative">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-400 text-sm font-medium">
                OU
              </span>
            </div>
          </div>

          <div className="lg:hidden text-center">
            <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-gray-500 text-sm font-medium">
              OU PREENCHA O FORMULÁRIO
            </span>
          </div>

          {/* Opção 2: Formulário */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Preencha para enviar detalhes
              </h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all text-sm"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-1">
                    Produto de Interesse *
                  </label>
                  <select
                    id="productType"
                    name="productType"
                    required
                    value={formData.productType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all bg-white text-sm"
                  >
                    <option value="">Selecione...</option>
                    {productTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="material" className="block text-sm font-medium text-gray-700 mb-1">
                    Material
                  </label>
                  <select
                    id="material"
                    name="material"
                    value={formData.material}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all bg-white text-sm"
                  >
                    <option value="">Selecione...</option>
                    {materialTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all resize-none text-sm"
                    placeholder="Descreva seu pedido..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gradient-primary text-white px-6 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5L2 22l5-1.35A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.22-.53-4.5-1.44l-.32-.23-3.08.83.83-3.08-.23-.32A7.93 7.93 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.54-6.24c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.96-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.38-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43l-.48-.01c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.19 3.7.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.28z"/>
                  </svg>
                  Enviar pelo WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
