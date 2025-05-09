'use client';

import { useEffect, useState } from 'react';
import Navbar from './Navbar'; // Importamos el navbar
import { Route } from "@/types/routes"; // Importar tipo de las rutas

type HeroProps = {
  title: string;
  description: string;
  backgroundImage: string;
  routes: Route[]; // Recibimos las rutas como prop
};

export default function Hero({
  title,
  description,
  backgroundImage,
  routes,
}: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center text-white snap-start"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Navbar fijo en la parte superior, le pasamos las rutas */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar title="Lynx3PL" routes={routes} />  {/* Ahora recibe las rutas */}
      </div>

      {/* Fondo oscuro */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 h-full">
        <h1
          className={`text-4xl md:text-6xl font-bold mb-4 transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-lg md:text-xl transition-all duration-1000 ease-out transform delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
