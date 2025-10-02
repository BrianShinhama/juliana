import { Syringe, ShieldCheck, Heart, Users, TrendingUp, Award } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section com Gradiente Animado */}
      <div className="relative text-center space-y-8 py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 rounded-3xl -z-10 animate-pulse"></div>
        
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
            Vacinas no Brasil
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Informação confiável e acessível sobre a importância das vacinas para
          a saúde pública brasileira. Proteja-se e proteja quem você ama.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105" asChild>
            <a href="/vacinas">Explorar Vacinas</a>
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
            <a href="/historia">Nossa História</a>
          </Button>
        </div>
      </div>

      {/* Cards Principais com Hover Effects */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-500 bg-gradient-to-br from-white to-blue-50/50">
          <CardContent className="flex flex-col items-center p-8 space-y-5">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
              <Syringe className="h-14 w-14 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-blue-700 group-hover:text-blue-800">História da Vacinação</h2>
            <p className="text-base text-gray-600 text-center leading-relaxed">
              Descubra como o Brasil se tornou referência mundial em campanhas
              de imunização e salvou milhões de vidas.
            </p>
            <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all" asChild>
              <a href="/historia">Ver Mais</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-green-500 bg-gradient-to-br from-white to-green-50/50">
          <CardContent className="flex flex-col items-center p-8 space-y-5">
            <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
              <ShieldCheck className="h-14 w-14 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-green-700 group-hover:text-green-800">Vacinas Disponíveis</h2>
            <p className="text-base text-gray-600 text-center leading-relaxed">
              Conheça todas as vacinas gratuitas oferecidas pelo SUS e
              mantenha sua carteira de vacinação em dia.
            </p>
            <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-md" asChild>
              <a href="/vacinas">Explorar</a>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Estatísticas com Animação */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Por que vacinar?</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Users, number: "220M+", label: "Brasileiros Vacinados" },
            { icon: Heart, number: "95%", label: "Taxa de Cobertura" },
            { icon: TrendingUp, number: "15+", label: "Doenças Prevenidas" },
            { icon: Award, number: "Nº 1", label: "Referência Mundial" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center space-y-3 group">
              <div className="inline-block p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-all group-hover:scale-110">
                <stat.icon className="h-10 w-10" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold">{stat.number}</div>
              <div className="text-lg text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 text-center space-y-6 border-2 border-purple-200">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Tem dúvidas sobre vacinação?
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Acesse nossa seção de perguntas frequentes e tire todas as suas dúvidas
          sobre segurança, eficácia e disponibilidade das vacinas.
        </p>
        <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all" asChild>
          <a href="/faq">Ver Perguntas Frequentes</a>
        </Button>
      </div>
    </div>
  );
}