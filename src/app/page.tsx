import Navbar from "@/components/Navbar";
import routesJson from "@/data/routes.json"
import { Route } from "@/types/routes";
export default function Home() {
  return (
    <>
    <div className="">
      <Navbar title="Lynx3PL" routes={routesJson as Route[]}/>
    </div>
    </>
  );
}
