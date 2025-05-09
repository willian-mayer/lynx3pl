'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react'; // También puedes usar @heroicons/react
import Link from 'next/link';

const routes = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Contacto', path: '/contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800 cursor-pointer" onClick={() => router.push('/')}>
          MiEmpresa
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {routes.map((route) => (
            <Link key={route.path} href={route.path} className="text-gray-700 hover:text-blue-600">
              {route.name}
            </Link>
          ))}
        </div>

        {/* Hamburger button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2 bg-white px-4 pb-4">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {route.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
