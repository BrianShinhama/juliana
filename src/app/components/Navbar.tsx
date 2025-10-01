// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">💉 Vacinas BR</Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-yellow-300">Home</Link>
          <Link href="/historia" className="hover:text-yellow-300">História</Link>
          <Link href="/vacinas" className="hover:text-yellow-300">Vacinas</Link>
          <Link href="/faq" className="hover:text-yellow-300">FAQ</Link>
        </div>
      </div>
    </nav>
  );
}
