// src/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-blue-900 text-white py-6 mt-10">
        <div className="container mx-auto text-center text-sm">
          © {new Date().getFullYear()} Vacinas no Brasil. Todos os direitos reservados.
        </div>
      </footer>
    );
  }
  