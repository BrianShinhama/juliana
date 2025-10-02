// src/components/Footer.tsx
import { Heart, Shield, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white mt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">💉</span>
              <h3 className="text-2xl font-bold">Vacinas BR</h3>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Informações confiáveis e acessíveis sobre vacinação no Brasil.
              Protegendo vidas através da imunização.
            </p>
            <div className="flex items-center space-x-2 text-blue-200">
              <Heart className="h-5 w-5 text-red-400" />
              <span>Saúde é prioridade</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Links Úteis</span>
            </h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a href="https://www.gov.br/saude" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:underline">
                  Ministério da Saúde
                </a>
              </li>
              <li>
                <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/c/calendario-nacional-de-vacinacao" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:underline">
                  Calendário Nacional de Vacinação
                </a>
              </li>
              <li>
                <a href="https://conectesus.saude.gov.br/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:underline">
                  ConecteSUS - Carteira Digital
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Contato</span>
            </h4>
            <div className="space-y-3 text-blue-200">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all">
                <p className="font-semibold text-white mb-1">Disque Saúde</p>
                <p className="text-2xl font-bold">136</p>
              </div>
              <p className="text-sm">
                Atendimento 24 horas para informações sobre saúde e vacinação
              </p>
            </div>
          </div>
        </div>

        
        <div className="h-px bg-blue-700 mb-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} Vacinas no Brasil. Todos os direitos reservados.
          </p>
          <p className="text-blue-300 text-sm flex items-center space-x-2">
            <span>Desenvolvido com</span>
            <Heart className="h-4 w-4 text-red-400 fill-current animate-pulse" />
            <span>e Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}