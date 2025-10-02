export default function Historia() {
    const eventos = [
      {
        ano: 1904,
        evento: "Revolta da Vacina no Rio de Janeiro",
        descricao: "Movimento popular contra a vacinação obrigatória de varíola, marcando um momento histórico na saúde pública brasileira.",
        cor: "red"
      },
      {
        ano: 1973,
        evento: "Criação do Programa Nacional de Imunizações (PNI)",
        descricao: "Marco fundamental que estabeleceu as bases do sistema de vacinação brasileiro, tornando-se referência mundial.",
        cor: "blue"
      },
      {
        ano: 1989,
        evento: "Erradicação da Poliomielite no Brasil",
        descricao: "O Brasil recebe certificado de erradicação da pólio, resultado de campanhas massivas de vacinação.",
        cor: "green"
      },
      {
        ano: 2010,
        evento: "Erradicação da Rubéola no Brasil",
        descricao: "Conquista histórica que colocou o Brasil entre os países que eliminaram a rubéola e a síndrome da rubéola congênita.",
        cor: "purple"
      },
      {
        ano: 2016,
        evento: "Brasil amplia calendário vacinal",
        descricao: "Inclusão de novas vacinas no SUS, ampliando a proteção da população contra diversas doenças.",
        cor: "orange"
      },
      {
        ano: 2021,
        evento: "Campanha Nacional de Vacinação COVID-19",
        descricao: "Maior campanha de vacinação da história do Brasil, vacinando mais de 200 milhões de pessoas.",
        cor: "teal"
      }
    ];
  
    const getCorClass = (cor: string) => {
      const cores: { [key: string]: { border: string; bg: string; text: string; bgLight: string; } } = {
        red: { border: 'border-red-500', bg: 'bg-red-500', text: 'text-red-600', bgLight: 'bg-red-50' },
        blue: { border: 'border-blue-500', bg: 'bg-blue-500', text: 'text-blue-600', bgLight: 'bg-blue-50' },
        green: { border: 'border-green-500', bg: 'bg-green-500', text: 'text-green-600', bgLight: 'bg-green-50' },
        purple: { border: 'border-purple-500', bg: 'bg-purple-500', text: 'text-purple-600', bgLight: 'bg-purple-50' },
        orange: { border: 'border-orange-500', bg: 'bg-orange-500', text: 'text-orange-600', bgLight: 'bg-orange-50' },
        teal: { border: 'border-teal-500', bg: 'bg-teal-500', text: 'text-teal-600', bgLight: 'bg-teal-50' }
      };
      return cores[cor];
    };
  
    return (
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            História da Vacinação
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os marcos históricos que transformaram o Brasil em referência mundial
            em programas de imunização.
          </p>
        </div>
  
        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Linha vertical */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-purple-300 to-blue-300 transform -translate-x-1/2 hidden md:block"></div>
  
          <div className="space-y-12">
            {eventos.map((e, i) => {
              const cores = getCorClass(e.cor);
              const isEven = i % 2 === 0;
  
              return (
                <div
                  key={i}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } group`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-6 h-6 transform -translate-x-1/2 z-10 hidden md:block">
                    <div className={`w-full h-full ${cores.bg} rounded-full border-4 border-white shadow-lg group-hover:scale-150 transition-transform`}></div>
                  </div>
  
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div
                      className={`p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-l-4 ${cores.border} ${cores.bgLight}`}
                    >
                      {/* Ano Badge */}
                      <div className={`inline-block px-4 py-2 ${cores.bg} text-white font-bold rounded-full text-lg mb-4 shadow-md`}>
                        {e.ano}
                      </div>
  
                      {/* Título */}
                      <h3 className={`text-2xl font-bold ${cores.text} mb-3`}>
                        {e.evento}
                      </h3>
  
                      {/* Descrição */}
                      <p className="text-gray-700 leading-relaxed">
                        {e.descricao}
                      </p>
                    </div>
                  </div>
  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
  
        {/* Info Card */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Um Legado de Proteção</h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              O Programa Nacional de Imunizações é reconhecido mundialmente como um dos
              mais bem-sucedidos programas de saúde pública. Com mais de 50 anos de história,
              o PNI salva milhões de vidas e serve de modelo para outros países.
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Anos de História</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-4xl font-bold mb-2">300M+</div>
                <div className="text-blue-100">Doses Aplicadas/Ano</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Doenças Erradicadas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }