import Hero from "@/components/Hero";
import heroData from "@/data/hero.json";
import routesJson from "@/data/routes.json";
import { Route } from "@/types/routes";
import Warehouse from "@/components/Warehouse";
import warehouseData from "@/data/warehouse.json";
import AboutUs from "@/components/AboutUs";
import aboutUsData from "@/data/aboutus.json";
import servicesData from "@/data/services.json";
import Services from "@/components/Services";
import Fulfillment from "@/components/Fulfillment";
import fulfillmentData from "@/data/fulfillment.json";
import Transloading from "@/components/Transloading";
import transloadingData from "@/data/transloading.json";
import Benefits from "@/components/Benefits";
import benefitsData from "@/data/benefits.json"

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
        <Services
          title={servicesData.title}
          description={servicesData.description}
          services={servicesData.services}
        />
      </section>
      <section className="snap-start">
        <Fulfillment
          title={fulfillmentData.title}
          description={fulfillmentData.description}
          imageUrl={fulfillmentData.imageUrl}
        />
      </section>

      <section className="snap-start">
        <Warehouse
          title={warehouseData.title}
          description={warehouseData.description}
          imageUrl={warehouseData.imageUrl}
        />
      </section>
      <section className="snap-start">
        <Transloading
          title={transloadingData.title}
          description={transloadingData.description}
          imageUrl={transloadingData.imageUrl}
        />
      </section>
      <section className="snap-start">
      <Benefits
        title={benefitsData.title}
        description={benefitsData.description}
        benefits={benefitsData.benefits}
        imageUrl={benefitsData.imageUrl}
      />
      </section>
      <section className="snap-start">
        <AboutUs
          title={aboutUsData.title}
          description={aboutUsData.description}
          testimonials={aboutUsData.testimonials}
        />
      </section>
    </div>
  );
}
