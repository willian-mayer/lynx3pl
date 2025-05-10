'use client';

import Image from 'next/image';

type Item = {
  image: string;
  line1: string;
  line2: string;
};

type WarehouseProps = {
  title: string;
  description: string;
  items: Item[];
};

export default function Warehouse({ title, description, items }: WarehouseProps) {
  return (
    <section id="warehouse" className="lg:h-screen bg-white text-black flex items-center justify-center px-4 py-10">
      <div className="max-w-7xl w-full text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">{title}</h2>
        <p className="text-base md:text-xl mb-12 max-w-4xl mx-auto">{description}</p>

        {/* Modo lista en todas las pantallas */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-start">
              <Image
                src={item.image}
                alt={item.line1}
                width={600}  // Tamaño base para pantallas pequeñas y medianas
                height={400} // Tamaño base para pantallas pequeñas y medianas
                className="rounded-lg object-cover md:w-[600px] md:h-[400px] xl:w-[800px] xl:h-[600px]" // Mayor tamaño para pantallas grandes y extra grandes
              />
              <div className="mt-4 text-center w-full px-2">
                <p className="text-lg font-semibold">{item.line1}</p>
                <p className="text-lg font-semibold">{item.line2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
