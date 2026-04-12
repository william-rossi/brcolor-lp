import Image from "next/image";

export default function QuemSomos() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-light)] to-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quem Somos
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Conheça a BR Color Gráfica, sua parceira em soluções de rótulos e etiquetas
            </p>
          </div>
        </div>
      </section>

      {/* Sobre a Empresa */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                Tradição e Qualidade
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A BR Color Gráfica é uma empresa especializada na fabricação de rótulos e etiquetas adesivas, 
                com mais de 5 anos no mercado atuando em São José do Rio Preto e região com excelência e comprometimento.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Nossa missão é fornecer soluções personalizadas em etiquetas para empresas de todos os 
                segmentos, desde pequenos empreendedores até grandes indústrias. Com tecnologia de ponta 
                em impressão digital e flexografia, entregamos produtos de alta qualidade com agilidade.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Acreditamos que uma boa etiqueta é o cartão de visitas do seu produto. Por isso, 
                trabalhamos com dedicação para que cada cliente tenha a melhor identificação visual 
                para sua marca.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/company/company-1.jpg"
                alt="Fachada BR Color Gráfica"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-gray-600">
              Por que escolher a BR Color Gráfica?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Qualidade Garantida</h3>
              <p className="text-gray-600">
                Utilizamos materiais de primeira linha e tecnologia avançada para garantir 
                a melhor qualidade em cada etiqueta produzida.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Entrega Rápida</h3>
              <p className="text-gray-600">
                Entendemos a importância do prazo. Trabalhamos com agilidade para entregar 
                seus pedidos no menor tempo possível.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Atendimento Personalizado</h3>
              <p className="text-gray-600">
                Cada cliente é único. Oferecemos consultoria especializada para ajudar 
                a escolher a melhor solução para sua necessidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Informações */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Horário de Funcionamento</h3>
                <p className="text-gray-600 mb-2">Segunda a Sexta-feira</p>
                <p className="text-xl font-semibold text-[var(--primary)]">
                  07:30–12:00, 13:30–18:00
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Localização</h3>
                <a 
                  href="https://maps.google.com/?q=R.+da+Trindade,+520+-+Vila+Ideal,+São+José+do+Rio+Preto+-+SP,+15060-280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[var(--primary)] transition-colors"
                >
                  R. da Trindade, 520 - Vila Ideal
                </a>
                <p className="text-gray-500 text-sm mt-1">São José do Rio Preto - SP, 15060-280</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Solicite um orçamento e descubra como podemos ajudar sua empresa.
          </p>
          <a
            href="/#contato"
            className="inline-block bg-white text-[var(--primary)] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>
    </main>
  );
}
