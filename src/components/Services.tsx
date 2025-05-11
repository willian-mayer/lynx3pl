// components/Services.tsx
import Image from "next/image";

type Service = {
  title: string;
  description: string;
  imageUrl: string;
};

type ServicesProps = {
  title: string;
  description: string;
  services: Service[];
};

export default function Services({ title, description, services }: ServicesProps) {
  return (
    <div id="services" className="h-screen px-4 md:px-16 py-10 flex flex-col">
      {/* Parte superior: Título + descripción */}
      <div className="flex flex-col items-center text-center flex-grow justify-end">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-base md:text-lg text-gray-700 max-w-3xl">{description}</p>
      </div>

      {/* Cards en la mitad inferior */}
      <div className="flex justify-center items-start flex-grow mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col transition-transform hover:scale-105"
            >
              <div className="relative h-56 md:h-64 w-full">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
