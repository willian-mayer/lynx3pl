'use client';

import { useEffect, useState } from 'react';
import carouselImages from '@/data/carousel.json';
import Image from 'next/image';

type ImageItem = {
  src: string;
  alt: string;
};

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const images: ImageItem[] = carouselImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <Image key={index}
        src={image.src}
        alt={image.alt}
        fill
        className={`object-cover transition-opacity duration-1000 ${
          index === current ? 'opacity-100' : 'opacity-0'
        }`}
      />
      ))}

      {/* Opcional: indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
