"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Shield, Syringe, Baby, Users } from "lucide-react";

export default function Vacinas() {
  const vacinas = [
    {
      nome: "BCG",
      descricao: "Protege contra formas graves de tuberculose, especialmente em crianças. Aplicada logo após o nascimento.",
      icon: Baby,
      cor: "blue"
    },
    {
      nome: "Hepatite B",
      descricao: "Previne a hepatite causada pelo vírus B, que pode levar a doenças graves do fígado. Essencial para todas as idades.",
      icon: Shield,
      cor: "green"
    },
    {
      nome: "Tríplice Viral",
      descricao: "Protege contra sarampo, caxumba e rubéola. Vacina combinada que oferece proteção tripla com uma única aplicação.",
      icon: Users,
      cor: "purple"
    },
    {
      nome: "Pentavalente",
      descricao: "Protege contra difteria, tétano, coqueluche, hepatite B e Haemophilus influenzae tipo b. Vacina múltipla essencial.",
      icon: Syringe,
      cor: "orange"
    },
    {
      nome: "Febre Amarela",
      descricao: "Previne a febre amarela, doença viral transmitida por mosquitos. Importante para áreas endêmicas e viagens.",
      icon: Shield,
      cor: "yellow"
    },
    {
      nome: "COVID-19",
      descricao: "Proteção contra o coronavírus SARS-CoV-2. Disponível para todas as faixas etárias com doses de reforço.",
      icon: Users,
      cor: "red"
    }
  ];

  const [selecionada, setSelecionada] = useState<number | null>(null);

  const getCorClass = (cor: string, tipo: 'bg' | 'text' | 'border' | 'hover') => {
    const cores: any = {
      blue: { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-500', hover: 'hover:border-blue-600' },
      green: { bg: 'bg-green-500', text: 'text-green-600', border: 'border-green-500', hover: 'hover:border-green-600' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-500', hover: 'hover:border-purple-600' },
      orange: { bg: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-500', hover: 'hover:border-orange-600' },
      yellow: { bg: 'bg-yellow-500', text: 'text-yellow-600', border: 'border-yellow-500', hover: 'hover:border-yellow-600' },
      red: { bg: 'bg-red-500', text: 'text-red-600', border: 'border-red-500', hover: 'hover:border-red-600' }
    };
    return cores[cor][tipo];
  };

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Vacinas Disponíveis
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Conheça as principais vacinas oferecidas gratuitamente pelo SUS.
          Clique em cada vacina para saber mais detalhes.
        </p>
      </div>

      {/* Vacinas Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {vacinas.map((v, i) => {
          const Icon = v.icon;
          const isSelected = selecionada === i;
          
          return (
            <div
              key={i}
              onClick={() => setSelecionada(isSelected ? null : i)}
              className={`group relative p-6 bg-white rounded-2xl shadow-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border-2 ${
                isSelected 
                  ? `${getCorClass(v.cor, 'border')} shadow-xl scale-105` 
                  : `border-transparent ${getCorClass(v.cor, 'hover')}`
              }`}
            >
              {/* Icon Background */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${getCorClass(v.cor, 'bg')} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform`}></div>
              
              {/* Content */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-start justify-between">
                  <div className={`p-3 ${getCorClass(v.cor, 'bg')} rounded-xl shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className={`p-2 rounded-full ${isSelected ? getCorClass(v.cor, 'bg') : 'bg-gray-200'} transition-colors`}>
                    {isSelected ? (
                      <ChevronUp className={`h-5 w-5 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600" />
                    )}
                  </div>
                </div>

                <div>
                  <h3 className={`text-2xl font-bold ${getCorClass(v.cor, 'text')} mb-2`}>
                    {v.nome}
                  </h3>
                  <div className={`h-1 w-16 ${getCorClass(v.cor, 'bg')} rounded-full transition-all ${isSelected ? 'w-24' : ''}`}></div>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${
                  isSelected ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-gray-700 leading-relaxed">
                    {v.descricao}
                  </p>
                </div>

                {!isSelected && (
                  <p className="text-sm text-gray-500 mt-2">
                    Clique para saber mais
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Info Box */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center space-y-4 shadow-xl">
        <h3 className="text-2xl font-bold">Todas as vacinas são gratuitas!</h3>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          O SUS oferece todas essas vacinas gratuitamente para a população brasileira.
          Mantenha sua carteira de vacinação em dia e proteja sua saúde.
        </p>
      </div>
    </div>
  );
}