export default function Historia() {
    const eventos = [
    { ano: 1904, evento: "Revolta da Vacina no Rio de Janeiro" },
    { ano: 1973, evento: "Criação do Programa Nacional de Imunizações (PNI)" },
    { ano: 2010, evento: "Erradicação da rubéola no Brasil" },
    ];
    return (
    <div>
    <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">História da Vacinação</h1>
    <ul className="space-y-4">
    {eventos.map((e, i) => (
    <li
    key={i}
    className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition border-l-4 border-blue-500"
    >
    <strong className="text-blue-600">{e.ano}:</strong> {e.evento}
    </li>
    ))}
    </ul>
    </div>
    );
    }