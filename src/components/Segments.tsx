import { Apple, Pill, Sparkles, Wine, Droplets, Plus } from "lucide-react";

const segments = [
  { name: "Alimentos", icon: Apple, color: "bg-orange-100 text-orange-600" },
  { name: "Indústria Farmacêutica", icon: Pill, color: "bg-blue-100 text-blue-600" },
  { name: "Cosméticos", icon: Sparkles, color: "bg-pink-100 text-pink-600" },
  { name: "Bebidas", icon: Wine, color: "bg-cyan-100 text-cyan-600" },
  { name: "Produtos de Limpeza", icon: Droplets, color: "bg-green-100 text-green-600" },
  { name: "Entre outros", icon: Plus, color: "bg-gray-100 text-gray-600" },
];

export default function Segments() {
  return (
    <section id="segmentos" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Segmentos Atendidos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre a solução perfeita para personalizar seus produtos. Atendemos diversos segmentos com qualidade e excelência.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {segments.map((segment, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-center">
              <div className={`w-12 h-12 ${segment.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <segment.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-800 text-sm">{segment.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
