import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import routesJson from "@/data/routes.json"
import { Route } from "@/types/routes";
import heroData from "@/data/hero.json"

export default function Home() {
  return (
    <>
    <div className="">
      <Navbar title="Lynx3PL" routes={routesJson as Route[]}/>
      <Hero title={heroData.title} description={heroData.description}/> 
    </div>
    </>
  );
}
