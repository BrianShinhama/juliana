"use client";
import { useState } from "react";


export default function FAQ() {
const perguntas = [
{
q: "As vacinas são seguras?",
a: "Sim, passam por rigorosos testes antes de serem aprovadas.",
},
{
q: "Posso ter efeitos colaterais?",
a: "Sim, leves como dor no braço ou febre baixa, mas geralmente passageiros.",
},
{
q: "As vacinas são gratuitas?",
a: "Sim, todas as vacinas do calendário do SUS são gratuitas.",
},
];


const [aberta, setAberta] = useState<number | null>(null);


return (
<div>
<h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Perguntas Frequentes</h1>
<div className="space-y-4">
{perguntas.map((p, i) => (
<div
key={i}
className="border rounded-xl p-4 bg-white shadow hover:shadow-md transition cursor-pointer"
onClick={() => setAberta(aberta === i ? null : i)}
>
<p className="font-semibold text-blue-600">{p.q}</p>
{aberta === i && <p className="mt-2 text-sm text-gray-700">{p.a}</p>}
</div>
))}
</div>
</div>
);
}