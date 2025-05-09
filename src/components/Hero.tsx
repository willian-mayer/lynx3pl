'use client';

import { useEffect, useState } from 'react';

type HeroProps = {
  title: string;
  description: string;
  backgroundImage: string;
};

export default function Hero({ title, description, backgroundImage }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100); // breve retardo para transición
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        paddingTop: '64px',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-4 max-w-2xl">
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
