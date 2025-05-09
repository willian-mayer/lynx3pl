import Hero from "@/components/Hero";
import heroData from "@/data/hero.json";
import routesJson from "@/data/routes.json"; // Asegúrate de tener tus rutas en este archivo
import Carousel from "@/components/Carousel";
import { Route } from "@/types/routes"; // Importar el tipo de las rutas
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="snap-start">
        <Hero
          title={heroData.title}
          description={heroData.description}
          backgroundImage={heroData.backgroundImage}
          routes={routesJson as Route[]} 
        />
      </section>

      <section className="snap-start">
        <Carousel />
      </section>
      <section className="snap-start">
        <AboutUs />
      </section>
    </div>
  );
}
