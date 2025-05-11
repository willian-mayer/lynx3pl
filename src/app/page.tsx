import Hero from "@/components/Hero";
import heroData from "@/data/hero.json";
import routesJson from "@/data/routes.json";
import { Route } from "@/types/routes";
import Warehouse from "@/components/Warehouse";
import warehouseData from "@/data/warehouse.json";
import HowWeWork from "@/components/HowWeWork";
import howWeWorkData from "@/data/how-we-work.json";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="snap-start">
        <Hero
        title={heroData.title}
          description={heroData.description}
          backgroundVideo="/video/warehouse.mp4" // Ruta pública del video
          routes={routesJson as Route[]}
          logoUrl="/logo.png" // Ruta pública del logo
        />
      </section>

      <section className="snap-start">
        <Warehouse
          title={warehouseData.title}
          description={warehouseData.description}
          items={warehouseData.items}
        />
      </section>
      <section className="snap-start">
        <HowWeWork
          title={howWeWorkData.title}
          description={howWeWorkData.description}
          steps={howWeWorkData.steps}
        />
      </section>
    </div>
  );
}
