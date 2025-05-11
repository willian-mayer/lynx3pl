'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

type Testimonial = {
  quote: string;
  author: string;
  year: number;
};

type AboutUsProps = {
  title: string;
  description: string;
  testimonials: Testimonial[];
};

export default function AboutUs({ title, description, testimonials }: AboutUsProps) {
  return (
    <section className="h-screen w-full bg-white text-black snap-start flex flex-col">
      {/* Imagen superior (1/3) */}
      <div className="h-1/3 relative w-full">
        <Image
          src="/aboutus/aboutus.jpg"
          alt="About Us"
          fill
          className="object-cover"
        />
      </div>

      {/* Contenido inferior (2/3) */}
      <div className="h-2/3 overflow-y-auto px-4 sm:px-6 lg:px-12 py-8">
        <h2 className="text-4xl font-bold mb-4 text-center">{title}</h2>
        <p className="text-lg mb-8 mx-auto text-center max-w-screen-xl">
          {description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-xl shadow">
              <div className="flex gap-1 text-yellow-500 mb-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
              </div>
              <p className="italic">“{t.quote}”</p>
              <p className="text-right mt-2 font-semibold">
                — {t.author}, {t.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
