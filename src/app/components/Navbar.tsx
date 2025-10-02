// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/historia", label: "História" },
    { href: "/vacinas", label: "Vacinas" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-600 to-purple-600 text-white shadow-xl sticky top-0 z-50 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <span className="text-4xl group-hover:scale-110 transition-transform">💉</span>
            <span className="text-2xl font-bold group-hover:text-yellow-300 transition-colors">
              Vacinas BR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all transform hover:scale-105 ${
                  pathname === link.href
                    ? "bg-white text-blue-700 shadow-lg"
                    : "hover:bg-white/20 hover:text-yellow-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/20 rounded-lg transition-all"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4 animate-in slide-in-from-top">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                  pathname === link.href
                    ? "bg-white text-blue-700 shadow-md"
                    : "hover:bg-white/20"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}