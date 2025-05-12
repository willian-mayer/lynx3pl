// components/Benefits.tsx
import Image from "next/image";

type Benefit = {
  title: string;
};

type BenefitsProps = {
  title: string;
  description: string;
  imageUrl: string;
  benefits: Benefit[];
};

export default function Benefits({ title, description, imageUrl, benefits }: BenefitsProps) {
  return (
    <section id="benefits" className="w-full flex flex-col lg:flex-row lg:min-h-screen">
      {/* Imagen (2/5 en pantallas grandes) */}
      <div className="lg:w-2/5 w-full h-64 lg:h-auto relative">
        <Image
          src={imageUrl}
          alt="Why choose us"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Texto y lista (3/5 en pantallas grandes) */}
      <div className="lg:w-3/5 w-full flex flex-col justify-center px-6 sm:px-10 lg:px-16 bg-white py-12">
        {/* Título y descripción */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-700 mb-6">{description}</p>

        {/* Lista */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="border-l-4 border-green-600 pl-4">
              <p className="text-base font-medium text-gray-800">{benefit.title}</p>
            </div>
          ))}
        </div>

        {/* Línea final */}
        <p className="mt-8 text-green-700 font-semibold">...and many more!</p>
      </div>
    </section>
  );
}
