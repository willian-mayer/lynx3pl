import heroData from "../data/hero.json";
import { Star } from "lucide-react";

export default function Hero() {
  const { title, description, rating } = heroData;

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-white text-center px-6">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-lg text-gray-700 mb-8">{description}</p>

        <div className="bg-gray-100 rounded-xl p-6 shadow-md">
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          <p className="italic text-gray-600">"{rating.quote}"</p>
          <p className="mt-2 text-sm font-semibold text-gray-900">— {rating.author}</p>
        </div>
      </div>
    </section>
  );
}
