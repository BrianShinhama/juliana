"use client";
import { useState } from "react";


export default function Vacinas() {
const vacinas = [
{ nome: "BCG", descricao: "Protege contra formas graves de tuberculose." },
{ nome: "Hepatite B", descricao: "Previne a hepatite causada pelo vírus B." },
{ nome: "Tríplice Viral", descricao: "Protege contra sarampo, caxumba e rubéola." },
];


const [selecionada, setSelecionada] = useState<number | null>(null);


return (
<div>
<h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Vacinas Disponíveis</h1>
<ul className="grid gap-6 md:grid-cols-2">
{vacinas.map((v, i) => (
<li 
key={i}
className="p-5 bg-white rounded-xl shadow cursor-pointer hover:bg-blue-50 transition"
onClick={() => setSelecionada(selecionada === i ? null : i)}
>
<strong className="text-lg text-blue-600">{v.nome}</strong>
{selecionada === i && (
<p className="mt-3 text-sm text-gray-700">{v.descricao}</p>
)}
</li>
))}
</ul>
</div>
);
}