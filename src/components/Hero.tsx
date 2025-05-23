// src/components/Hero.tsx
import { Star } from "lucide-react";
import heroData from "../data/hero.json";
import { Link } from "react-router-dom";

export default function Hero() {
  const { title, description, rating, contact } = heroData;

  return (
    <section className="h-screen flex flex-col justify-between items-center bg-white text-center px-6 py-12">
      {/* Contenido principal */}
      <div className="mt-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-lg text-gray-700">{description}</p>
      </div>

      {/* Rating + botón */}
      <div className="mb-12">
        <div className="bg-gray-100 rounded-xl p-6 shadow-md mb-6 max-w-md mx-auto">
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          <p className="italic text-gray-600">"{rating.quote}"</p>
          <p className="mt-2 text-sm font-semibold text-gray-900">— {rating.author}</p>
        </div>

        <Link
          to={contact.url}
          className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          {contact.title}
        </Link>
      </div>
    </section>
  );
}
