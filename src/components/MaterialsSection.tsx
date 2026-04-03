const materials = [
  { name: "Metalizado", description: "Acabamento brilhante e sofisticado" },
  { name: "Transparente", description: "Ideal para embalagens coloridas" },
  { name: "Fosco", description: "Elegância discreta e profissional" },
  { name: "Brilho", description: "Vibrante e chamativo" },
];

const finishes = [
  { name: "Verniz", description: "Proteção e brilho extra" },
  { name: "Verniz Localizado", description: "Destaque em áreas específicas" },
  { name: "Laminação Fosca", description: "Proteção elegante sem brilho" },
  { name: "Laminação Brilho", description: "Alta proteção com brilho intenso" },
];

export default function MaterialsSection() {
  return (
    <section id="materiais" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Materiais e Acabamentos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diferenciais que valorizam seus rótulos e etiquetas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Materials */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </span>
              Tipos de Material
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {materials.map((material, idx) => (
                <div key={idx} className="p-4 md:p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-[var(--primary)] mb-1 text-sm md:text-base">{material.name}</h4>
                  <p className="text-xs md:text-sm text-gray-600">{material.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Finishes */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </span>
              Acabamentos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {finishes.map((finish, idx) => (
                <div key={idx} className="p-4 md:p-5 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                  <h4 className="font-bold text-[var(--secondary)] mb-1 text-sm md:text-base">{finish.name}</h4>
                  <p className="text-xs md:text-sm text-gray-600">{finish.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
