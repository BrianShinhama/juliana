// src/app/page.tsx
import { Syringe, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

export default function Home() {
  return (
    <div className="text-center space-y-10">
      <h1 className="text-5xl font-extrabold text-blue-700">
        Vacinas no Brasil
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Informação confiável e acessível sobre a importância das vacinas para
        a saúde pública brasileira.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card className="hover:shadow-xl transition">
          <CardContent className="flex flex-col items-center p-6 space-y-4">
            <Syringe className="h-12 w-12 text-blue-600" />
            <h2 className="text-xl font-semibold">História da Vacinação</h2>
            <p className="text-sm text-gray-600">
              Descubra como o Brasil se tornou referência mundial em campanhas
              de imunização.
            </p>
            <Button variant="outline" asChild>
              <a href="/historia">Ver Mais</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition">
          <CardContent className="flex flex-col items-center p-6 space-y-4">
            <ShieldCheck className="h-12 w-12 text-green-600" />
            <h2 className="text-xl font-semibold">Vacinas Disponíveis</h2>
            <p className="text-sm text-gray-600">
              Conheça todas as vacinas gratuitas oferecidas pelo SUS.
            </p>
            <Button variant="default" asChild>
              <a href="/vacinas">Explorar</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
