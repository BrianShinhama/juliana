"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, CheckCircle } from "lucide-react";

export default function FAQ() {
  const perguntas = [
    {
      q: "As vacinas são seguras?",
      a: "Sim! As vacinas passam por rigorosos testes clínicos em múltiplas fases antes de serem aprovadas. São monitoradas continuamente após a aprovação para garantir sua segurança e eficácia.",
      categoria: "Segurança"
    },
    {
      q: "Posso ter efeitos colaterais?",
      a: "Sim, é possível ter efeitos colaterais leves como dor no braço, febre baixa ou fadiga. Esses sintomas são passageiros e indicam que o sistema imunológico está respondendo à vacina. Efeitos graves são extremamente raros.",
      categoria: "Efeitos"
    },
    {
      q: "As vacinas são gratuitas?",
      a: "Sim! Todas as vacinas do calendário nacional do SUS são totalmente gratuitas para todos os brasileiros. O Brasil possui um dos maiores programas públicos de imunização do mundo.",
      categoria: "Acesso"
    },
    {
      q: "Quem pode se vacinar?",
      a: "A maioria das pessoas pode e deve se vacinar. Existem calendários específicos para bebês, crianças, adolescentes, adultos, idosos e gestantes. Apenas algumas condições de saúde específicas podem contraindicar certas vacinas.",
      categoria: "Elegibilidade"
    },
    {
      q: "Por que as crianças precisam de tantas vacinas?",
      a: "As crianças têm sistemas imunológicos em desenvolvimento e são mais vulneráveis a doenças graves. O calendário vacinal infantil protege contra as doenças mais perigosas nessa fase da vida, quando o risco de complicações é maior.",
      categoria: "Infantil"
    },
    {
      q: "Posso tomar várias vacinas no mesmo dia?",
      a: "Sim! É seguro e recomendado tomar múltiplas vacinas no mesmo dia, quando indicado. O sistema imunológico é capaz de responder a várias vacinas simultaneamente sem problemas.",
      categoria: "Administração"
    },
    {
      q: "As vacinas causam autismo?",
      a: "Não! Diversos estudos científicos comprovaram que não há nenhuma relação entre vacinas e autismo. Essa informação falsa foi baseada em um estudo fraudulento que foi completamente desmentido.",
      categoria: "Mitos"
    },
    {
      q: "Preciso me vacinar se já tive a doença?",
      a: "Depende da doença. Para algumas doenças, a imunidade natural pode ser suficiente, mas para outras a vacinação ainda é recomendada. Consulte um profissional de saúde para orientação específica.",
      categoria: "Imunidade"
    }
  ];

  const [aberta, setAberta] = useState<number | null>(null);
  const [filtroCategoria, setFiltroCategoria] = useState<string | null>(null);

  const categorias = [...new Set(perguntas.map(p => p.categoria))];
  
  const perguntasFiltradas = filtroCategoria 
    ? perguntas.filter(p => p.categoria === filtroCategoria)
    : perguntas;

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-block p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg mb-4">
          <HelpCircle className="h-16 w-16 text-white" />
        </div>
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Perguntas Frequentes
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Tire suas dúvidas sobre vacinação com respostas baseadas em evidências científicas.
        </p>
      </div>

      {/* Filtros de Categoria */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setFiltroCategoria(null)}
          className={`px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 ${
            filtroCategoria === null
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
          }`}
        >
          Todas
        </button>
        {categorias.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setFiltroCategoria(cat)}
            className={`px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 ${
              filtroCategoria === cat
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion de Perguntas */}
      <div className="max-w-4xl mx-auto space-y-4">
        {perguntasFiltradas.map((p, i) => {
          const isOpen = aberta === i;
          
          return (
            <div
              key={i}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 border-2 ${
                isOpen 
                  ? 'border-blue-500 shadow-xl' 
                  : 'border-transparent hover:border-blue-300 hover:shadow-xl'
              }`}
            >
              <button
                onClick={() => setAberta(isOpen ? null : i)}
                className="w-full p-6 flex items-start justify-between text-left group"
              >
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`p-2 rounded-lg transition-all ${
                    isOpen 
                      ? 'bg-gradient-to-br from-blue-500 to-purple-500' 
                      : 'bg-gray-100 group-hover:bg-blue-100'
                  }`}>
                    {isOpen ? (
                      <CheckCircle className="h-6 w-6 text-white" />
                    ) : (
                      <HelpCircle className="h-6 w-6 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                        {p.categoria}
                      </span>
                    </div>
                    <p className="font-bold text-lg text-gray-800 group-hover:text-blue-700 transition-colors">
                      {p.q}
                    </p>
                  </div>
                </div>
                <div className={`p-2 rounded-full transition-all ${
                  isOpen ? 'bg-blue-600 rotate-180' : 'bg-gray-200 group-hover:bg-blue-100'
                }`}>
                  <ChevronDown className={`h-5 w-5 ${isOpen ? 'text-white' : 'text-gray-600'}`} />
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-6 pb-6 pl-20">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 border-l-4 border-blue-500">
                    <p className="text-gray-700 leading-relaxed">
                      {p.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white text-center space-y-6 shadow-2xl max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold">Ainda tem dúvidas?</h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          Procure uma unidade de saúde mais próxima ou consulte um profissional de saúde
          para receber orientações personalizadas sobre vacinação.
        </p>
        <div className="inline-block bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
          <p className="font-semibold">Disque Saúde: 136</p>
        </div>
      </div>
    </div>
  );
}