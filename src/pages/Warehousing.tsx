import React from "react";
import warehousingData from "../data/warehousing.json";
import { motion } from "framer-motion";

interface WarehousingItem {
  name: string;
  desc: string;
  logo: string;
}

interface WarehousingData {
  title: string;
  description: string;
  items: WarehousingItem[];
}

const Warehousing: React.FC = () => {
  const data: WarehousingData = warehousingData[0];

  return (
    <section className="flex flex-col lg:justify-center">
      {/* Parte 1: Imagen (1/2 de la pantalla en lg) */}
      <div className="w-full h-[50vh] lg:h-10px">
        <img
          src="/warehousing/warehousing.jpg"
          alt="Warehousing"
          className="w-full h-full object-cover rounded-b-lg shadow-lg"
        />
      </div>

      {/* Parte 2: Texto + Ítems (1/2 de la pantalla en lg) */}
      <div className="flex flex-col justify-center px-4 py-10 lg:py-16 bg-white dark:bg-gray-900 flex-grow">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            {data.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {data.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                {item.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Warehousing;
